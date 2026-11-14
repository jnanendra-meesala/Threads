"""FastAPI application for the simple-calculator API."""
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.exceptions import RequestValidationError
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from .db import init_db
from .routes import calculate, history


@asynccontextmanager
async def lifespan(app):
    init_db()
    yield


app = FastAPI(title="simple-calculator", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(calculate.router)
app.include_router(history.router)


@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request, exc):
    return JSONResponse(
        status_code=400,
        content={
            "error": {
                "code": "INVALID_NUMBER",
                "message": "a required field is missing or not a finite number",
            }
        },
    )
