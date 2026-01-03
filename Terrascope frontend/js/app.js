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

  // Mode selector (ADD THIS DROPDOWN IN HTML)
  const modeSelect = document.getElementById("selectionMode");

  let pointMarker = null;

  /* ---------- POLYGON SETUP ---------- */
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
    edit: {
      featureGroup: drawnItems
    }
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

    localStorage.setItem(
      "field_point",
      JSON.stringify({
        lat: e.latlng.lat,
        lon: e.latlng.lng
      })
    );

    enableContinue(
      `${e.latlng.lat.toFixed(5)}, ${e.latlng.lng.toFixed(5)}`
    );
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

  /* ---------- USE MY CURRENT LOCATION (POINT ONLY) ---------- */
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
        function (position) {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          if (pointMarker) map.removeLayer(pointMarker);
          pointMarker = L.marker([lat, lon]).addTo(map);
          map.setView([lat, lon], 15);

          localStorage.setItem(
            "field_point",
            JSON.stringify({ lat, lon })
          );

          enableContinue(`${lat.toFixed(5)}, ${lon.toFixed(5)}`);
        },
        function () {
          alert("Unable to retrieve location");
        }
      );
    });
  }
}


/* =========================================================
   TRANSLATIONS (EN + HI + MR)
========================================================= */
const translations = {
  en: {
    tagline: "Field Intelligence Platform",
    about_link: "About",

    hero_title_1: "Understand Your Field",
    hero_title_2: "Before Problems Become Visible",
    hero_sub: "Satellite-driven field intelligence for crop and soil awareness.",
    cta_btn: "Select My Field",

    cred_1: "Satellite-based analysis",
    cred_2: "Field-level focus",
    cred_3: "Advisory insights",

    select_tagline: "Select Field Location",
    step_1: "Step 1 of 2 — Select your field",
    select_title: "Select Your Field Location",
    select_sub: "Click on the map to mark your farm location.",
    no_location: "No location selected",
    analyze_btn: "Analyze Field",
    use_location: "Use My Current Location",

    dashboard_tagline: "Field Health Overview",
    summary_title: "Field Health Summary",

    crop_condition: "Crop Condition",
    crop_status: "Moderate Stress",
    crop_desc:
      "Parts of your crop show early signs of stress due to water or nutrient imbalance.",
    crop_suggestion:
      "Suggested action: Inspect stressed areas and adjust irrigation.",

    moisture_status: "Moisture Status",
    moisture_level: "Low",
    moisture_desc:
      "Soil moisture is lower than optimal for healthy crop growth.",
    moisture_suggestion:
      "Suggested action: Consider irrigation if rainfall is insufficient.",

    trend_title: "Overall Trend",
    trend_status: "Stable",
    trend_desc:
      "Field condition has remained consistent over recent observations.",
    trend_suggestion:
      "Suggested action: Continue current practices and monitor regularly."
  },

  hi: {
    tagline: "खेत बुद्धिमत्ता मंच",
    about_link: "परिचय",

    hero_title_1: "अपने खेत को समझें",
    hero_title_2: "समस्याएँ दिखने से पहले",
    hero_sub: "फसल और मिट्टी की स्थिति के लिए सैटेलाइट आधारित जानकारी।",
    cta_btn: "अपना खेत चुनें",

    cred_1: "सैटेलाइट आधारित विश्लेषण",
    cred_2: "खेत स्तर की जानकारी",
    cred_3: "सलाहकारी अंतर्दृष्टि",

    select_tagline: "खेत का चयन",
    step_1: "चरण 1 / 2 — अपना खेत चुनें",
    select_title: "अपने खेत का स्थान चुनें",
    select_sub: "मानचित्र पर अपने खेत का स्थान चुनें।",
    no_location: "कोई स्थान चयनित नहीं",
    analyze_btn: "खेत का विश्लेषण करें",
    use_location: "मेरा वर्तमान स्थान उपयोग करें",

    dashboard_tagline: "खेत की स्थिति",
    summary_title: "खेत स्वास्थ्य सारांश",

    crop_condition: "फसल की स्थिति",
    crop_status: "मध्यम तनाव",
    crop_desc:
      "फसल के कुछ भागों में शुरुआती तनाव के संकेत दिखाई दे रहे हैं।",
    crop_suggestion:
      "सुझाव: प्रभावित क्षेत्रों की जाँच करें और सिंचाई समायोजित करें।",

    moisture_status: "नमी की स्थिति",
    moisture_level: "कम",
    moisture_desc:
      "मिट्टी में नमी स्वस्थ फसल वृद्धि के लिए कम है।",
    moisture_suggestion:
      "सुझाव: वर्षा कम होने पर सिंचाई करें।",

    trend_title: "कुल प्रवृत्ति",
    trend_status: "स्थिर",
    trend_desc:
      "हाल के समय में खेत की स्थिति स्थिर बनी हुई है।",
    trend_suggestion:
      "सुझाव: वर्तमान अभ्यास जारी रखें और नियमित निगरानी करें।"
  },

  mr: {
    tagline: "शेत बुद्धिमत्ता व्यासपीठ",
    about_link: "माहिती",

    hero_title_1: "आपले शेत समजून घ्या",
    hero_title_2: "समस्या दिसण्याआधी",
    hero_sub: "पीक व मातीसाठी उपग्रह आधारित माहिती.",
    cta_btn: "माझे शेत निवडा",

    cred_1: "उपग्रह आधारित विश्लेषण",
    cred_2: "शेत पातळीवरील निरीक्षण",
    cred_3: "सल्लागार अंतर्दृष्टी",

    select_tagline: "शेत निवड",
    step_1: "टप्पा 1 / 2 — शेत निवडा",
    select_title: "आपल्या शेताचे स्थान निवडा",
    select_sub: "नकाशावर आपल्या शेताचे स्थान निवडा.",
    no_location: "कोणतेही स्थान निवडलेले नाही",
    analyze_btn: "शेताचे विश्लेषण करा",
    use_location: "माझे वर्तमान स्थान वापरा",

    dashboard_tagline: "शेत स्थिती",
    summary_title: "शेत आरोग्य सारांश",

    crop_condition: "पीक स्थिती",
    crop_status: "मध्यम ताण",
    crop_desc:
      "पीकाच्या काही भागांमध्ये ताणाची सुरुवातीची चिन्हे दिसत आहेत.",
    crop_suggestion:
      "सूचना: प्रभावित भाग तपासा आणि सिंचन समायोजित करा.",

    moisture_status: "ओलावा स्थिती",
    moisture_level: "कमी",
    moisture_desc:
      "मातीतील ओलावा पीक वाढीसाठी अपुरा आहे.",
    moisture_suggestion:
      "सूचना: पावसाचा अभाव असल्यास सिंचन करा.",

    trend_title: "एकूण प्रवृत्ती",
    trend_status: "स्थिर",
    trend_desc:
      "अलीकडील निरीक्षणांमध्ये शेताची स्थिती स्थिर आहे.",
    trend_suggestion:
      "सूचना: सध्याच्या पद्धती सुरू ठेवा व नियमित निरीक्षण करा."
  }
};

/* =========================================================
   LANGUAGE SWITCHING
========================================================= */
function setLanguage(lang) {
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

/* =========================================================
   LOAD SAVED LANGUAGE
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  let savedLang = localStorage.getItem("lang");

  if (!savedLang) {
    savedLang = "en";
    localStorage.setItem("lang", "en");
  }

  setLanguage(savedLang);

  const selector = document.querySelector("select");
  if (selector) selector.value = savedLang;
});

const nirBtn = document.querySelector(".nir-btn");

if (nirBtn) {
  nirBtn.addEventListener("click", () => {
    alert(
      "NIR camera integration is a planned feature for localized crop and soil analysis using low-cost sensors."
    );
  });
}
/* =========================================================
   THE FKING BACKEND STUFF
========================================================= */
async function analyzeField(lat, lon) {
  const response = await fetch("http://127.0.0.1:8000/analyze-field", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      lat: lat,
      lon: lon
    })
  });

  if (!response.ok) {
    throw new Error("Backend error");
  }

  return await response.json();
}
/* =========================================================
    CALLING BACKEND NOW
========================================================= */
const continueBtn = document.getElementById("continueBtn");

if (continueBtn) {
  continueBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const pointRaw = localStorage.getItem("field_point");
    const polygonRaw = localStorage.getItem("field_polygon");

    let payload = null;

    if (polygonRaw) {
      payload = { polygon: JSON.parse(polygonRaw) };
    } else if (pointRaw) {
      payload = { point: JSON.parse(pointRaw) };
    } else {
      alert("Please select a field first");
      return;
    }

    try {
      const result = await analyzeField(payload);
      localStorage.setItem("analysis_result", JSON.stringify(result));
      window.location.href = "dashboard.html";
    } catch (err) {
      console.error(err);
      alert("Failed to analyze field");
    }
  });
}
/* =========================================================
   DASHBOARD: LOAD ANALYSIS RESULT
========================================================= */
document.addEventListener("DOMContentLoaded", () => {

  if (!window.location.pathname.includes("dashboard")) return;

  const raw = localStorage.getItem("analysis_result");
  if (!raw) return;

  const result = JSON.parse(raw);

  const cropBadge = document.querySelector('[data-key="crop_status"]');
  if (cropBadge && result.crop_status) {
    cropBadge.textContent = result.crop_status;
  }

  const moistureBadge = document.querySelector('[data-key="moisture_level"]');
  if (moistureBadge && result.moisture_status) {
    moistureBadge.textContent = result.moisture_status;
  }

  const summary = document.querySelector('[data-key="crop_desc"]');
  if (summary && result.summary) {
    summary.textContent = result.summary;
  }
});
