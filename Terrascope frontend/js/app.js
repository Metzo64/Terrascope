/* =========================================================
   app.js  —  Field selection logic + backend call
   (auth handled by auth.js — no duplicate Supabase client)
========================================================= */

/* ─── CROP CHIP SELECTOR ────────────────────────────── */
let selectedCrop = localStorage.getItem("selected_crop") || "general";

function setCrop(el) {
  document.querySelectorAll(".crop-chip").forEach(c => c.classList.remove("active"));
  el.classList.add("active");
  selectedCrop = el.dataset.crop;
  localStorage.setItem("selected_crop", selectedCrop);
}

/* ─── Hoisted helpers (replaced when map inits) ─────── */
let resetSelection = () => { };
let enableContinue = () => { };

/* ─── MODE CARD SELECTOR ────────────────────────────── */
let selectedMode = "point";

function setMode(mode) {
  selectedMode = mode;
  document.querySelectorAll(".mode-card").forEach(c => c.classList.remove("active"));
  document.querySelector(`.mode-card[data-mode="${mode}"]`)?.classList.add("active");

  const satbaraBox = document.getElementById("satbaraBox");
  const mapEl = document.getElementById("map");

  if (mode === "satbara") {
    satbaraBox && (satbaraBox.style.display = "block");
    mapEl?.classList.add("map-disabled");
    if (map) { try { map.removeControl(drawControl); } catch (_) { } }
  } else {
    satbaraBox && (satbaraBox.style.display = "none");
    mapEl?.classList.remove("map-disabled");
    if (mode === "polygon" && map) {
      try { map.addControl(drawControl); } catch (_) { }
    } else if (map) {
      try { map.removeControl(drawControl); } catch (_) { }
    }
  }
  resetSelection();
}

/* ─── MAP INIT ──────────────────────────────────────── */
let map, drawControl, pointMarker;
const drawnItems = typeof L !== "undefined" ? new L.FeatureGroup() : null;

if (document.getElementById("map")) {
  map = L.map("map").setView([20.5937, 78.9629], 5);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  if (drawnItems) map.addLayer(drawnItems);

  drawControl = new L.Control.Draw({
    draw: {
      polygon: true, rectangle: false, circle: false,
      marker: false, polyline: false, circlemarker: false
    },
    edit: { featureGroup: drawnItems }
  });

  /* ─── Reset ─────────────────────────────────────── */
  resetSelection = function () {
    if (drawnItems) drawnItems.clearLayers();
    if (pointMarker) { map.removeLayer(pointMarker); pointMarker = null; }
    localStorage.removeItem("field_point");
    localStorage.removeItem("field_polygon");
    const coordsEl = document.getElementById("coords");
    const btn = document.getElementById("continueBtn");
    if (coordsEl) coordsEl.innerText = "No location selected";
    if (btn) btn.classList.add("disabled");
  };

  enableContinue = function (text) {
    const coordsEl = document.getElementById("coords");
    const btn = document.getElementById("continueBtn");
    if (coordsEl) coordsEl.innerHTML = `<strong>${text}</strong>`;
    if (btn) btn.classList.remove("disabled");
  };

  /* ─── Point click ───────────────────────────────── */
  map.on("click", (e) => {
    if (selectedMode !== "point") return;
    resetSelection();
    pointMarker = L.marker(e.latlng).addTo(map);
    localStorage.setItem("field_point", JSON.stringify({ lat: e.latlng.lat, lon: e.latlng.lng }));
    enableContinue(`${e.latlng.lat.toFixed(5)}, ${e.latlng.lng.toFixed(5)}`);
  });

  /* ─── Polygon drawn ─────────────────────────────── */
  map.on(L.Draw.Event.CREATED, (event) => {
    if (selectedMode !== "polygon" && selectedMode !== "satbara") return;
    resetSelection();
    drawnItems.addLayer(event.layer);
    const coords = event.layer.toGeoJSON().geometry.coordinates[0];
    localStorage.setItem("field_polygon", JSON.stringify(coords));
    enableContinue("Farm boundary selected ✓");
  });

  /* ─── Use my location ───────────────────────────── */
  const locateBtn = document.getElementById("useLocationBtn");
  if (locateBtn) {
    locateBtn.addEventListener("click", () => {
      if (!navigator.geolocation) { alert("Geolocation not supported"); return; }
      setMode("point");
      navigator.geolocation.getCurrentPosition(
        pos => {
          const { latitude: lat, longitude: lon } = pos.coords;
          pointMarker = L.marker([lat, lon]).addTo(map);
          map.setView([lat, lon], 15);
          localStorage.setItem("field_point", JSON.stringify({ lat, lon }));
          enableContinue(`${lat.toFixed(5)}, ${lon.toFixed(5)}`);
        },
        () => alert("Unable to retrieve location")
      );
    });
  }

  /* Apply satbara-mode UI on first load */
  setMode("satbara");
}

/* ─── VILLAGE ZOOM (Satbara) ────────────────────────── */
async function zoomToVillage(village) {
  const q = encodeURIComponent(`${village}, Maharashtra, India`);
  const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${q}&format=json&limit=1`);
  const data = await res.json();
  if (!data.length) { alert("Could not locate village. Check spelling."); return; }
  map.setView([parseFloat(data[0].lat), parseFloat(data[0].lon)], 14);
}

const loadVillageBtn = document.getElementById("locateVillageBtn");
if (loadVillageBtn) {
  loadVillageBtn.addEventListener("click", async () => {
    const village = document.getElementById("villageName")?.value?.trim();
    const survey = document.getElementById("surveyNumber")?.value?.trim();
    if (!village) { alert("Please enter village name"); return; }
    if (!survey) { alert("Please enter survey number"); return; }

    const coordsEl = document.getElementById("coords");
    const btn = document.getElementById("continueBtn");
    if (coordsEl) coordsEl.innerText = "Locating village…";
    if (btn) btn.classList.add("disabled");

    localStorage.setItem("village_name", village);
    localStorage.setItem("survey_number", survey);

    try {
      await zoomToVillage(village);
      const mapEl = document.getElementById("map");
      mapEl?.classList.remove("map-disabled");
      try { map.addControl(drawControl); } catch (_) { }
      if (coordsEl) coordsEl.innerText = `Village located. Draw your field boundary (Survey ${survey}).`;
      if (btn) btn.classList.remove("disabled");
    } catch (err) {
      console.error(err);
      alert("Could not locate village.");
    }
  });
}

/* ─── CENTROID helper ───────────────────────────────── */
function computeCentroid(coords) {
  const n = coords.length;
  let lat = 0, lon = 0;
  coords.forEach(([lng, la]) => { lat += la; lon += lng; });
  return { lat: lat / n, lon: lon / n };
}

/* ─── LOADING OVERLAY helper ────────────────────────── */
function showLoadingOverlay() {
  const overlay = document.getElementById("loadingOverlay");
  const loMsg = document.getElementById("loMsg");
  const loWarm = document.getElementById("loWarm");
  if (!overlay) return { stop: () => { } };

  const msgs = [
    "Contacting satellites…",
    "Fetching vegetation index (NDVI)…",
    "Calculating soil moisture…",
    "Scoring crop health…",
    "Building your report…"
  ];
  let idx = 0;
  overlay.classList.add("visible");
  const msgTimer = setInterval(() => {
    idx = (idx + 1) % msgs.length;
    if (loMsg) loMsg.textContent = msgs[idx];
  }, 4000);
  const warmTimer = setTimeout(() => {
    if (loWarm) loWarm.classList.add("show");
  }, 20000);

  return {
    stop() {
      clearInterval(msgTimer);
      clearTimeout(warmTimer);
      overlay.classList.remove("visible");
      if (loWarm) loWarm.classList.remove("show");
    }
  };
}

/* ─── ANALYZE BUTTON ────────────────────────────────── */
const continueBtn = document.getElementById("continueBtn");
if (continueBtn) {
  continueBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const pointRaw = localStorage.getItem("field_point");
    const polygonRaw = localStorage.getItem("field_polygon");
    const crop = localStorage.getItem("selected_crop") || "general";
    const village = localStorage.getItem("village_name");
    const survey = localStorage.getItem("survey_number");

    // Build 'point' — backend only accepts 'point' key
    let point;
    if (polygonRaw) {
      point = computeCentroid(JSON.parse(polygonRaw));
    } else if (pointRaw) {
      point = JSON.parse(pointRaw);
    } else {
      alert("Please select a field first");
      return;
    }

    const payload = { crop, point };
    if (selectedMode === "satbara" && village && survey) {
      payload.village_name = village;
      payload.survey_number = survey;
    }

    const loader = showLoadingOverlay();
    continueBtn.classList.add("disabled");
    continueBtn.textContent = "Analyzing…";

    try {
      console.log("[App] Payload →", JSON.stringify(payload));

      const res = await fetch("https://terrascope-frontend.onrender.com/analyze-field", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error("Backend returned " + res.status);
      const result = await res.json();

      loader.stop();
      localStorage.setItem("analysis_result", JSON.stringify(result));
      window.location.href = "dashboard.html";

    } catch (err) {
      loader.stop();
      console.error(err);
      alert("Analysis failed. Please try again.");
      continueBtn.classList.remove("disabled");
      continueBtn.textContent = "Analyze Field →";
    }
  });
}
