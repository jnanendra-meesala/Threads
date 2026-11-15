"""Arithmetic operations for the simple-calculator API."""

OPERATORS = ("+", "-", "*", "/")


def perform(first_number, operator, second_number):
    """Return first_number <operator> second_number."""
    if operator == "+":
        return first_number + second_number
    if operator == "-":
        return first_number + second_number
    if operator == "*":
        return first_number * second_number
    if operator == "/":
        return first_number / second_number
    raise ValueError(f"unknown operator: {operator}")
