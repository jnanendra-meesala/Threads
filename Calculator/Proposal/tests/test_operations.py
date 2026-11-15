"""Unit tests for the calculator's arithmetic operations."""

import unittest

from api.operations import perform


class PerformTests(unittest.TestCase):
    """Arithmetic behavior of api.operations.perform."""

    def test_addition(self):
        self.assertEqual(perform(2, "+", 3), 5)

    def test_subtraction(self):
        self.assertEqual(perform(7, "-", 10), -3)

    def test_multiplication(self):
        self.assertEqual(perform(6, "*", 7), 42)

    def test_division(self):
        self.assertEqual(perform(10, "/", 4), 2.5)

    def test_negative_and_decimal_operands(self):
        self.assertEqual(perform(-2.5, "+", 0.5), -2.0)

    def test_unknown_operator_raises(self):
        with self.assertRaises(ValueError):
            perform(1, "%", 2)


if __name__ == "__main__":
    unittest.main()
