document.addEventListener("DOMContentLoaded", () => {
  if (!window.location.pathname.includes("dashboard")) return;

  /* ======================================================
     LOAD & VALIDATE DATA
  ====================================================== */
  const raw = localStorage.getItem("analysis_result");
  if (!raw) return;

  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    console.warn("Invalid analysis_result JSON");
    return;
  }

  const crop = data.crop || "general";

  const ndviVal =
    typeof data.ndvi?.value === "number" ? data.ndvi.value : null;
  const ndmiVal =
    typeof data.ndmi?.value === "number" ? data.ndmi.value : null;

  const ndviText = data.ndvi?.meaning || "crop condition unclear";
  const ndmiText = data.ndmi?.meaning || "moisture condition unclear";

  /* ======================================================
     UTILS
  ====================================================== */
  function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
  }

  function qs(id) {
    return document.getElementById(id);
  }

  function clearList(id) {
    const el = qs(id);
    if (!el) return;
    el.innerHTML = "";
  }

  function addListItem(id, text) {
    const el = qs(id);
    if (!el) return;
    const li = document.createElement("li");
    li.textContent = text;
    el.appendChild(li);
  }

  /* ======================================================
     SCORE CONVERSION (PRECISE, NOT DUMB)
  ====================================================== */
  function ndviToScore(v) {
    if (v === null) return null;
    // realistic NDVI range 0.15 → 0.85
    return clamp(Math.round(((v - 0.15) / 0.7) * 100), 0, 100);
  }

  function ndmiToScore(v) {
    if (v === null) return null;
    // realistic NDMI range 0.03 → 0.65
    return clamp(Math.round(((v - 0.03) / 0.62) * 100), 0, 100);
  }

  const cropScore = ndviToScore(ndviVal);
  const waterScore = ndmiToScore(ndmiVal);

  /* ======================================================
     SCORE → LEVEL (MORE THAN 3 RANGES)
  ====================================================== */
  function levelFromScore(score) {
    if (score === null) return "warning";
    if (score >= 85) return "excellent";
    if (score >= 70) return "good";
    if (score >= 55) return "fair";
    if (score >= 40) return "warning";
    return "danger";
  }

  const cropLevel = levelFromScore(cropScore);
  const waterLevel = levelFromScore(waterScore);

  /* ======================================================
     BADGES
  ====================================================== */
  function setBadge(el, level, text) {
    if (!el) return;

    el.className = "badge large " + level;

    const labelMap = {
      excellent: "Excellent",
      good: "Good",
      fair: "Fair",
      warning: "Needs Attention",
      danger: "Critical"
    };

    el.textContent = text || labelMap[level] || "Status";
  }

  /* ======================================================
     SCORE BARS
  ====================================================== */
  function setScore(barId, textId, score, level) {
    const bar = qs(barId);
    const text = qs(textId);
    if (!bar || !text || score === null) return;

    bar.style.width = score + "%";
    bar.className = "score-fill " + level;
    text.textContent = score;
  }

  /* ======================================================
     OVERALL FIELD STATUS
  ====================================================== */
  let overallLevel = "excellent";

  if (cropLevel === "danger" || waterLevel === "danger") {
    overallLevel = "danger";
  } else if (
    cropLevel === "warning" ||
    waterLevel === "warning"
  ) {
    overallLevel = "warning";
  } else if (
    cropLevel === "fair" ||
    waterLevel === "fair"
  ) {
    overallLevel = "fair";
  } else if (
    cropLevel === "good" ||
    waterLevel === "good"
  ) {
    overallLevel = "good";
  }

  setBadge(qs("overallBadge"), overallLevel);

  const overallText = qs("overallText");
  if (overallText) {
    const overallMessage = {
      excellent:
        "🌟 Your field is in excellent condition. Crop growth and soil moisture are well balanced.",
      good:
        "✅ Your field is healthy. Minor improvements can further increase yield.",
      fair:
        "🙂 Your field is stable, but some stress signs are beginning to appear.",
      warning:
        "⚠️ Parts of the field need attention to prevent future yield loss.",
      danger:
        "🚨 Field condition is poor. Immediate corrective action is strongly recommended."
    };

    overallText.textContent =
      overallMessage[overallLevel] || "";
  }

  /* ======================================================
     MINI CARDS
  ====================================================== */
  function setMini(id, score, level) {
    const el = qs(id);
    if (!el || score === null) return;

    const card = el.closest(".mini-card");
    if (card) {
      card.classList.remove(
        "excellent",
        "good",
        "fair",
        "warning",
        "danger"
      );
      card.classList.add(level);
    }

    el.textContent = score + "/100";
  }

  setMini("miniCrop", cropScore, cropLevel);
  setMini("miniMoisture", waterScore, waterLevel);

  /* ======================================================
     CROP SECTION – VERDICT + EXPLANATION
  ====================================================== */
  setBadge(qs("cropBadge"), cropLevel);
  setScore("cropBar", "cropScore", cropScore, cropLevel);

  const cropVerdict = qs("cropVerdict");
  if (cropVerdict && cropScore !== null) {
    cropVerdict.innerHTML = `<strong>${cropScore}/100 – ${
      cropLevel === "excellent"
        ? "Crop is thriving 🌱"
        : cropLevel === "good"
        ? "Crop is healthy 👍"
        : cropLevel === "fair"
        ? "Crop growth is average 🙂"
        : cropLevel === "warning"
        ? "Crop is under stress ⚠️"
        : "Crop condition is poor 🚨"
    }</strong>`;
  }

  const cropText = qs("cropText");
  if (cropText) {
    cropText.textContent = `Satellite analysis indicates ${ndviText}. This reflects the current vegetation density and plant health across your field.`;
  }

clearList("cropReasons");
clearList("cropRisks");
clearList("cropActions");

if (cropScore !== null) {
  // 🌱 POSITIVES — ALWAYS AT LEAST ONE
  if (cropScore >= 85) {
    addListItem("cropReasons", "Plants show dense and uniform growth");
    addListItem("cropReasons", "Photosynthesis activity is very high");
  } else if (cropScore >= 55) {
    addListItem("cropReasons", "Vegetation is present across most of the field");
    addListItem("cropReasons", "Crop stress detected early through satellite data");
  } else {
    addListItem("cropReasons", "Satellite data successfully detected crop stress");
    addListItem("cropReasons", "Field is not bare soil, vegetation still exists");
  }

  // ⚠️ RISKS
  if (cropScore >= 70) {
    addListItem("cropRisks", "Minor stress may appear if ignored");
  } else if (cropScore >= 40) {
    addListItem("cropRisks", "Uneven growth may reduce yield");
    addListItem("cropRisks", "Stress may worsen under heat or pests");
  } else {
    addListItem("cropRisks", "Severe crop stress detected");
    addListItem("cropRisks", "High probability of yield loss");
  }

  // 🛠️ ACTIONS
  if (cropScore >= 70) {
    addListItem("cropActions", "Continue monitoring crop health");
  } else if (cropScore >= 40) {
    addListItem("cropActions", "Check irrigation and nutrient balance");
  } else {
    addListItem("cropActions", "Immediate agronomic intervention required");
    addListItem("cropActions", "Consult local agriculture expert");
  }
}

  /* ======================================================
     NDVI MAP
  ====================================================== */
  const cropMapImg = qs("cropMapImage");
  if (cropMapImg && data.map_image_url) {
    cropMapImg.src = data.map_image_url;
    cropMapImg.style.display = "block";
  }

  /* ======================================================
     WATER SECTION – VERDICT + EXPLANATION
  ====================================================== */
  setBadge(qs("waterBadge"), waterLevel);
  setScore("waterBar", "waterScore", waterScore, waterLevel);

  const waterVerdict = qs("waterVerdict");
  if (waterVerdict && waterScore !== null) {
    waterVerdict.innerHTML = `<strong>${waterScore}/100 – ${
      waterLevel === "excellent"
        ? "Soil moisture is ideal 💧"
        : waterLevel === "good"
        ? "Moisture levels are healthy 👍"
        : waterLevel === "fair"
        ? "Moisture is slightly uneven 🙂"
        : waterLevel === "warning"
        ? "Soil is getting dry ⚠️"
        : "Severe moisture stress 🚨"
    }</strong>`;
  }

  const waterText = qs("waterText");
  if (waterText) {
    waterText.textContent = `Satellite moisture analysis indicates ${ndmiText}. This reflects the current water availability in the root zone.`;
  }

clearList("waterReasons");
clearList("waterRisks");
clearList("waterActions");

if (waterScore !== null) {
  // 💧 POSITIVES — ALWAYS
  if (waterScore >= 85) {
    addListItem("waterReasons", "Soil moisture is evenly distributed");
    addListItem("waterReasons", "Root zone has sufficient water");
  } else if (waterScore >= 55) {
    addListItem("waterReasons", "Some moisture still present in soil");
    addListItem("waterReasons", "No waterlogging detected");
  } else {
    addListItem("waterReasons", "Moisture stress detected early");
    addListItem("waterReasons", "No flooding or excess water observed");
  }

  // ⚠️ RISKS
  if (waterScore >= 70) {
    addListItem("waterRisks", "Moisture may reduce under heat stress");
  } else if (waterScore >= 40) {
    addListItem("waterRisks", "Dry patches likely in the field");
  } else {
    addListItem("waterRisks", "Severe moisture stress detected");
    addListItem("waterRisks", "Crop may wilt or dry");
  }

  // 🚿 ACTIONS
  if (waterScore >= 70) {
    addListItem("waterActions", "Maintain current irrigation schedule");
  } else if (waterScore >= 40) {
    addListItem("waterActions", "Plan irrigation in the coming days");
  } else {
    addListItem("waterActions", "Immediate irrigation required");
    addListItem("waterActions", "Avoid delay to prevent crop damage");
  }
}


  /* ======================================================
     FIELD RISKS (STRONG & COLORFUL)
  ====================================================== */
  const riskText = qs("riskText");
  const riskList = qs("riskList");
  if (!riskText || !riskList) return;

  riskList.innerHTML = "";

  if (overallLevel === "excellent") {
    riskText.textContent =
      "🟢 No significant risks detected. Field conditions are optimal.";
  } else if (overallLevel === "good") {
    riskText.textContent =
      "🟡 Minor risks possible if conditions change suddenly.";
    addListItem("riskList", "Weather variability may affect moisture");
  } else if (overallLevel === "fair") {
    riskText.textContent =
      "🟠 Moderate risks detected. Preventive action is advised.";
    addListItem("riskList", "Increasing crop stress possible");
    addListItem("riskList", "Uneven moisture distribution");
  } else if (overallLevel === "warning") {
    riskText.textContent =
      "🟠 High risk if no action is taken soon.";
    addListItem("riskList", "Crop stress may worsen");
    addListItem("riskList", "Yield reduction likely");
  } else {
    riskText.textContent =
      "🔴 Critical risk detected. Immediate action required.";
    addListItem("riskList", "Severe crop damage possible");
    addListItem("riskList", "High probability of yield loss");
  }
});
