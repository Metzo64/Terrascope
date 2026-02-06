/* =========================================================
   SUPABASE AUTH (SAFE + SINGLE INIT)
========================================================= */

let _supabase = null;

if (typeof window.supabase !== "undefined") {
  _supabase = window.supabase.createClient(
    'https://jmdmrwmnyfnghhqggzlw.supabase.co',
    'sb_publishable_...'
  );

  _supabase.auth.onAuthStateChange(async (event, session) => {

    if (event === 'SIGNED_IN' && session?.user) {
      const user = session.user;

      const { data: existingProfile } = await _supabase
        .from('profiles')
        .select('id')
        .eq('id', user.id)
        .single();

      if (!existingProfile && user.user_metadata?.full_name) {
        const { error } = await _supabase
          .from('profiles')
          .upsert({
            id: user.id,
            full_name: user.user_metadata.full_name,
            district: user.user_metadata.district,
            phone_number: user.user_metadata.phone_number
          });

        if (error) {
          console.error("Error saving profile:", error.message);
        } else {
          console.log("New farmer profile synced!");
        }
      }
    }

    if (event === 'SIGNED_OUT') {
      window.location.href = 'signup.html';
    }
  });

  // LOGOUT BUTTON (SAFE)
  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
    _supabase.auth.getSession().then(({ data }) => {
      if (data?.session) logoutBtn.classList.remove("hidden");
    });

    logoutBtn.addEventListener("click", async () => {
      await _supabase.auth.signOut();
      window.location.href = "signup.html";
    });
  }
}


/* =========================================================
   MAP LOGIC (SELECT FIELD PAGE)
========================================================= */
if (document.getElementById("map")) {

  const mapBox = document.getElementById("map");
  const map = L.map("map").setView([20.5937, 78.9629], 5);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  const coordsEl = document.getElementById("coords");
  const btn = document.getElementById("continueBtn");
  const modeSelect = document.getElementById("selectionMode");
  const recordBox = document.getElementById("recordBox");
  const villageInput = document.getElementById("villageInput");
  const cropSelect = document.getElementById("cropSelect");

  /* ---------- CROP SELECTION ---------- */
  if (cropSelect) {
    localStorage.setItem("selected_crop", cropSelect.value);

    cropSelect.addEventListener("change", () => {
      localStorage.setItem("selected_crop", cropSelect.value);
    });
  }

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

  /* ---------- VILLAGE → MAP ZOOM ---------- */
  async function zoomToVillage(village) {
    const query = encodeURIComponent(`${village}, Maharashtra, India`);

    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`
    );

    const data = await res.json();
    if (!data.length) {
      alert("Could not locate village on map");
      return;
    }

    const lat = parseFloat(data[0].lat);
    const lon = parseFloat(data[0].lon);

    map.setView([lat, lon], 15);
  }

  /* ---------- SATBARA (7/12) UPLOAD ---------- */
  const recordFileInput = recordBox?.querySelector('input[type="file"]');

  async function uploadSatbara(file) {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("http://127.0.0.1:8000/satbara/ocr", {
      method: "POST",
      body: formData
    });

    if (!res.ok) throw new Error("Satbara OCR failed");
    return await res.json();
  }

  if (recordFileInput) {
    recordFileInput.addEventListener("change", async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const village = villageInput?.value?.trim();
      if (!village) {
        alert("Please enter village name");
        return;
      }

      coordsEl.innerText = "Reading 7/12 document...";
      btn.classList.add("disabled");

      try {
        const result = await uploadSatbara(file);

        localStorage.setItem(
          "satbara_data",
          JSON.stringify(result.extracted)
        );

        await zoomToVillage(village);

        modeSelect.value = "polygon";
        modeSelect.dispatchEvent(new Event("change"));

        coordsEl.innerText =
          `7/12 loaded — Survey ${result.extracted.survey_number}. Draw boundary`;

      } catch (err) {
        console.error(err);
        alert("Failed to read 7/12 document");
        resetSelection();
      }
    });
  }

  /* ---------- POINT MODE ---------- */
  map.on("click", (e) => {
    if (modeSelect.value !== "point") return;

    resetSelection();

    pointMarker = L.marker(e.latlng).addTo(map);

    localStorage.setItem("field_point", JSON.stringify({
      lat: e.latlng.lat,
      lon: e.latlng.lng
    }));

    enableContinue(`${e.latlng.lat.toFixed(5)}, ${e.latlng.lng.toFixed(5)}`);
  });

  /* ---------- POLYGON MODE ---------- */
  map.on(L.Draw.Event.CREATED, (event) => {
    if (modeSelect.value !== "polygon") return;

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
  modeSelect.addEventListener("change", () => {
    resetSelection();

    if (modeSelect.value === "record") {
      recordBox.style.display = "block";
      mapBox.classList.add("map-disabled");
      map.removeControl(drawControl);
      return;
    }

    recordBox.style.display = "none";
    mapBox.classList.remove("map-disabled");

    if (modeSelect.value === "polygon") {
      map.addControl(drawControl);
    } else {
      map.removeControl(drawControl);
    }
  });

  /* ---------- USE MY LOCATION ---------- */
  const locateBtn = document.getElementById("locateBtn");

  if (locateBtn) {
    locateBtn.addEventListener("click", () => {
      if (!navigator.geolocation) {
        alert("Geolocation not supported");
        return;
      }

      modeSelect.value = "point";
      resetSelection();

      navigator.geolocation.getCurrentPosition(
        pos => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;

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
   ANALYZE FIELD (CALL BACKEND)
========================================================= */

async function analyzeField(payload) {
  const res = await fetch("http://127.0.0.1:8000/analyze-field", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    throw new Error("Backend analysis failed");
  }

  return await res.json();
}

/* =========================================================
   CONTINUE / ANALYZE BUTTON
========================================================= */

const continueBtn = document.getElementById("continueBtn");

if (continueBtn) {
  continueBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const point = localStorage.getItem("field_point");
    const polygon = localStorage.getItem("field_polygon");
    const crop = localStorage.getItem("selected_crop") || "general";

    let payload = { crop };

    if (polygon) {
      payload.polygon = JSON.parse(polygon);
    } else if (point) {
      payload.point = JSON.parse(point);
    } else {
      alert("Please select a field first");
      return;
    }

    try {
      continueBtn.classList.add("disabled");
      continueBtn.textContent = "Analyzing…";

      const result = await analyzeField(payload);

      console.log("ANALYSIS RESULT:", result);

      localStorage.setItem(
        "analysis_result",
        JSON.stringify(result)
      );

      window.location.href = "dashboard.html";

    } catch (err) {
      console.error(err);
      alert("Failed to analyze field. Please try again.");
      continueBtn.classList.remove("disabled");
      continueBtn.textContent = "Analyze Field";
    }
  });
}


