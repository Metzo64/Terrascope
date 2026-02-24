document.addEventListener("DOMContentLoaded", () => {
  if (!window.location.pathname.includes("dashboard")) return;

  /* ======================================================
     LOAD & VALIDATE DATA
  ====================================================== */
  const raw = localStorage.getItem("analysis_result");
  if (!raw) return;

  let data;
  try { data = JSON.parse(raw); }
  catch { console.warn("Invalid analysis_result JSON"); return; }

  const ndviVal = typeof data.ndvi?.value === "number" ? data.ndvi.value : null;
  const ndmiVal = typeof data.ndmi?.value === "number" ? data.ndmi.value : null;
  const ndviText = data.ndvi?.meaning || "crop condition unclear";
  const ndmiText = data.ndmi?.meaning || "moisture condition unclear";

  /* ======================================================
     UTILS
  ====================================================== */
  function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
  function qs(id) { return document.getElementById(id); }
  function clearList(id) { const el = qs(id); if (el) el.innerHTML = ""; }
  function addListItem(id, text) {
    const el = qs(id);
    if (!el || !text) return;
    const li = document.createElement("li");
    li.textContent = text;
    el.appendChild(li);
  }
  function addRiskPill(text) {
    const el = qs("riskList");
    if (!el || !text) return;
    const li = document.createElement("li");
    li.className = "risk-pill";
    li.textContent = text;
    el.appendChild(li);
  }

  /* ======================================================
     SCORE CONVERSION
  ====================================================== */
  function ndviToScore(v) {
    if (v === null) return null;
    return clamp(Math.round(((v - 0.15) / 0.7) * 100), 0, 100);
  }
  function ndmiToScore(v) {
    if (v === null) return null;
    return clamp(Math.round(((v - 0.03) / 0.62) * 100), 0, 100);
  }

  const cropScore = ndviToScore(ndviVal);
  const waterScore = ndmiToScore(ndmiVal);

  /* ======================================================
     SCORE → LEVEL
  ====================================================== */
  function levelFromScore(score) {
    if (score === null) return "warning";
    if (score >= 85) return "excellent";
    if (score >= 70) return "good";
    if (score >= 55) return "fair";
    if (score >= 40) return "warning";
    return "danger";
  }

  /* score → 3-tier for bullet lookup */
  function tierFromScore(score) {
    if (score === null) return "low";
    if (score >= 70) return "high";
    if (score >= 40) return "mid";
    return "low";
  }

  const cropLevel = levelFromScore(cropScore);
  const waterLevel = levelFromScore(waterScore);
  const cropTier = tierFromScore(cropScore);
  const waterTier = tierFromScore(waterScore);

  /* ======================================================
     TRANSLATION HELPERS  (sb / sbStr exposed by lang.js)
  ====================================================== */
  /* safe wrappers in case lang.js hasn't loaded yet */
  const $sb = window.sb || (() => []);
  const $sbStr = window.sbStr || (() => "");

  /* ======================================================
     OVERALL FIELD STATUS
  ====================================================== */
  let overallLevel = "excellent";
  if (cropLevel === "danger" || waterLevel === "danger") overallLevel = "danger";
  else if (cropLevel === "warning" || waterLevel === "warning") overallLevel = "warning";
  else if (cropLevel === "fair" || waterLevel === "fair") overallLevel = "fair";
  else if (cropLevel === "good" || waterLevel === "good") overallLevel = "good";

  /* ── Color-tint the page based on overall health ──── */
  const healthClass = (overallLevel === "danger" || overallLevel === "warning")
    ? `health-${overallLevel}`
    : "health-good";
  document.body.classList.add(healthClass);

  /* ======================================================
     BADGE  (reused for overall, crop, water)
  ====================================================== */
  function setBadge(el, level) {
    if (!el) return;
    el.className = `status-badge badge-${level}`;
    el.textContent = $sbStr("badge", level) || level;
  }

  setBadge(qs("overallBadge"), overallLevel);

  const overallTextEl = qs("overallText");
  if (overallTextEl) {
    overallTextEl.textContent = $sbStr("overall", overallLevel);
  }

  /* ======================================================
     SVG GAUGE ANIMATOR
  ====================================================== */
  function animateGauge(prefix, score) {
    if (score === null) return;
    const cx = 110, cy = 112, needleLen = 72;
    const s = Math.max(0, Math.min(100, score));
    const start = performance.now();
    const duration = 1500;
    const color = s >= 70 ? "#27ae60" : s >= 40 ? "#f39c12" : "#e74c3c";

    function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
    function frame(now) {
      const t = Math.min((now - start) / duration, 1);
      const cur = Math.round(s * easeOut(t));
      const deg = 180 + 180 * (cur / 100);
      const rad = deg * Math.PI / 180;
      const x2 = (cx + needleLen * Math.cos(rad)).toFixed(1);
      const y2 = (cy + needleLen * Math.sin(rad)).toFixed(1);

      const needle = document.getElementById(prefix + "Needle");
      const dot = document.getElementById(prefix + "Dot");
      const txt = document.getElementById(prefix + "ScoreText");

      if (needle) { needle.setAttribute("x2", x2); needle.setAttribute("y2", y2); needle.setAttribute("stroke", color); }
      if (dot) dot.setAttribute("fill", color);
      if (txt) { txt.textContent = cur; txt.setAttribute("fill", color); }
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  /* ======================================================
     MINI SCORE BOXES
  ====================================================== */
  function setMini(scoreId, tagId, score, level) {
    const scoreEl = qs(scoreId);
    const tagEl = qs(tagId);
    if (!scoreEl || score === null) return;
    scoreEl.textContent = score;
    if (tagEl) {
      tagEl.textContent = $sbStr("badge", level) || level;
      tagEl.className = `mb-tag tag-${level}`;
    }
  }

  setMini("miniCropScore", "miniCropTag", cropScore, cropLevel);
  setMini("miniWaterScore", "miniWaterTag", waterScore, waterLevel);

  /* ======================================================
     CROP SECTION
  ====================================================== */
  setBadge(qs("cropBadge"), cropLevel);
  animateGauge("crop", cropScore);

  const cropVerdict = qs("cropVerdict");
  if (cropVerdict && cropScore !== null) {
    cropVerdict.innerHTML = `<strong>${cropScore}/100 – ${$sbStr("crop_verdict", cropLevel)}</strong>`;
  }

  const cropText = qs("cropText");
  if (cropText) {
    cropText.textContent =
      `Satellite analysis indicates ${ndviText}. This reflects the current vegetation density and plant health across your field.`;
  }

  clearList("cropReasons"); clearList("cropRisks"); clearList("cropActions");
  if (cropScore !== null) {
    $sb("crop", cropTier, "reasons").forEach(txt => addListItem("cropReasons", txt));
    $sb("crop", cropTier, "risks").forEach(txt => addListItem("cropRisks", txt));
    $sb("crop", cropTier, "actions").forEach(txt => addListItem("cropActions", txt));
  }

  /* ======================================================
     NDVI MAP
  ====================================================== */
  const cropMapImg = qs("cropMapImage");
  const cropMapWrap = qs("cropMapWrap");
  const legendWrap = qs("ndviLegendWrap");
  if (cropMapImg && cropMapWrap && data.map_image_url) {
    cropMapImg.src = data.map_image_url;
    cropMapWrap.style.display = "block";
    if (legendWrap) legendWrap.style.display = "block";
  }

  /* ======================================================
     WATER SECTION
  ====================================================== */
  setBadge(qs("waterBadge"), waterLevel);
  animateGauge("water", waterScore);

  const waterVerdict = qs("waterVerdict");
  if (waterVerdict && waterScore !== null) {
    waterVerdict.innerHTML = `<strong>${waterScore}/100 – ${$sbStr("water_verdict", waterLevel)}</strong>`;
  }

  const waterText = qs("waterText");
  if (waterText) {
    waterText.textContent =
      `Satellite moisture analysis indicates ${ndmiText}. This reflects the current water availability in the root zone.`;
  }

  clearList("waterReasons"); clearList("waterRisks"); clearList("waterActions");
  if (waterScore !== null) {
    $sb("water", waterTier, "reasons").forEach(txt => addListItem("waterReasons", txt));
    $sb("water", waterTier, "risks").forEach(txt => addListItem("waterRisks", txt));
    $sb("water", waterTier, "actions").forEach(txt => addListItem("waterActions", txt));
  }

  /* ======================================================
     FIELD RISKS
  ====================================================== */
  const riskText = qs("riskText");
  const riskList = qs("riskList");
  if (!riskText || !riskList) return;
  riskList.innerHTML = "";

  riskText.textContent = $sbStr("risk_text", overallLevel);

  const pills = window.sbStr
    ? (() => {
      const lang = localStorage.getItem("lang") || "en";
      return (window.summaryBullets?.[lang]?.risk_pills?.[overallLevel])
        ?? (window.summaryBullets?.en?.risk_pills?.[overallLevel])
        ?? [];
    })()
    : [];
  pills.forEach(p => addRiskPill(p));
});
