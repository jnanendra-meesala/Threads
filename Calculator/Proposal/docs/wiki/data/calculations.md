# Table: calculations

> **Sources** — interview Q6, Q14; spec `Documentation/project_documentation.md` §5; `api/db.py` `[planned]`
> **Status** — [spec]
> **Page-size budget** — used 66 / 300 lines

<a id="purpose"></a>
## Purpose
One stored arithmetic operation: its two operands, the operator, and the computed result, kept as persistent history.

<a id="schema"></a>
## Schema

```sql
-- api/db.py (planned)
CREATE TABLE calculations (
  id            INTEGER   PRIMARY KEY AUTOINCREMENT,
  first_number  REAL      NOT NULL,
  operator      TEXT      NOT NULL,
  second_number REAL      NOT NULL,
  result        REAL      NOT NULL,
  created_at    DATETIME  NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

Schema is created by an init function in `api/db.py` `[planned]` — there is no migration framework (raw `sqlite3`).

<a id="columns"></a>
## Columns

| Column | Type | Nullable | Default | Constraint | Notes |
|---|---|---|---|---|---|
| id | INTEGER | no | autoincrement | PK | rowid alias |
| first_number | REAL | no | — | — | left operand |
| operator | TEXT | no | — | one of `+ - * /` | checked in API, not DB |
| second_number | REAL | no | — | — | right operand |
| result | REAL | no | — | — | computed by API |
| created_at | DATETIME | no | CURRENT_TIMESTAMP | — | UTC |

<a id="invariants"></a>
## Invariants
- `operator` is one of `+`, `-`, `*`, `/`. Enforced by the API before insert — see [api/calculate/post.md#request](../api/calculate/post.md#request).
- A row with `operator = '/'` always has `second_number != 0`; division by zero is rejected by the API — see [api/calculate/post.md#responses](../api/calculate/post.md#responses).
- `result` is always the value the API computed from `first_number`, `operator`, `second_number` — the DB never computes it.

<a id="read-patterns"></a>
## Read patterns
- List all, newest first → [api/history/list.md](../api/history/list.md)

<a id="write-patterns"></a>
## Write patterns
- Insert → [api/calculate/post.md](../api/calculate/post.md)
- Delete one by id → [api/history/delete-by-id.md](../api/history/delete-by-id.md)
- Delete all → [api/history/clear.md](../api/history/clear.md)

<a id="volume"></a>
## Volume estimates
Not specified — `[GAP-OPS-01: no load/volume target — product owner decides]`.

<a id="verify"></a>
## Verify

```bash
sqlite3 "$DATABASE_PATH" ".schema calculations"
```
Expected (not run: needs the database): the CREATE TABLE statement matches §[Schema](#schema).
