from fastapi import FastAPI
from pydantic import BaseModel
import logging

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
    handlers=[
        logging.StreamHandler(),
    ]
)

app = FastAPI()

class AIRequest(BaseModel):
    prompt: str


@app.get("/")
def read_root():
    return {"status": "ok", "message": "Backend is running"}


# @app.post("/ask")
# async def ask_ai(request: AIRequest):
#     user_text = request.prompt
#     ai_response = f"

#     return {"response": ai_response}
