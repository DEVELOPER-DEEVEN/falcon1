from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class OcrRequest(BaseModel):
    image_base64: str

class BoundingBox(BaseModel):
    x: int
    y: int
    width: int
    height: int

class OcrResult(BaseModel):
    text: str
    box: BoundingBox

class OcrResponse(BaseModel):
    results: List[OcrResult]

@app.post("/ocr", response_model=OcrResponse)
async def perform_ocr(request: OcrRequest):
    """
    Simulates OCR on a given image.
    In a real implementation, this would decode the base64 image,
    run it through an OCR engine like Tesseract, and return the results.
    """
    print(f"Received OCR request for image (first 50 chars): {request.image_base64[:50]}...")

    # Hardcoded response for simulation
    return OcrResponse(
        results=[
            OcrResult(
                text="Compose",
                box=BoundingBox(x=50, y=150, width=100, height=30)
            ),
            OcrResult(
                text="Inbox",
                box=BoundingBox(x=50, y=200, width=80, height=30)
            )
        ]
    )

@app.get("/")
async def root():
    return {"message": "FalconX Vision Service is running"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
