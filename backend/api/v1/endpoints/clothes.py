from services.image_service import ImageService
from fastapi import APIRouter, File, UploadFile

router = APIRouter()


@router.post("/upload")
async def process_clothes(file: UploadFile = File(...)):
    data = await file.read()
    processed_image = ImageService.resize_for_model(data)

    return {"message": "Image ready for YOLO", "size": processed_image.size}
