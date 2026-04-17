from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from pydantic import BaseModel

from api.v1.endpoints.clothes import router as clothes_router
from logger_setup import logger

app = FastAPI(title="AI Stylist API")

app.include_router(clothes_router, prefix="/api/v1/clothes", tags=["Clothing Detection"])


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

