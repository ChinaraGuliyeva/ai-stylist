import io

from PIL import Image


class ImageService:
    @staticmethod
    def resize_for_model(image_bytes: bytes, size=(256, 256)) -> Image.Image:
        img = Image.open(io.BytesIO(image_bytes)).convert("RGB")
        return img.resize(size, Image.Resampling.LANCZOS)

# TO DO: Add file saving

