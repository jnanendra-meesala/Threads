"""Request schemas for the simple-calculator API."""
from pydantic import BaseModel


class CalculateRequest(BaseModel):
    first_number: float
    operator: str
    second_number: float
