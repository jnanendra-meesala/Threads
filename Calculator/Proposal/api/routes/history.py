"""History endpoints: GET /api/history and DELETE /api/history[/{id}]."""
from fastapi import APIRouter, Response
from fastapi.responses import JSONResponse

from ..db import clear_calculations, delete_calculation, list_calculations

router = APIRouter()


@router.get("/api/history")
def get_history():
    return {"calculations": list_calculations()}


@router.delete("/api/history/{calc_id}")
def delete_one(calc_id: int):
    if not delete_calculation(calc_id):
        return JSONResponse(
            status_code=404,
            content={
                "error": {
                    "code": "NOT_FOUND",
                    "message": f"no calculation with id {calc_id}",
                }
            },
        )
    return Response(status_code=204)


@router.delete("/api/history")
def clear_all():
    clear_calculations()
    return Response(status_code=204)
