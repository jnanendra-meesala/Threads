"""Arithmetic operations for the simple-calculator API."""

OPERATORS = ("+", "-", "*", "/")


def perform(first_number, operator, second_number):
    """Return the arithmetic result; supported operators are +, -, *, and /."""
    if operator == "+":
        return first_number + second_number
    if operator == "-":
        return first_number - second_number
    if operator == "*":
        return first_number * second_number
    if operator == "/":
        return first_number / second_number
    raise ValueError(f"unknown operator: {operator}")
