# Simple Calculator Project

## 1. Project Overview

Develop a simple calculator web application using Python, React, and
SQLite. Users can perform basic arithmetic operations and view their
calculation history.

## 2. Technologies

-   Frontend: React
-   Backend: Python (FastAPI)
-   Database: SQLite
-   API: REST API

## 3. Main Features

-   Addition, subtraction, multiplication, and division.
-   Clear and delete input.
-   Display calculation results.
-   Save calculation history in SQLite.
-   View and delete previous calculations.
-   Handle errors such as division by zero.

## 4. Application Architecture

1.  React provides the calculator interface.
2.  React sends calculation requests to the Python backend.
3.  Python validates the input and performs the calculation.
4.  SQLite stores the calculation and result.
5.  Python returns the result to React for display.

## 5. Database Design

Create a `calculations` table with these columns:

  Column          Type
  --------------- ---------------------
  id              INTEGER PRIMARY KEY
  first_number    REAL
  operator        TEXT
  second_number   REAL
  result          REAL
  created_at      DATETIME

## 6. Main API Endpoints

  Method   Endpoint              Purpose
  -------- --------------------- --------------------------------
  POST     `/api/calculate`      Perform and save a calculation
  GET      `/api/history`        View calculation history
  DELETE   `/api/history/{id}`   Delete one calculation
  DELETE   `/api/history`        Clear all history

## 7. Implementation Steps

1.  Create the project folders for frontend and backend.
2.  Build the calculator interface using React.
3.  Create Python APIs for arithmetic operations.
4.  Connect Python to the SQLite database.
5.  Integrate React with the Python APIs.
6.  Save and display calculation history.
7.  Add input validation and error handling.
8.  Test all calculator operations and database functions.

## 8. Testing

Verify that: - All four arithmetic operations work correctly. - Decimal
and negative numbers are supported. - Division by zero displays an
error. - Results are saved in SQLite. - History remains available after
refreshing the page. - Delete and clear-history functions work. - React
and Python communicate correctly.

## 9. Expected Outcome

A fully working, responsive calculator application with a React
frontend, Python backend, SQLite database, and persistent calculation
history.
