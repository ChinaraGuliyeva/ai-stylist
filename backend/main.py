import logging

from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from pydantic import BaseModel

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
    handlers=[
        logging.StreamHandler(),
    ],
)
logger = logging.getLogger(__name__)

app = FastAPI()


class AIRequest(BaseModel):
    prompt: str


@app.middleware("http")
async def catch_exceptions_middleware(request: Request, call_next):
    try:
        return await call_next(request)
    except Exception as exc:
        logger.error(f"Global error: {exc}", exc_info=True)
        return JSONResponse(
            status_code=500,
            content={
                "message": "Internal Server Error",
                "detail": "Something went wrong",
            },
        )


@app.get("/")
def read_root():
    return {"status": "ok", "message": "Backend is running"}


# @app.post("/ask")
# async def ask_ai(request: AIRequest):
#     user_text = request.prompt
#     ai_response = f"

#     return {"response": ai_response}
