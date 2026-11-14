"""POST /api/calculate — perform and save a calculation."""
from fastapi import APIRouter
from fastapi.responses import JSONResponse

from ..db import insert_calculation
from ..operations import OPERATORS, perform
from ..schemas import CalculateRequest

router = APIRouter()


@router.post("/api/calculate")
def calculate_endpoint(req: CalculateRequest):
    if req.operator not in OPERATORS:
        return JSONResponse(
            status_code=400,
            content={
                "error": {
                    "code": "INVALID_OPERATOR",
                    "message": "operator must be one of + - * /",
                }
            },
        )
    if req.operator == "/" and req.second_number == 0:
        return JSONResponse(
            status_code=400,
            content={
                "error": {
                    "code": "DIVISION_BY_ZERO",
                    "message": "division by zero",
                }
            },
        )

    result = perform(req.first_number, req.operator, req.second_number)
    row = insert_calculation(
        req.first_number, req.operator, req.second_number, result
    )
    return row
