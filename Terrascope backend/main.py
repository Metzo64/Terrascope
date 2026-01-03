from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List
import ee
import datetime

# -------------------------------
# INITIALIZE EARTH ENGINE
# -------------------------------
ee.Initialize(project="dotted-empire-477317-b8")

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

# -------------------------------
# REQUEST MODEL
# -------------------------------
class PointData(BaseModel):
    lat: float
    lon: float

class FieldRequest(BaseModel):
    point: Optional[PointData] = None
    polygon: Optional[List[List[List[float]]]] = None


# -------------------------------
# CLASSIFIERS
# -------------------------------
def classify_ndvi(v):
    if v < 0.2:
        return "Low"
    elif v < 0.5:
        return "Moderate"
    else:
        return "High"

def classify_moisture(v):
    if v < 0:
        return "Low"
    elif v < 0.2:
        return "Moderate"
    else:
        return "High"


# -------------------------------
# MAIN API
# -------------------------------
@app.post("/analyze-field")
def analyze_field(data: FieldRequest):

    # ---------------------------
    # 1. BUILD GEOMETRY
    # ---------------------------
    if data.polygon:
        geometry = ee.Geometry.Polygon(data.polygon)
        geometry_type = "polygon"

    elif data.point:
        geometry = ee.Geometry.Point([data.point.lon, data.point.lat])
        geometry_type = "point"

    else:
        return {"error": "No field geometry provided"}

    # ---------------------------
    # 2. DATE RANGE
    # ---------------------------
    end_date = datetime.date.today()
    start_date = end_date - datetime.timedelta(days=30)

    # ---------------------------
    # 3. LOAD SENTINEL-2
    # ---------------------------
    s2 = (
        ee.ImageCollection("COPERNICUS/S2_SR")
        .filterBounds(geometry)
        .filterDate(str(start_date), str(end_date))
        .filter(ee.Filter.lt("CLOUDY_PIXEL_PERCENTAGE", 20))
        .median()
    )

    # ---------------------------
    # 4. INDICES
    # ---------------------------
    ndvi = s2.normalizedDifference(["B8", "B4"]).rename("NDVI")
    ndmi = s2.normalizedDifference(["B8", "B11"]).rename("NDMI")

    indices = ndvi.addBands(ndmi)

    # ---------------------------
    # 5. REDUCE OVER GEOMETRY
    # ---------------------------
    stats = indices.reduceRegion(
        reducer=ee.Reducer.mean(),
        geometry=geometry,
        scale=10,
        maxPixels=1e9,
    ).getInfo()

    ndvi_val = stats.get("NDVI")
    ndmi_val = stats.get("NDMI")

    if ndvi_val is None or ndmi_val is None:
        return {
            "error": "Insufficient satellite data for selected field"
        }

    # ---------------------------
    # 6. CLASSIFICATION
    # ---------------------------
    crop_status = classify_ndvi(ndvi_val)
    moisture_status = classify_moisture(ndmi_val)

    summary = (
        "Crop health is good across the field."
        if crop_status == "High"
        else "Signs of crop stress detected. Monitoring recommended."
    )

    # ---------------------------
    # 7. RESPONSE
    # ---------------------------
    return {
        "geometry_type": geometry_type,
        "ndvi_mean": round(ndvi_val, 3),
        "ndmi_mean": round(ndmi_val, 3),
        "crop_status": crop_status,
        "moisture_status": moisture_status,
        "summary": summary,
    }
