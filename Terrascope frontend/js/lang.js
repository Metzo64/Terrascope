/* =========================================================
   TRANSLATIONS (EN / HI / MR)
========================================================= */
const translations = {
  en: {
    /* ---------- LANDING PAGE ---------- */
    tagline: "Field Intelligence Platform",
    about_link: "About",

    hero_title_1: "Understand Your Field",
    hero_title_2: "Before Problems Become Visible",
    hero_sub: "Satellite-driven field intelligence for crop and soil awareness.",
    cta_btn: "Select My Field",

    nir_btn: "Use NIR Camera",
    nir_hint: "Ground-based analysis",

    cred_1: "Satellite-based analysis",
    cred_2: "Field-level focus",
    cred_3: "Advisory insights",

    /* ---------- SELECT PAGE ---------- */
    select_tagline: "Select Field Location",
    step_1: "Step 1 of 2 — Select your field",
    select_title: "Select Your Field Location",
    select_sub: "Click on the map to mark your farm location.",
    no_location: "No location selected",
    analyze_btn: "Analyze Field",
    use_location: "Use My Current Location",

    selection_method: "Field Selection Method",
    mode_point: "Point (Quick)",
    mode_polygon: "Boundary (Accurate)",

    /* ---------- DASHBOARD / SUMMARY STATIC ---------- */
    summary_title: "Field Health Summary",
    overall_status: "Overall Field Status",
    crop_condition: "Crop Condition",
    vegetation_health: "Vegetation Health",
    moisture_status: "Soil Moisture Status",
    water_soil: "Water & Soil Condition",
    risk_title: "Field Risks & Observations",
    risk_level: "Risk Level",

    /* ---------- STATUS WORDS ---------- */
    status_low: "Low",
    status_moderate: "Moderate",
    status_high: "High",
    status_stable: "Stable",
    status_healthy: "Healthy",
    status_attention: "Needs Attention",
    status_watch: "Watch Closely",



    /* ---------- SUMMARY TEXT ---------- */
    overall_healthy_desc: "Field conditions look healthy overall.",
    overall_attention_desc: "Some parts of the field may need attention.",

    crop_good_desc: "Crop growth appears healthy across most of the field.",
    crop_moderate_desc: "Some crop areas show uneven growth.",
    crop_low_desc: "Crop stress detected in multiple areas.",
    crop_low_hint: "Inspect stressed areas and take corrective action.",
    crop_ok_hint: "Continue regular monitoring.",

    water_low_desc: "Soil moisture is currently low.",
    water_ok_desc: "Soil moisture levels are adequate.",
    water_low_hint: "Irrigation may be required if dry conditions persist.",
    water_ok_hint: "No immediate irrigation needed.",

    risk_high: "High risk of yield loss due to crop and moisture stress.",
    risk_medium: "Early stress indicators detected.",
    risk_low: "No major risks detected at this time.",

    /* ---------- PROFILE MODAL ---------- */
    profile_phone: "Phone",
    profile_district: "District",
    profile_member: "Member Since",
    close_btn: "Close",
    logout_btn: "Logout",
    back_home: "← Home",

    /* ---------- SCORE BAR LABELS ---------- */
    score_low: "Low",
    score_moderate: "Moderate",
    score_high: "High",

    /* ---------- EXPLAIN CARD HEADERS ---------- */
    looks_good: "What looks good",
    possible_risks: "Possible risks",
    what_to_do: "What you should do",
    moisture_positives: "Moisture positives",
    moisture_risks: "Moisture risks",
    water_advice: "Water advice",
    ndvi_caption: "Satellite Vegetation Map (NDVI)",

    /* ---------- SELECT PAGE ---------- */
    step_1: "STEP 1 OF 2 — SELECT YOUR FIELD",
    select_title: "Select Your Field Location",
    select_sub: "Choose how you want to identify your farmland, then select your crop.",
    selection_method: "Field Selection Method",
    mode_point: "Point (Quick)",
    mode_polygon: "Boundary (Accurate)",
    mode_satbara: "Satbara / 7-12",
    recommended_badge: "Recommended",
    crop_label: "Crop Grown on This Field",
    crop_general: "General / Mixed",
    crop_rice: "Rice", crop_wheat: "Wheat",
    crop_cotton: "Cotton", crop_sugarcane: "Sugarcane", crop_soybean: "Soybean",
    satbara_title: "Satbara / 7-12 Land Record",
    satbara_info: "Enter your village name and survey number. We'll locate your village — then draw your field boundary.",
    locate_village_btn: "Locate Village on Map",
    use_location: "Use My Location",
    no_location: "No location selected",
    analyze_btn: "Analyze Field →",

    /* ---------- HOMEPAGE ---------- */
    hero_badge: "SATELLITE-POWERED · FARMER-FIRST",
    hero_h1a: "Know Your", hero_h1b: "Field's Health",
    hero_h2: "Before Problems Become Visible",
    hero_desc: "Satellite-driven crop and soil intelligence for every farmer. Select your field, get analysis in seconds — in your language.",
    cta_primary: "Analyze My Field", cta_nir: "NIR Camera Analysis",
    stat_resolution: "Resolution per pixel", stat_ndvi: "Crop health index",
    stat_ndmi: "Soil moisture index", stat_lang: "Languages supported",
    feat1_title: "Real Satellite Data", feat1_desc: "Sentinel-2 imagery analyzed at field level — no apps, no devices required.",
    feat2_title: "Crop Stress Detection", feat2_desc: "NDVI-based scoring with verdicts: thriving, stressed, or critical.",
    feat3_title: "Soil Moisture Insight", feat3_desc: "Know when to irrigate before your crop shows signs of water stress.",
    feat4_title: "Satbara / 7-12 Mode", feat4_desc: "Enter your village and survey number to instantly locate your plot.",
    feat5_title: "3 Languages", feat5_desc: "All results in English, Hindi, or Marathi — choose what suits you.",
    feat6_title: "Results in Seconds", feat6_desc: "Point, click, analyze — full satellite field report in under a minute.",

    /* ---------- NDVI LEGEND ---------- */
    no_vegetation: "No vegetation", dense_crops: "Dense crops"
  },

  hi: {
    tagline: "खेत बुद्धिमत्ता मंच",
    about_link: "परिचय",

    hero_title_1: "अपने खेत को समझें",
    hero_title_2: "समस्याएँ दिखने से पहले",
    hero_sub: "फसल और मिट्टी के लिए उपग्रह आधारित जानकारी।",
    cta_btn: "अपना खेत चुनें",

    nir_btn: "NIR कैमरा उपयोग करें",
    nir_hint: "स्थानीय आधारित विश्लेषण",

    cred_1: "उपग्रह आधारित विश्लेषण",
    cred_2: "खेत स्तर की जानकारी",
    cred_3: "सलाहकारी अंतर्दृष्टि",

    select_tagline: "खेत का चयन",
    step_1: "चरण 1 / 2 — अपना खेत चुनें",
    select_title: "अपने खेत का स्थान चुनें",
    select_sub: "मानचित्र पर अपने खेत का स्थान चुनें।",
    no_location: "कोई स्थान चयनित नहीं",
    analyze_btn: "खेत का विश्लेषण करें",
    use_location: "मेरा वर्तमान स्थान उपयोग करें",

    selection_method: "खेत चयन विधि",
    mode_point: "बिंदु (तेज़)",
    mode_polygon: "सीमा (सटीक)",

    summary_title: "खेत स्वास्थ्य सारांश",
    overall_status: "कुल खेत स्थिति",
    crop_condition: "फसल की स्थिति",
    vegetation_health: "वनस्पति स्वास्थ्य",
    moisture_status: "मिट्टी की नमी स्थिति",
    water_soil: "पानी और मिट्टी की स्थिति",
    risk_title: "खेत जोखिम और निरीक्षण",
    risk_level: "जोखिम स्तर",

    status_low: "कम",
    status_moderate: "मध्यम",
    status_high: "अच्छा",
    status_stable: "स्थिर",
    status_healthy: "स्वस्थ",
    status_attention: "ध्यान आवश्यक",
    status_watch: "नज़र रखें",

    overall_healthy_desc: "खेत की स्थिति समग्र रूप से स्वस्थ है।",
    overall_attention_desc: "खेत के कुछ हिस्सों पर ध्यान देने की आवश्यकता है।",

    crop_good_desc: "अधिकांश क्षेत्र में फसल स्वस्थ है।",
    crop_moderate_desc: "कुछ क्षेत्रों में फसल असमान है।",
    crop_low_desc: "कई क्षेत्रों में फसल पर तनाव है।",
    crop_low_hint: "प्रभावित क्षेत्रों की जाँच करें।",
    crop_ok_hint: "नियमित निगरानी जारी रखें।",

    water_low_desc: "मिट्टी की नमी कम है।",
    water_ok_desc: "मिट्टी की नमी पर्याप्त है।",
    water_low_hint: "सिंचाई की आवश्यकता हो सकती है।",
    water_ok_hint: "तत्काल सिंचाई की आवश्यकता नहीं है।",

    risk_high: "फसल और नमी तनाव के कारण उच्च जोखिम।",
    risk_medium: "प्रारंभिक तनाव संकेत पाए गए।",
    risk_low: "इस समय कोई बड़ा जोखिम नहीं।",

    profile_phone: "फ़ोन",
    profile_district: "जिला",
    profile_member: "सदस्य बने",
    close_btn: "बंद करें",
    logout_btn: "लॉग आउट",
    back_home: "← होम",

    score_low: "कम",
    score_moderate: "मध्यम",
    score_high: "अच्छा",

    looks_good: "क्या अच्छा दिखता है",
    possible_risks: "संभावित जोखिम",
    what_to_do: "आपको क्या करना चाहिए",
    moisture_positives: "नमी की सकारात्मकताएं",
    moisture_risks: "नमी के जोखिम",
    water_advice: "सिंचाई सलाह",
    ndvi_caption: "उपग्रह वनस्पति मानचित्र (NDVI)",

    step_1: "चरण 1 / 2 — अपना खेत चुनें",
    select_title: "अपने खेत की स्थिति चुनें",
    select_sub: "अपनी भूमि रेखांकन का तरीका चुनें, फिर उगाई चुनें।",
    selection_method: "खेत चयन विधि",
    mode_point: "बिंदु (त्वरित)", mode_polygon: "सीमा (सटीक)",
    mode_satbara: "सात बारा / 7-12", recommended_badge: "अनुशंसित",
    crop_label: "इस खेत में उगाई गयी फसल",
    crop_general: "सामान्य", crop_rice: "धान", crop_wheat: "गेहूँ",
    crop_cotton: "कपास", crop_sugarcane: "गन्ना", crop_soybean: "सोयाबीन",
    satbara_title: "सात-बारा / 7-12 भूमि अभिलेख",
    satbara_info: "गांव का नाम और सर्वेक्षण नंबर दर्ज करें। हम नक्शे पर गांव ढूंढेंगे।",
    locate_village_btn: "नक्शे पर गांव ढूंढें",
    use_location: "मेरी स्थिति उपयोग करें",
    no_location: "कोई स्थन नहीं चुना",
    analyze_btn: "खेत विश्लेषण करें →",

    hero_badge: "उपग्रह आधारित · किसान के लिए",
    hero_h1a: "जानिए अपने", hero_h1b: "खेत की सेहत",
    hero_h2: "समस्याएं दिखने से पहले",
    hero_desc: "हर किसान के लिए उपग्रह आधारित फसल और मिट्टी जानकारी।",
    cta_primary: "अपना खेत विश्लेषण करें", cta_nir: "एनआईआर कैमरा",
    stat_resolution: "प्राति / पिक्सल", stat_ndvi: "फसल स्वास्थ्य",
    stat_ndmi: "मिट्टी नमी", stat_lang: "भाषाएं",
    feat1_title: "वास्तविक उपग्रह डेटा", feat1_desc: "फ़ील्ड स्तर पर Sentinel-2 चित्रण।",
    feat2_title: "फसल तनाव पहचान", feat3_title: "मिट्टी नमी जानकारी",
    feat4_title: "सात-बारा विधा", feat5_title: "3 भाषाएं", feat6_title: "सेकंडों में परिणाम",
    no_vegetation: "कोई वनस्पति नहीं", dense_crops: "घनी फसल"
  },

  mr: {
    tagline: "शेत बुद्धिमत्ता व्यासपीठ",
    about_link: "माहिती",

    hero_title_1: "आपले शेत समजून घ्या",
    hero_title_2: "समस्या दिसण्याआधी",
    hero_sub: "पीक व मातीसाठी उपग्रह आधारित माहिती.",
    cta_btn: "माझे शेत निवडा",

    nir_btn: "NIR कॅमेरा वापरा",
    nir_hint: "स्थानिक आधारित विश्लेषण",

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

    selection_method: "शेत निवड पद्धत",
    mode_point: "बिंदू (जलद)",
    mode_polygon: "सीमा (अचूक)",

    summary_title: "शेत आरोग्य सारांश",
    overall_status: "एकूण शेत स्थिती",
    crop_condition: "पीक स्थिती",
    vegetation_health: "वनस्पती आरोग्य",
    moisture_status: "मातीतील ओलावा स्थिती",
    water_soil: "पाणी व माती स्थिती",
    risk_title: "शेत जोखीम व निरीक्षणे",
    risk_level: "जोखीम स्तर",

    status_low: "कमी",
    status_moderate: "मध्यम",
    status_high: "चांगले",
    status_stable: "स्थिर",
    status_healthy: "निरोगी",
    status_attention: "लक्ष आवश्यक",
    status_watch: "लक्ष ठेवा",

    overall_healthy_desc: "शेताची स्थिती एकूण चांगली आहे.",
    overall_attention_desc: "शेताच्या काही भागांना लक्ष देणे आवश्यक आहे.",

    crop_good_desc: "बहुतेक भागात पीक निरोगी आहे.",
    crop_moderate_desc: "काही भागात पीक असमान आहे.",
    crop_low_desc: "अनेक भागात पीक तणावात आहे.",
    crop_low_hint: "प्रभावित भाग तपासा.",
    crop_ok_hint: "नियमित निरीक्षण ठेवा.",

    water_low_desc: "मातीतील ओलावा कमी आहे.",
    water_ok_desc: "मातीतील ओलावा पुरेसा आहे.",
    water_low_hint: "सिंचन आवश्यक असू शकते.",
    water_ok_hint: "तत्काळ सिंचनाची गरज नाही.",

    risk_high: "पीक व ओलावा तणावामुळे उच्च जोखीम.",
    risk_medium: "प्रारंभिक तणाव संकेत आढळले.",
    risk_low: "सध्या कोणतीही मोठी जोखीम नाही.",

    profile_phone: "फोन",
    profile_district: "जिल्हा",
    profile_member: "सदस्य झाले",
    close_btn: "बंद करा",
    logout_btn: "लॉग आउट",
    back_home: "← मुख्यपृष्ठ",

    score_low: "कमी",
    score_moderate: "मध्यम",
    score_high: "चांगले",

    looks_good: "काय चांगले दिसते",
    possible_risks: "संभाव्य धोके",
    what_to_do: "आपण काय करावे",
    moisture_positives: "ओलाव्याच्या सकारात्मक बाबी",
    moisture_risks: "ओलाव्याचे धोके",
    water_advice: "सिंचन सल्ला",
    ndvi_caption: "उपग्रह वनस्पती नकाशा (NDVI)",

    step_1: "पायरी 1 / 2 — शेत निवडा",
    select_title: "तुमचे शेताची जागा निवडा",
    select_sub: "शेतजमीन शोधण्याची पد्धत निवडा, मग पिक निवडा।",
    selection_method: "शेत निवड पد्धत",
    mode_point: "बिंदू (जलद)", mode_polygon: "सीमा (अचूक)",
    mode_satbara: "सातबारा / 7-12", recommended_badge: "शिफारस",
    crop_label: "या शेतावर ची पिक",
    crop_general: "साधारण", crop_rice: "भात", crop_wheat: "गहूं",
    crop_cotton: "कापूस", crop_sugarcane: "उस", crop_soybean: "सोयाबीन",
    satbara_title: "सातबारा / 7-12 जमीन नोंद",
    satbara_info: "गावाचे नाव आणि सर्वे नंबर टाका. आम्ही नकाशावर गाव शोधू।",
    locate_village_btn: "नकाशावर गाव शोधा",
    use_location: "माझी जागा वापरा",
    no_location: "कोणतीही जागा निवडलेली नाही",
    analyze_btn: "शेत विश्लेषण करा →",

    hero_badge: "उपग्रह आधारित · शेतकर्यासाठी",
    hero_h1a: "ओळखा", hero_h1b: "तुमच्या शेताची तब्येत",
    hero_h2: "समस्या दिसण्यापूर्वी",
    hero_desc: "प्रत्येक शेतकर्यासाठी उपग्रह आधारित पीक आणि माती माहिती।",
    cta_primary: "माझे शेत विश्लेषण करा", cta_nir: "एनआईआर कॅमेरा",
    stat_resolution: "प्रति / पिक्सेल", stat_ndvi: "पीक आरोग्य",
    stat_ndmi: "मातीतील ओलावा", stat_lang: "भाषा",
    feat1_title: "खरे उपग्रह डेटा", feat2_title: "पीक तणाव शोध",
    feat3_title: "माती ओलावा", feat4_title: "सातबारा पर्याय",
    feat5_title: "3 भाषा", feat6_title: "सेकंदात निकाल",
    no_vegetation: "वनस्पती नाही", dense_crops: "घन पिक"
  }

};
/* =========================================================
   DYNAMIC SUMMARY TEXT (USED BY summary.js)
========================================================= */
const summaryText = {
  en: {
    status: {
      High: "High",
      Moderate: "Moderate",
      Low: "Low",
      Healthy: "Healthy",
      Watch: "Watch Closely",
      Attention: "Needs Attention",
      Stable: "Stable"
    },

    overall: {
      good: "Field conditions look healthy overall.",
      warn: "Some parts of the field may need attention."
    },

    crop: {
      high: "Crop growth appears healthy across most of the field.",
      moderate: "Some crop areas show uneven growth.",
      low: "Crop stress detected in multiple areas.",
      low_hint: "Inspect stressed areas and take corrective action.",
      ok_hint: "Continue regular monitoring."
    },

    water: {
      ok: "Soil moisture levels are adequate.",
      low: "Soil moisture is currently low.",
      irrigate: "Irrigation may be required if dry conditions persist.",
      no_irrigation: "No immediate irrigation needed."
    },

    risk: {
      high: "High risk of yield loss due to crop and moisture stress.",
      mid: "Early stress indicators detected.",
      low: "No major risks detected at this time."
    }
  },

  hi: {
    status: {
      High: "अच्छा",
      Moderate: "मध्यम",
      Low: "कम",
      Healthy: "स्वस्थ",
      Watch: "नज़र रखें",
      Attention: "ध्यान आवश्यक",
      Stable: "स्थिर"
    },

    overall: {
      good: "खेत की स्थिति कुल मिलाकर स्वस्थ है।",
      warn: "खेत के कुछ हिस्सों पर ध्यान देने की आवश्यकता है।"
    },

    crop: {
      high: "अधिकांश क्षेत्र में फसल स्वस्थ है।",
      moderate: "कुछ क्षेत्रों में फसल असमान है।",
      low: "कई क्षेत्रों में फसल पर तनाव है।",
      low_hint: "प्रभावित क्षेत्रों की जाँच करें।",
      ok_hint: "नियमित निगरानी जारी रखें।"
    },

    water: {
      ok: "मिट्टी की नमी पर्याप्त है।",
      low: "मिट्टी की नमी कम है।",
      irrigate: "सिंचाई की आवश्यकता हो सकती है।",
      no_irrigation: "तत्काल सिंचाई की आवश्यकता नहीं है।"
    },

    risk: {
      high: "फसल और नमी तनाव के कारण उच्च जोखिम।",
      mid: "प्रारंभिक तनाव संकेत पाए गए।",
      low: "इस समय कोई बड़ा जोखिम नहीं।"
    }
  },

  mr: {
    status: {
      High: "चांगले",
      Moderate: "मध्यम",
      Low: "कमी",
      Healthy: "निरोगी",
      Watch: "लक्ष ठेवा",
      Attention: "लक्ष आवश्यक",
      Stable: "स्थिर"
    },

    overall: {
      good: "शेताची स्थिती एकूण चांगली आहे.",
      warn: "शेताच्या काही भागांना लक्ष देणे आवश्यक आहे."
    },

    crop: {
      high: "बहुतेक भागात पीक निरोगी आहे.",
      moderate: "काही भागात पीक असमान आहे.",
      low: "अनेक भागात पीक तणावात आहे.",
      low_hint: "प्रभावित भाग तपासा.",
      ok_hint: "नियमित निरीक्षण ठेवा."
    },

    water: {
      ok: "मातीतील ओलावा पुरेसा आहे.",
      low: "मातीतील ओलावा कमी आहे.",
      irrigate: "सिंचन आवश्यक असू शकते.",
      no_irrigation: "सध्या सिंचनाची गरज नाही."
    },

    risk: {
      high: "पीक व ओलावा तणावामुळे उच्च जोखीम.",
      mid: "प्रारंभिक तणाव संकेत आढळले.",
      low: "सध्या मोठी जोखीम नाही."
    }
  }
};

/* =========================================================
   SUMMARY DYNAMIC BULLETS  (EN / HI / MR)
   Used by summary.js instead of hardcoded English strings.
========================================================= */
const summaryBullets = {
  en: {
    crop: {
      high: {
        reasons: ["Plants show dense and uniform growth", "Photosynthesis activity is very high"],
        risks: ["Minor stress may appear if ignored"],
        actions: ["Continue monitoring crop health"]
      },
      mid: {
        reasons: ["Vegetation is present across most of the field", "Crop stress detected early through satellite data"],
        risks: ["Uneven growth may reduce yield", "Stress may worsen under heat or pests"],
        actions: ["Check irrigation and nutrient balance"]
      },
      low: {
        reasons: ["Satellite detected active crop stress zones", "Field is not bare soil — vegetation still present"],
        risks: ["Severe crop stress detected", "High probability of yield loss"],
        actions: ["Immediate agronomic intervention required", "Consult local agriculture expert"]
      }
    },
    water: {
      high: {
        reasons: ["Soil moisture is evenly distributed", "Root zone has sufficient water"],
        risks: ["Moisture may reduce under heat stress"],
        actions: ["Maintain current irrigation schedule"]
      },
      mid: {
        reasons: ["Some moisture still present in soil", "No waterlogging detected"],
        risks: ["Dry patches likely in the field"],
        actions: ["Plan irrigation in the coming days"]
      },
      low: {
        reasons: ["Moisture stress detected early", "No flooding or excess water observed"],
        risks: ["Severe moisture stress detected", "Crop may wilt or dry"],
        actions: ["Immediate irrigation required", "Avoid delay to prevent crop damage"]
      }
    },
    overall: { excellent: "🌟 Your field is in excellent condition. Crop growth and soil moisture are well balanced.", good: "✅ Your field is healthy. Minor improvements can further increase yield.", fair: "🙂 Your field is stable, but some stress signs are beginning to appear.", warning: "⚠️ Parts of the field need attention to prevent future yield loss.", danger: "🚨 Field condition is poor. Immediate corrective action is strongly recommended." },
    crop_verdict: { excellent: "Crop is thriving 🌱", good: "Crop is healthy 👍", fair: "Crop growth is average 🙂", warning: "Crop is under stress ⚠️", danger: "Crop condition is poor 🚨" },
    water_verdict: { excellent: "Soil moisture is ideal 💧", good: "Moisture levels are healthy 👍", fair: "Moisture is slightly uneven 🙂", warning: "Soil is getting dry ⚠️", danger: "Severe moisture stress 🚨" },
    badge: { excellent: "Excellent", good: "Good", fair: "Fair", warning: "Needs Attention", danger: "Critical" },
    risk_text: { excellent: "🟢 No significant risks detected. Field conditions are optimal.", good: "🟡 Minor risks possible if conditions change suddenly.", fair: "🟠 Moderate risks detected. Preventive action is advised.", warning: "🟠 High risk if no action is taken soon.", danger: "🔴 Critical risk detected. Immediate action required." },
    risk_pills: { good: ["Weather variability may affect moisture"], fair: ["Increasing crop stress possible", "Uneven moisture distribution"], warning: ["Crop stress may worsen", "Yield reduction likely"], danger: ["Severe crop damage possible", "High probability of yield loss"] }
  },

  hi: {
    crop: {
      high: {
        reasons: ["पौधों में घनी और एकसमान वृद्धि दिख रही है", "प्रकाश संश्लेषण क्रिया बहुत अधिक है"],
        risks: ["ध्यान नहीं देने पर हल्का तनाव हो सकता है"],
        actions: ["फसल स्वास्थ्य की निगरानी जारी रखें"]
      },
      mid: {
        reasons: ["अधिकांश खेत में वनस्पति मौजूद है", "उपग्रह डेटा से फसल तनाव जल्दी पकड़ा गया"],
        risks: ["असमान वृद्धि उत्पादन कम कर सकती है", "गर्मी या कीटों से तनाव बढ़ सकता है"],
        actions: ["सिंचाई और पोषक तत्वों की जाँच करें"]
      },
      low: {
        reasons: ["उपग्रह डेटा ने सफलतापूर्वक फसल तनाव का पता लगाया", "खेत पूरी तरह खाली नहीं, हरियाली अभी भी है"],
        risks: ["गंभीर फसल तनाव पाया गया", "उत्पादन हानि की उच्च संभावना"],
        actions: ["तत्काल कृषि उपाय आवश्यक", "स्थानीय कृषि विशेषज्ञ से सलाह लें"]
      }
    },
    water: {
      high: {
        reasons: ["मिट्टी की नमी समान रूप से वितरित है", "जड़ क्षेत्र में पर्याप्त पानी है"],
        risks: ["गर्मी में नमी कम हो सकती है"],
        actions: ["वर्तमान सिंचाई कार्यक्रम बनाए रखें"]
      },
      mid: {
        reasons: ["मिट्टी में कुछ नमी अभी भी है", "जलभराव की स्थिति नहीं मिली"],
        risks: ["खेत में सूखे क्षेत्र हो सकते हैं"],
        actions: ["आने वाले दिनों में सिंचाई की योजना बनाएं"]
      },
      low: {
        reasons: ["नमी तनाव जल्दी पहचाना गया", "कोई बाढ़ या अतिरिक्त पानी नहीं"],
        risks: ["गंभीर नमी तनाव पता चला", "फसल मुरझा या सूख सकती है"],
        actions: ["तत्काल सिंचाई आवश्यक", "फसल नुकसान रोकने के लिए देरी न करें"]
      }
    },
    overall: { excellent: "🌟 आपका खेत बेहतरीन स्थिति में है। फसल और मृदा नमी संतुलित है।", good: "✅ आपका खेत स्वस्थ है। थोड़े सुधार से उत्पादन बढ़ सकता है।", fair: "🙂 खेत स्थिर है, लेकिन कुछ तनाव संकेत दिखने लगे हैं।", warning: "⚠️ खेत के कुछ हिस्सों पर ध्यान देना ज़रूरी है।", danger: "🚨 खेत की स्थिति गंभीर है। तत्काल सुधारात्मक कार्यवाही ज़रूरी है।" },
    crop_verdict: { excellent: "फसल बहुत अच्छी है 🌱", good: "फसल स्वस्थ है 👍", fair: "फसल सामान्य है 🙂", warning: "फसल पर तनाव है ⚠️", danger: "फसल की स्थिति गंभीर है 🚨" },
    water_verdict: { excellent: "मृदा नमी आदर्श है 💧", good: "नमी का स्तर स्वस्थ है 👍", fair: "नमी थोड़ी असमान है 🙂", warning: "मिट्टी सूखने लगी है ⚠️", danger: "गंभीर नमी तनाव है 🚨" },
    badge: { excellent: "उत्कृष्ट", good: "अच्छा", fair: "ठीक", warning: "ध्यान आवश्यक", danger: "गंभीर" },
    risk_text: { excellent: "🟢 कोई बड़ा जोखिम नहीं। खेत की स्थिति अनुकूल है।", good: "🟡 अचानक परिवर्तन होने पर छोटे जोखिम हो सकते हैं।", fair: "🟠 मध्यम जोखिम पाए गए। समय रहते कार्यवाही करें।", warning: "🟠 यदि जल्द कार्यवाही न हो तो उच्च जोखिम।", danger: "🔴 गंभीर जोखिम पाया गया। तत्काल कार्यवाही आवश्यक।" },
    risk_pills: { good: ["मौसम परिवर्तन नमी को प्रभावित कर सकता है"], fair: ["फसल तनाव बढ़ सकता है", "नमी का असमान वितरण"], warning: ["फसल तनाव और बढ़ सकता है", "उपज में कमी संभावित है"], danger: ["गंभीर फसल क्षति संभव है", "उत्पादन हानि की उच्च संभावना"] }
  },

  mr: {
    crop: {
      high: {
        reasons: ["झाडांची दाट व एकसमान वाढ दिसून येते", "प्रकाशसंश्लेषण क्रिया खूप जास्त आहे"],
        risks: ["लक्ष न दिल्यास किरकोळ तणाव होऊ शकतो"],
        actions: ["पीक आरोग्याची देखरेख सुरू ठेवा"]
      },
      mid: {
        reasons: ["बहुतेक शेतात वनस्पती आहे", "उपग्रह डेटाद्वारे पीक तणाव लवकर आढळला"],
        risks: ["असमान वाढीमुळे उत्पादन कमी होऊ शकते", "उष्णता किंवा कीडांमुळे तणाव वाढू शकतो"],
        actions: ["सिंचन व पोषक तत्वांची तपासणी करा"]
      },
      low: {
        reasons: ["उपग्रह डेटाने यशस्वीरीत्या पीक तणाव ओळखला", "शेत पूर्णपणे रिकामे नाही, वनस्पती अजून आहे"],
        risks: ["गंभीर पीक तणाव आढळला", "उत्पन्न नुकसानाची जास्त शक्यता"],
        actions: ["तातडीने कृषी उपाय आवश्यक", "स्थानिक कृषी तज्ज्ञाशी सल्ला घ्या"]
      }
    },
    water: {
      high: {
        reasons: ["मातीतील ओलावा समान प्रमाणात वितरित आहे", "मुळांच्या क्षेत्रात पुरेसे पाणी आहे"],
        risks: ["उष्णतेमध्ये ओलावा कमी होऊ शकतो"],
        actions: ["सध्याचे सिंचन वेळापत्रक राखा"]
      },
      mid: {
        reasons: ["मातीत अजूनही काही ओलावा आहे", "पाणी साठण्याची समस्या आढळली नाही"],
        risks: ["शेतात कोरडे भाग होण्याची शक्यता"],
        actions: ["येत्या दिवसांत सिंचनाची योजना करा"]
      },
      low: {
        reasons: ["ओलावा तणाव लवकर आढळला", "पाणी भरणे किंवा अतिरिक्त पाणी आढळले नाही"],
        risks: ["गंभीर ओलावा तणाव आढळला", "पीक सुकू किंवा मरू शकते"],
        actions: ["तातडीने सिंचन आवश्यक", "पीक नुकसान टाळण्यासाठी विलंब करू नका"]
      }
    },
    overall: { excellent: "🌟 तुमचे शेत उत्कृष्ट स्थितीत आहे. पीक व माती ओलावा संतुलित आहे.", good: "✅ तुमचे शेत निरोगी आहे. काही सुधारणांनी उत्पन्न वाढू शकते.", fair: "🙂 शेत स्थिर आहे, पण काही तणावाची चिन्हे दिसू लागली आहेत.", warning: "⚠️ शेताच्या काही भागांना लक्ष देणे आवश्यक आहे.", danger: "🚨 शेताची स्थिती चिंताजनक आहे. त्वरित उपाय करणे आवश्यक आहे." },
    crop_verdict: { excellent: "पीक उत्तम स्थितीत आहे 🌱", good: "पीक निरोगी आहे 👍", fair: "पीक साधारण आहे 🙂", warning: "पीक तणावात आहे ⚠️", danger: "पीकाची स्थिती गंभीर आहे 🚨" },
    water_verdict: { excellent: "मातीतील ओलावा आदर्श आहे 💧", good: "ओलाव्याची पातळी चांगली आहे 👍", fair: "ओलावा थोडा असमान आहे 🙂", warning: "माती कोरडी होत आहे ⚠️", danger: "गंभीर ओलावा तणाव आहे 🚨" },
    badge: { excellent: "उत्कृष्ट", good: "चांगले", fair: "ठीक", warning: "लक्ष आवश्यक", danger: "गंभीर" },
    risk_text: { excellent: "🟢 कोणताही मोठा धोका नाही. शेताची परिस्थिती अनुकूल आहे.", good: "🟡 अचानक बदल झाल्यास किरकोळ धोके होऊ शकतात.", fair: "🟠 मध्यम धोके आढळले. वेळीच उपाय करा.", warning: "🟠 लवकर उपाय न केल्यास जास्त धोका.", danger: "🔴 गंभीर धोका आढळला. त्वरित कार्यवाही आवश्यक." },
    risk_pills: { good: ["हवामान बदलामुळे ओलावा प्रभावित होऊ शकतो"], fair: ["पीक तणाव वाढण्याची शक्यता", "ओलाव्याचे असमान वितरण"], warning: ["पीक तणाव आणखी वाढू शकतो", "उत्पन्न कमी होण्याची शक्यता"], danger: ["गंभीर पीक नुकसान होऊ शकते", "उत्पन्न पूर्ण नाशाची शक्यता"] }
  }
};

/* ──── GLOBAL TRANSLATION HELPER ─────────────────────────
   t(key) returns the flat translation for current language,
   falling back to EN. Used for data-key lookups in JS code.
──────────────────────────────────────────────────────── */
function t(key) {
  const lang = localStorage.getItem("lang") || "en";
  return translations[lang]?.[key] ?? translations.en?.[key] ?? key;
}
window.t = t;

/* ──── SUMMARY BULLETS ACCESSOR ──────────────────────────
   sb(section, tier, field) — e.g. sb('crop','high','reasons')
   Falls back to EN if current language is missing the key.
──────────────────────────────────────────────────────── */
function sb(section, tier, field) {
  const lang = localStorage.getItem("lang") || "en";
  const B = summaryBullets;
  return B[lang]?.[section]?.[tier]?.[field]
    ?? B.en?.[section]?.[tier]?.[field]
    ?? [];
}
function sbStr(section, key) {
  const lang = localStorage.getItem("lang") || "en";
  const B = summaryBullets;
  return B[lang]?.[section]?.[key]
    ?? B.en?.[section]?.[key]
    ?? "";
}
window.sb = sb;
window.sbStr = sbStr;
window.summaryBullets = summaryBullets;

/* =========================================================
   LANGUAGE SWITCHING
========================================================= */
function setLanguage(lang) {
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.dataset.key;
    if (translations[lang]?.[key]) {
      el.textContent = translations[lang][key];
    }
  });
}

/* =========================================================
   LOAD SAVED LANGUAGE
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "en";
  setLanguage(lang);

  const selector = document.getElementById("langSelect");
  if (selector) {
    selector.value = lang;
    selector.addEventListener("change", e => {
      setLanguage(e.target.value);
    });
  }
});
