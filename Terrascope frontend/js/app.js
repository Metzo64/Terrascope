/* =========================================================
   MAP LOGIC (SELECT FIELD PAGE)
========================================================= */
if (document.getElementById("map")) {

  const map = L.map("map").setView([20.5937, 78.9629], 5);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  const coordsEl = document.getElementById("coords");
  const btn = document.getElementById("continueBtn");
  const modeSelect = document.getElementById("selectionMode");

  let pointMarker = null;

  const drawnItems = new L.FeatureGroup();
  map.addLayer(drawnItems);

  const drawControl = new L.Control.Draw({
    draw: {
      polygon: true,
      rectangle: false,
      circle: false,
      marker: false,
      polyline: false,
      circlemarker: false
    },
    edit: { featureGroup: drawnItems }
  });

  function resetSelection() {
    drawnItems.clearLayers();
    if (pointMarker) {
      map.removeLayer(pointMarker);
      pointMarker = null;
    }
    localStorage.removeItem("field_point");
    localStorage.removeItem("field_polygon");
    coordsEl.innerText = "No location selected";
    btn.classList.add("disabled");
  }

  function enableContinue(text) {
    coordsEl.innerText = text;
    btn.classList.remove("disabled");
  }

  /* ---------- POINT MODE ---------- */
  map.on("click", function (e) {
    if (!modeSelect || modeSelect.value !== "point") return;

    drawnItems.clearLayers();
    localStorage.removeItem("field_polygon");

    if (pointMarker) map.removeLayer(pointMarker);
    pointMarker = L.marker(e.latlng).addTo(map);

    localStorage.setItem("field_point", JSON.stringify({
      lat: e.latlng.lat,
      lon: e.latlng.lng
    }));

    enableContinue(`${e.latlng.lat.toFixed(5)}, ${e.latlng.lng.toFixed(5)}`);
  });

  /* ---------- POLYGON MODE ---------- */
  map.on(L.Draw.Event.CREATED, function (event) {
    if (!modeSelect || modeSelect.value !== "polygon") return;

    resetSelection();
    drawnItems.addLayer(event.layer);

    const geojson = event.layer.toGeoJSON();
    localStorage.setItem(
      "field_polygon",
      JSON.stringify(geojson.geometry.coordinates)
    );

    enableContinue("Farm boundary selected");
  });

  /* ---------- MODE SWITCH ---------- */
  if (modeSelect) {
    modeSelect.addEventListener("change", () => {
      resetSelection();
      if (modeSelect.value === "polygon") {
        map.addControl(drawControl);
      } else {
        map.removeControl(drawControl);
      }
    });
  }

  /* ---------- USE MY LOCATION ---------- */
  const locateBtn = document.getElementById("locateBtn");

  if (locateBtn) {
    locateBtn.addEventListener("click", function () {
      if (!navigator.geolocation) {
        alert("Geolocation not supported");
        return;
      }

      if (modeSelect) modeSelect.value = "point";
      drawnItems.clearLayers();
      localStorage.removeItem("field_polygon");

      navigator.geolocation.getCurrentPosition(
        pos => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;

          if (pointMarker) map.removeLayer(pointMarker);
          pointMarker = L.marker([lat, lon]).addTo(map);
          map.setView([lat, lon], 15);

          localStorage.setItem("field_point", JSON.stringify({ lat, lon }));
          enableContinue(`${lat.toFixed(5)}, ${lon.toFixed(5)}`);
        },
        () => alert("Unable to retrieve location")
      );
    });
  }
}

/* =========================================================
   BACKEND CALL
========================================================= */
async function analyzeField(payload) {
  const response = await fetch("http://127.0.0.1:8000/analyze-field", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!response.ok) throw new Error("Backend error");
  return await response.json();
}

/* =========================================================
   CONTINUE BUTTON
========================================================= */
const continueBtn = document.getElementById("continueBtn");

if (continueBtn) {
  continueBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const point = localStorage.getItem("field_point");
    const polygon = localStorage.getItem("field_polygon");

    let payload = null;
    if (polygon) payload = { polygon: JSON.parse(polygon) };
    else if (point) payload = { point: JSON.parse(point) };
    else {
      alert("Please select a field first");
      return;
    }

    try {
      const result = await analyzeField(payload);
      localStorage.setItem("analysis_result", JSON.stringify(result));
      window.location.href = "dashboard.html";
    } catch {
      alert("Failed to analyze field");
    }
  });
}
