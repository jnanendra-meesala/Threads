"""Arithmetic operations for the simple-calculator API."""

OPERATORS = ("+", "-", "*", "/")


def perform(first_number, operator, second_number):
    """Return the arithmetic result; raise ValueError for an unknown operator."""
    if operator == "+":
        return first_number + second_number
    if operator == "-":
        return first_number - second_number
    if operator == "*":
        return first_number * second_number
    if operator == "/":
        return first_number / second_number
    raise ValueError(f"unknown operator: {operator}")
