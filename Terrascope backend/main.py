from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List
import ee
import datetime

# ======================================
# INITIALIZE GOOGLE EARTH ENGINE
# ======================================
ee.Initialize(project="dotted-empire-477317-b8")

# ======================================
# FASTAPI SETUP
# ======================================
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5000",
        "http://127.0.0.1:5000",
    ],
    allow_methods=["*"],
    allow_headers=["*"],
)

# ======================================
# REQUEST MODELS
# ======================================
class PointData(BaseModel):
    lat: float
    lon: float

class FieldRequest(BaseModel):
    point: Optional[PointData] = None
    polygon: Optional[List[List[List[float]]]] = None

# ======================================
# CLASSIFICATION HELPERS
# ======================================
def classify_ndvi(v: float) -> str:
    if v < 0.25:
        return "Low"
    elif v < 0.5:
        return "Moderate"
    else:
        return "High"

def classify_ndmi(v: float) -> str:
    if v < 0.05:
        return "Low"
    elif v < 0.25:
        return "Moderate"
    else:
        return "High"

# ======================================
# MAIN ANALYSIS ENDPOINT
# ======================================
@app.post("/analyze-field")
def analyze_field(data: FieldRequest):

    # ---------- GEOMETRY ----------
    if data.polygon:
        geometry = ee.Geometry.Polygon(data.polygon)
        geometry_type = "polygon"

    elif data.point:
        geometry = ee.Geometry.Point(
            [data.point.lon, data.point.lat]
        ).buffer(1000)
        geometry_type = "point"

    else:
        return {"error": "No geometry provided"}

    # ---------- DATE RANGE ----------
    end_date = datetime.date.today()
    start_date = end_date - datetime.timedelta(days=30)

    # ---------- SENTINEL-2 ----------
    s2 = (
        ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED")
        .filterBounds(geometry)
        .filterDate(str(start_date), str(end_date))
        .filter(ee.Filter.lt("CLOUDY_PIXEL_PERCENTAGE", 20))
        .median()
        .clip(geometry)
    )

    # ---------- INDICES ----------
    ndvi = s2.normalizedDifference(["B8", "B4"]).rename("NDVI")
    ndmi = s2.normalizedDifference(["B8", "B11"]).rename("NDMI")

    # ---------- STATISTICS ----------
    stats = ee.Image.cat([ndvi, ndmi]).reduceRegion(
        reducer=ee.Reducer.mean(),
        geometry=geometry,
        scale=10,
        maxPixels=1e9
    ).getInfo()

    if stats.get("NDVI") is None:
        return {"error": "No usable satellite data"}

    # ---------- CLASSIFICATION ----------
    crop_status = classify_ndvi(stats["NDVI"])
    moisture_status = classify_ndmi(stats["NDMI"])

    # ---------- VISUAL IMAGE ----------
    rgb = s2.select(["B4", "B3", "B2"])
    rgb_vis = {"min": 0, "max": 3000}

    ndvi_vis = {
        "min": 0.2,
        "max": 0.8,
        "palette": ["yellow", "green"]
    }

    visual = rgb.visualize(**rgb_vis).blend(
        ndvi.visualize(**ndvi_vis)
    )

    map_image_url = visual.getThumbURL({
        "region": geometry,
        "dimensions": 600,
        "format": "png"
    })

    # ---------- RESPONSE ----------
    return {
        "geometry_type": geometry_type,
        "ndvi_mean": round(stats["NDVI"], 3),
        "ndmi_mean": round(stats["NDMI"], 3),
        "crop_status": crop_status,
        "moisture_status": moisture_status,
        "analysis_window_days": 30,
        "map_image_url": map_image_url
    }
