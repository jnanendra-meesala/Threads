"""SQLite access layer for the simple-calculator API (raw sqlite3)."""
import os
import sqlite3

DATABASE_PATH = os.environ.get("DATABASE_PATH", "calculator.db")


def _connect():
    conn = sqlite3.connect(DATABASE_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    """Create the calculations table if it does not already exist."""
    conn = _connect()
    try:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS calculations (
                id            INTEGER   PRIMARY KEY AUTOINCREMENT,
                first_number  REAL      NOT NULL,
                operator      TEXT      NOT NULL,
                second_number REAL      NOT NULL,
                result        REAL      NOT NULL,
                created_at    DATETIME  NOT NULL DEFAULT CURRENT_TIMESTAMP
            )
            """
        )
        conn.commit()
    finally:
        conn.close()


def insert_calculation(first_number, operator, second_number, result):
    """Insert one calculation and return the stored row as a dict."""
    conn = _connect()
    try:
        cur = conn.execute(
            "INSERT INTO calculations (first_number, operator, second_number, result) "
            "VALUES (?, ?, ?, ?)",
            (first_number, operator, second_number, result),
        )
        conn.commit()
        row = conn.execute(
            "SELECT * FROM calculations WHERE id = ?", (cur.lastrowid,)
        ).fetchone()
        return dict(row)
    finally:
        conn.close()


def list_calculations():
    """Return every calculation, newest first."""
    conn = _connect()
    try:
        rows = conn.execute(
            "SELECT * FROM calculations ORDER BY id DESC"
        ).fetchall()
        return [dict(row) for row in rows]
    finally:
        conn.close()


def delete_calculation(calc_id):
    """Delete one calculation by id. Return True if a row was deleted."""
    conn = _connect()
    try:
        cur = conn.execute("DELETE FROM calculations WHERE id = ?", (calc_id,))
        conn.commit()
        return cur.rowcount > 0
    finally:
        conn.close()


def clear_calculations():
    """Delete every calculation."""
    conn = _connect()
    try:
        conn.execute("DELETE FROM calculations")
        conn.commit()
    finally:
        conn.close()
