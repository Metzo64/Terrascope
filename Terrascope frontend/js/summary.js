document.addEventListener("DOMContentLoaded", () => {
  if (!window.location.pathname.includes("dashboard")) return;

  const raw = localStorage.getItem("analysis_result");
  if (!raw) return;

  const data = JSON.parse(raw);

  function applyBadge(el, status) {
    if (!el) return;

    el.textContent = status;
    el.classList.remove("good", "warning", "danger");

    if (status === "High") el.classList.add("good");
    else if (status === "Moderate") el.classList.add("warning");
    else el.classList.add("danger");
  }

  /* =========================
     OVERALL SUMMARY
  ========================= */
  const overallBadge = document.getElementById("overallBadge");
  const overallText = document.getElementById("overallText");

  let overallStatus = "Healthy";

  if (data.crop_status === "Low" || data.moisture_status === "Low") {
    overallStatus = "Needs Attention";
    overallBadge.className = "badge large danger";
    overallText.textContent = "Some parts of the field may need attention.";
  } else if (
    data.crop_status === "Moderate" ||
    data.moisture_status === "Moderate"
  ) {
    overallStatus = "Watch Closely";
    overallBadge.className = "badge large warning";
    overallText.textContent = "Some parts of the field may need attention.";
  } else {
    overallBadge.className = "badge large good";
    overallText.textContent = "Field conditions look healthy overall.";
  }

  overallBadge.textContent = overallStatus;

  applyBadge(document.getElementById("miniCrop"), data.crop_status);
  applyBadge(document.getElementById("miniMoisture"), data.moisture_status);
  document.getElementById("miniTrend").textContent = "Stable";

  /* =========================
     CROP CONDITION
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
     MAP IMAGE
  ========================= */
  const img = document.getElementById("cropMapImage");
  if (data.map_image_url) {
    img.src = data.map_image_url;
    img.style.display = "block";
  }

  /* =========================
     WATER & SOIL
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
     FIELD RISKS
  ========================= */
  document.getElementById("riskText").textContent =
    data.crop_status === "Low" && data.moisture_status === "Low"
      ? "High risk of yield loss due to crop and moisture stress."
      : data.crop_status === "Moderate" || data.moisture_status === "Moderate"
      ? "Early stress indicators detected."
      : "No major risks detected at this time.";
});
