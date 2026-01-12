document.addEventListener("DOMContentLoaded", () => {
  if (!window.location.pathname.includes("dashboard")) return;

  const raw = localStorage.getItem("analysis_result");
  if (!raw) {
    console.error("No analysis_result in localStorage");
    return;
  }

  const data = JSON.parse(raw);

  /* =========================
     HELPER
  ========================= */
  function applyBadge(el, status) {
    if (!el || !status) return;

    el.textContent = status;
    el.classList.remove("good", "warning", "danger");

    if (status === "High") el.classList.add("good");
    else if (status === "Moderate") el.classList.add("warning");
    else if (status === "Low") el.classList.add("danger");
  }

  /* =========================
     1. FIELD HEALTH SUMMARY
  ========================= */
  const overallBadge = document.getElementById("overallBadge");
  const overallText = document.getElementById("overallText");

  let overallStatus = "Healthy";

  if (data.crop_status === "Low" || data.moisture_status === "Low") {
    overallStatus = "Needs Attention";
    overallBadge.className = "badge large danger";
  } else if (
    data.crop_status === "Moderate" ||
    data.moisture_status === "Moderate"
  ) {
    overallStatus = "Watch Closely";
    overallBadge.className = "badge large warning";
  } else {
    overallBadge.className = "badge large good";
  }

  overallBadge.textContent = overallStatus;
  overallText.textContent =
    overallStatus === "Healthy"
      ? "Field conditions look healthy overall."
      : "Some parts of the field may need attention.";

  applyBadge(document.getElementById("miniCrop"), data.crop_status);
  applyBadge(document.getElementById("miniMoisture"), data.moisture_status);
  document.getElementById("miniTrend").textContent = "Stable";

  /* =========================
     2. CROP CONDITION
  ========================= */
  applyBadge(document.getElementById("cropBadge"), data.crop_status);

  document.getElementById("cropText").textContent =
    data.crop_status === "High"
      ? "Crop growth appears healthy across most of the field."
      : data.crop_status === "Moderate"
      ? "Some crop areas show uneven growth."
      : "Crop stress detected in multiple areas.";

  document.getElementById("cropHint").textContent =
    data.crop_status === "Low"
      ? "Inspect stressed areas and take corrective action."
      : "Continue regular monitoring.";

/* =========================
   STATIC OSM MAP
========================= */
const img = document.getElementById("cropMapImage");

if (data.map_image_url) {
  img.src = data.map_image_url;
  img.style.display = "block";
}


  /* =========================
     3. WATER & SOIL
  ========================= */
  applyBadge(document.getElementById("waterBadge"), data.moisture_status);

  document.getElementById("waterText").textContent =
    data.moisture_status === "Low"
      ? "Soil moisture is currently low."
      : "Soil moisture levels are adequate.";

  document.getElementById("waterHint").textContent =
    data.moisture_status === "Low"
      ? "Irrigation may be required if dry conditions persist."
      : "No immediate irrigation needed.";

  /* =========================
     4. FIELD RISKS
  ========================= */
  document.getElementById("riskText").textContent =
    data.crop_status === "Low" && data.moisture_status === "Low"
      ? "High risk of yield loss due to crop and moisture stress."
      : data.crop_status === "Moderate" || data.moisture_status === "Moderate"
      ? "Early stress indicators detected."
      : "No major risks detected at this time.";
});

