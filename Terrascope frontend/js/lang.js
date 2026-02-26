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
    mode_satbara: "Village Details",
    village_name: "Village Name",
    survey_number: "Plot / Survey Number",
    locate_village_btn: "Locate Plot on Map",
    recommended_badge: "Recommended",
    crop_label: "Crop Grown on This Field",
    crop_general: "General / Mixed",
    crop_rice: "Rice", crop_wheat: "Wheat",
    crop_cotton: "Cotton", crop_sugarcane: "Sugarcane", crop_soybean: "Soybean",
    satbara_title: "Satbara / 7-12 Land Record",
    satbara_info: "Enter your village name and survey number. We'll locate your village — then draw your field boundary.",
    locate_village_btn: "Locate Plot on Map",
    village_name: "Village Name",
    survey_number: "Plot / Survey Number",
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

    /* ---------- NIR UPLOAD PAGE ---------- */
    nir_upload_title: "Ground NIR Scan",
    nir_upload_sub: "Analyze individual leaves for micro-level health.",
    nir_how_title: "How to capture NIR photo?",
    nir_step_1: "Use NIR Lens",
    nir_step_2: "Even Light",
    nir_step_3: "Clear Focus",
    nir_prompt: "Tap to upload NIR camera photo",
    nir_analyze_btn: "Analyze Leaf Health →",
    nir_processing: "AI is analyzing cellular health...",
    nir_wait: "This usually takes 2-3 seconds",

    /* ---------- NIR SUMMARY PAGE UPGRADE ---------- */
    ground_leaf_analysis: "Ground Level NIR Analysis",
    analyzed_specimen: "Analyzed Specimen",
    early_stress_detection: "Early stress detection before visible symptoms.",
    stress_score_label: "STRESS SCORE",
    actionable_insights: "Actionable Insights",
    stress_detection_range: "STRESS DETECTION RANGE",
    geo_tagged: "GEO-TAGGED",

    status_healthy: "Healthy",
    status_moderate: "Moderate",
    status_critical: "Critical",
    status_severe: "Severe",

    priority_low: "LOW",
    priority_normal: "NORMAL",
    priority_medium: "MEDIUM",
    priority_high: "HIGH",
    priority_urgent: "URGENT",

    plan_maintain_routine: "Maintain Routine",
    desc_maintain_routine: "Your specimen shows no significant stress. Continue your standard irrigation and fertilization schedule.",
    plan_next_inspection: "Next Inspection",
    desc_next_inspection: "Plan your next NIR ground check in 7 days to ensure continued stability.",

    plan_optimize_irrigation: "Optimize Irrigation",
    desc_optimize_irrigation: "Early moisture stress detected. Ensure the root zone is receiving adequate water. Check for soil compaction.",
    plan_nutrient_boost: "Nutrient Boost",
    desc_nutrient_boost: "Consider a mild foliar spray with trace minerals to help the plant recover from early stress.",
    plan_monitor_daily: "Monitor Daily",
    desc_monitor_daily: "Watch for spreading symptoms. Re-scan this zone in 48 hours to track progress.",

    plan_emergency_watering: "Emergency Watering",
    desc_emergency_watering: "Severe stress detected. Initiate deep irrigation immediately to prevent permanent tissue damage.",
    plan_disease_inspection: "Disease Inspection",
    desc_disease_inspection: "High stress often correlates with disease susceptibility. Inspect stem and lower leaves for pests or fungus.",
    plan_expert_intervention: "Expert Intervention",
    desc_expert_intervention: "The stress level is critical. We recommend reaching out to an agricultural specialist immediately.",

    analysis_failed: "Analysis failed. Please ensure the specimen is clearly visible.",
    error_invalid_specimen: "The image does not look like a valid plant specimen. Please focus on a leaf.",

    /* ---------- NIR SUMMARY PAGE ---------- */
    // leaf_health_index: "Leaf Health Index", // Moved/replaced
    // analyzed_specimen: "Analyzed Specimen", // Moved/replaced
    ground_capture: "High-resolution NIR ground capture",
    how_it_works_title: "How Ground NIR Works",
    how_it_works_desc: "Our model analyzes reflected light patterns in the Near-Infrared spectrum. Cellular stress shows up in these patterns before any visible yellowing occurs.",
    biologic_header: "Expert Recommendation",
    new_scan_btn: "← New Scan",

    /* ---------- ABOUT PAGE ---------- */
    about_hero_badge: "EMPOWERING INDIAN FARMERS",
    about_hero_h1: "Intelligence for Every Acre",
    about_desc: "TerraScope combines world-class satellite imagery with on-ground NIR imaging to provide farmers with a 360-degree view of their field's health.",
    about_macro_title: "Macro Intelligence",
    about_macro_desc: "Using Sentinel-2 satellite constellations, we monitor your fields from space to detect moisture stress across entire villages.",
    about_micro_title: "Micro Intelligence",
    about_micro_desc: "Our Ground NIR technology processes smartphone photos of individual leaves to detect stress symptoms invisible to the human eye.",
    about_mission_title: "Our Mission",
    about_mission_desc: "We believe data-driven farming should be free and accessible to help reduce fertilizer waste and increase yields.",
    about_cta_title: "Ready to start?",
    about_cta_btn: "Analyze My Field",

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
    mode_satbara: "गांव का विवरण",
    village_name: "गांव का नाम",
    survey_number: "खेत / सर्वे नंबर",
    locate_village_btn: "नक्शे पर खेत ढूंढें",
    recommended_badge: "अनुशंसित",
    crop_label: "इस खेत में उगाई गयी फसल",
    crop_general: "सामान्य", crop_rice: "धान", crop_wheat: "गेहूँ",
    crop_cotton: "कपास", crop_sugarcane: "गन्ना", crop_soybean: "सोयाबीन",
    satbara_title: "सात-बारा / 7-12 भूमि अभिलेख",
    satbara_info: "गांव का नाम और सर्वेक्षण नंबर दर्ज करें। हम नक्शे पर गांव ढूंढेंगे।",
    // locate_village_btn: "नक्शे पर खेत ढूंढें", // Duplicate key, removed.
    // village_name: "गांव का नाम", // Duplicate key, removed.
    // survey_number: "खेत / सर्वे नंबर", // Duplicate key, removed.
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
    feat4_title: "सात-बारा विधा", feat5_title: "3 भाषाएं", feat5_desc: "सभी परिणाम अंग्रेजी, हिंदी या मराठी में — जो आपको सूट करे वह चुनें।",
    feat6_title: "सेकंडों में परिणाम", feat6_desc: "पॉइंट करें, क्लिक करें, विश्लेषण करें — एक मिनट से भी कम समय में पूरी सैटेलाइट फील्ड रिपोर्ट।",

    /* ---------- NIR UPLOAD PAGE ---------- */
    nir_upload_title: "ग्राउंड एनआईआर स्कैन",
    nir_upload_sub: "सूक्ष्म स्तर के स्वास्थ्य के लिए व्यक्तिगत पत्तियों का विश्लेषण करें।",
    nir_how_title: "एनआईआर फोटो कैसे लें?",
    nir_step_1: "एनआईआर लेंस उपयोग करें",
    nir_step_2: "समान प्रकाश",
    nir_step_3: "स्पष्ट फोकस",
    nir_prompt: "एनआईआर कैमरा फोटो अपलोड करने के लिए टैप करें",
    nir_analyze_btn: "पत्ती स्वास्थ्य विश्लेषण →",
    nir_processing: "AI सेलुलर स्वास्थ्य का विश्लेषण कर रहा है...",
    nir_wait: "इसमें आमतौर पर 2-3 सेकंड लगते हैं",

    /* ---------- NIR SUMMARY PAGE UPGRADE ---------- */
    ground_leaf_analysis: "ग्राउंड लेव्हल एनआयआर विश्लेषण",
    analyzed_specimen: "विश्लेषण किया गया नमूना",
    early_stress_detection: "दृश्यमान लक्षणों से पहले जल्दी तनाव का पता लगाना।",
    stress_score_label: "तनाव स्कोर",
    actionable_insights: "कार्यवाही योग्य अंतर्दृष्टि",
    stress_detection_range: "तनाव का पता लगाने की सीमा",
    geo_tagged: "जियो-टैग किया गया",

    status_healthy: "स्वस्थ",
    status_moderate: "मध्यम",
    status_critical: "गंभीर",
    status_severe: "अत्यधिक गंभीर",

    priority_low: "कम",
    priority_normal: "सामान्य",
    priority_medium: "मध्यम",
    priority_high: "उच्च",
    priority_urgent: "अति आवश्यक",

    plan_maintain_routine: "दिनचर्या बनाए रखें",
    desc_maintain_routine: "आपका नमूना कोई महत्वपूर्ण तनाव नहीं दिखाता है। अपनी मानक सिंचाई और उर्वरीकरण अनुसूची जारी रखें।",
    plan_next_inspection: "अगला निरीक्षण",
    desc_next_inspection: "निरंतर स्थिरता सुनिश्चित करने के लिए 7 दिनों में अपने अगले एनआईआर ग्राउंड चेक की योजना बनाएं।",

    plan_optimize_irrigation: "सिंचाई अनुकूलित करें",
    desc_optimize_irrigation: "प्रारंभिक नमी तनाव का पता चला। सुनिश्चित करें कि जड़ क्षेत्र को पर्याप्त पानी मिल रहा है। मिट्टी के जमाव की जाँच करें।",
    plan_nutrient_boost: "पोषक तत्वों को बढ़ावा",
    desc_nutrient_boost: "पौधे को प्रारंभिक तनाव से उबरने में मदद करने के लिए सूक्ष्म खनिजों के साथ हल्के पत्तेदार स्प्रे पर विचार करें।",
    plan_monitor_daily: "दैनिक निगरानी",
    desc_monitor_daily: "फैलने वाले लक्षणों पर नज़र रखें। प्रगति को ट्रैक करने के लिए 48 घंटों में इस क्षेत्र को फिर से स्कैन करें।",

    plan_emergency_watering: "आपातकालीन सिंचाई",
    desc_emergency_watering: "गंभीर तनाव का पता चला। स्थायी ऊतक क्षति को रोकने के लिए तुरंत गहरी सिंचाई शुरू करें।",
    plan_disease_inspection: "रोग निरीक्षण",
    desc_disease_inspection: "उच्च तनाव अक्सर रोग संवेदनशीलता के साथ सहसंबद्ध होता है। कीटों या कवक के लिए तने और निचली पत्तियों का निरीक्षण करें।",
    plan_expert_intervention: "विशेषज्ञ हस्तक्षेप",
    desc_expert_intervention: "तनाव का स्तर गंभीर है। हम तुरंत एक कृषि विशेषज्ञ से संपर्क करने की सिफारिश करते हैं।",

    analysis_failed: "विश्लेषण विफल रहा। कृपया सुनिश्चित करें कि नमूना स्पष्ट रूप से दिखाई दे रहा है।",
    error_invalid_specimen: "छवि एक वैध पौधे के नमूने की तरह नहीं लगती है। कृपया पत्ती पर ध्यान केंद्रित करें।",

    /* ---------- NIR SUMMARY PAGE ---------- */
    // leaf_health_index: "पत्ती स्वास्थ्य सूचकांक", // Moved/replaced
    // analyzed_specimen: "विश्लेषण किया गया नमूना", // Moved/replaced
    ground_capture: "उच्च-रिज़ॉल्यूशन एनआईआर ग्राउंड कैप्चर",
    how_it_works_title: "ग्राउंड एनआईआर कैसे काम करता है",
    how_it_works_desc: "हमारा मॉडल नियर-इन्फ्रारेड स्पेक्ट्रम में परावर्तित प्रकाश पैटर्न का विश्लेषण करता है। सेलुलर तनाव इन पैटर्न में किसी भी दृश्यमान पीलापन होने से पहले दिखाई देता है।",
    biologic_header: "विशेषज्ञ की सिफारिश",
    new_scan_btn: "← नया स्कैन",

    /* ---------- ABOUT PAGE ---------- */
    about_hero_badge: "भारतीय किसानों को सशक्त बनाना",
    about_hero_h1: "हर एकड़ के लिए बुद्धिमत्ता",
    about_desc: "टेरास्कोप विश्व-स्तरीय उपग्रह इमेजरी को ऑन-ग्राउंड एनआईआर इमेजिंग के साथ जोड़ता है ताकि किसानों को उनके खेत के स्वास्थ्य का 360-डिग्री दृश्य प्रदान किया जा सके।",
    about_macro_title: "मैक्रो इंटेलिजेंस",
    about_macro_desc: "सेंटिनल-2 उपग्रह नक्षत्रों का उपयोग करके, हम पूरे गांवों में नमी के तनाव का पता लगाने के लिए आपके खेतों की अंतरिक्ष से निगरानी करते हैं।",
    about_micro_title: "माइक्रो इंटेलिजेंस",
    about_micro_desc: "हमारी ग्राउंड एनआईआर तकनीक स्मार्टफोन की व्यक्तिगत पत्तियों की तस्वीरों को संसाधित करती है ताकि मानव आंख को अदृश्य तनाव के लक्षणों का पता लगाया जा सके।",
    about_mission_title: "हमारा लक्ष्य",
    about_mission_desc: "हम मानते हैं कि डेटा-संचालित खेती मुफ्त और सुलभ होनी चाहिए ताकि उर्वरक की बर्बादी को कम करने और पैदावार बढ़ाने में मदद मिल सके।",
    about_cta_title: "शुरू करने के लिए तैयार हैं?",
    about_cta_btn: "मेरे खेत का विश्लेषण करें",

    /* ---------- NDVI LEGEND ---------- */
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
    select_sub: "शेतजमीन शोधण्याची पदधत निवडा, मग पिक निवडा।",
    selection_method: "शेत निवड पदधत",
    mode_point: "बिंदू (जलद)", mode_polygon: "सीमा (अचूक)",
    mode_satbara: "गावाचा तपशील",
    village_name: "गावाचे नाव",
    survey_number: "शेत / सर्वे नंबर",
    locate_village_btn: "नकाशावर शेत शोधा",
    recommended_badge: "शिफारस",
    crop_label: "या शेतावर ची पिक",
    crop_general: "साधारण", crop_rice: "भात", crop_wheat: "गहूं",
    crop_cotton: "कापूस", crop_sugarcane: "उस", crop_soybean: "सोयाबीन",
    satbara_title: "सातबारा / 7-12 जमीन नोंद",
    satbara_info: "गावाचे नाव आणि सर्वे नंबर टाका. आम्ही नकाशावर गाव शोधू।",
    // locate_village_btn: "नकाशावर गाव शोधा", // Duplicate key, removed.
    // village_name: "गावाचे नाव", // Duplicate key, removed.
    // survey_number: "शेत / सर्वे नंबर", // Duplicate key, removed.
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
    no_vegetation: "वनस्पती नाही", dense_crops: "घन पिक",

    /* ---------- NIR UPLOAD PAGE ---------- */
    nir_upload_title: "ग्राउंड एनआईआर स्कॅन",
    nir_upload_sub: "सूक्ष्म स्तरावरील आरोग्यासाठी वैयक्तिक पानांचे विश्लेषण करा.",
    nir_how_title: "एनआईआर फोटो कसा घ्यावा?",
    nir_step_1: "एनआईआर लेन्स वापरा",
    nir_step_2: "समान प्रकाश",
    nir_step_3: "स्पष्ट फोकस",
    nir_prompt: "एनआईआर कॅमेरा फोटो अपलोड करण्यासाठी टॅप करा",
    nir_analyze_btn: "पानाचे आरोग्य विश्लेषण करा →",
    nir_processing: "एआय सेल्युलर आरोग्याचे विश्लेषण करत आहे...",
    nir_wait: "याला सहसा 2-3 सेकंद लागतात",

    /* ---------- NIR SUMMARY PAGE UPGRADE ---------- */
    ground_leaf_analysis: "ग्राउंड लेव्हल एनआयआर विश्लेषण",
    analyzed_specimen: "विश्लेषण केलेला नमुना",
    early_stress_detection: "दृश्य लक्षणांपूर्वी सुरुवातीच्या तणावाचा शोध।",
    stress_score_label: "ताण गुण",
    actionable_insights: "कृती करण्यायोग्य अंतर्दृष्टी",
    stress_detection_range: "ताण शोधण्याची श्रेणी",
    geo_tagged: "जिओ-टॅग केलेले",

    status_healthy: "निरोगी",
    status_moderate: "मध्यम",
    status_critical: "गंभीर",
    status_severe: "अतिशय गंभीर",

    priority_low: "कमी",
    priority_normal: "सामान्य",
    priority_medium: "मध्यम",
    priority_high: "उच्च",
    priority_urgent: "तातडीचे",

    plan_maintain_routine: "दिनचर्या चालू ठेवा",
    desc_maintain_routine: "तुमच्या नमुन्यात कोणताही महत्त्वपूर्ण ताण दिसत नाही. तुमचे मानक सिंचन आणि खत वेळापत्रक चालू ठेवा.",
    plan_next_inspection: "पुढील तपासणी",
    desc_next_inspection: "सातत्यपूर्ण स्थिरता सुनिश्चित करण्यासाठी ७ दिवसांत तुमच्या पुढील एनआयआर (NIR) ग्राउंड तपासणीची योजना करा.",

    plan_optimize_irrigation: "सिंचन सुधारा",
    desc_optimize_irrigation: "सुरुवातीचा ओलावा ताण आढळला. मुळांच्या क्षेत्राला पुरेसे पाणी मिळत असल्याची खात्री करा. मातीच्या कडकपणाची तपासणी करा.",
    plan_nutrient_boost: "पोषक तत्वे वाढवा",
    desc_nutrient_boost: "रोपाला सुरुवातीच्या ताणातून सावरण्यास मदत करण्यासाठी सूक्ष्म खनिजांसह हलक्या फोलियर स्प्रेचा विचार करा.",
    plan_monitor_daily: "दररोज निरीक्षण करा",
    desc_monitor_daily: "लक्षणे पसरत आहेत का यावर लक्ष ठेवा. प्रगतीचा मागोवा घेण्यासाठी ४८ तासांत या क्षेत्राची पुन्हा स्कॅन करा.",

    plan_emergency_watering: "तातडीचे पाणी देणे",
    desc_emergency_watering: "गंभीर ताण आढळला. उतींचे कायमस्वरूपी नुकसान टाळण्यासाठी त्वरित खोल सिंचन सुरू करा.",
    plan_disease_inspection: "रोग तपासणी",
    desc_disease_inspection: "उच्च ताण अनेकदा रोगाच्या संवेदनशीलतेशी संबंधित असतो. कीड किंवा बुरशीसाठी खोड आणि खालच्या पानांचे निरीक्षण करा.",
    plan_expert_intervention: "तज्ञांचा सल्ला",
    desc_expert_intervention: "ताण पातळी गंभीर आहे. आम्ही त्वरित कृषी तज्ञाशी संपर्क साधण्याची शिफारस करतो।",

    analysis_failed: "विश्लेषण अयशस्वी झाले. कृपया नमुना स्पष्टपणे दिसत असल्याची खात्री करा.",
    error_invalid_specimen: "ही प्रतिमा वैध वनस्पती नमुन्यासारखी दिसत नाही. कृपया पानावर लक्ष केंद्रित करा।"
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
