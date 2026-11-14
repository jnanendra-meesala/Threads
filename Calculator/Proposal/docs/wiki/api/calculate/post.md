# POST /api/calculate — perform and save a calculation

> **Sources** — interview Q15; spec `Documentation/project_documentation.md` §6; [data/calculations.md](../../data/calculations.md)
> **Status** — [spec]
> **Page-size budget** — used 87 / 300 lines

<a id="purpose"></a>
## Purpose
Validate two operands and an operator, compute the result, insert a `calculations` row, and return the saved calculation.

<a id="auth"></a>
## Auth
- No header required — public endpoint (see [auth/00-overview.md](../../auth/00-overview.md)).

<a id="request"></a>
## Request

### Headers

| Header | Required | Format |
|---|---|---|
| Content-Type | yes | `application/json` |

### Body

| Field | Type | Required | Constraints | Default |
|---|---|---|---|---|
| first_number | number | yes | finite real | — |
| operator | string | yes | one of `+`, `-`, `*`, `/` | — |
| second_number | number | yes | finite real; if operator is `/`, must not be `0` | — |

Schema source: `api/schemas.py` `[planned]`

<a id="responses"></a>
## Responses

### 200 OK
```json
{
  "id": 42,
  "first_number": 6.0,
  "operator": "*",
  "second_number": 7.0,
  "result": 42.0,
  "created_at": "2026-11-14T14:39:50Z"
}
```

### 400 Bad Request
```json
{ "error": { "code": "INVALID_OPERATOR", "message": "operator must be one of + - * /" } }
```
Codes:
- `INVALID_OPERATOR` — `operator` not in `+ - * /`
- `DIVISION_BY_ZERO` — `operator` is `/` and `second_number` is `0`
- `INVALID_NUMBER` — a required field is missing or not a finite number

<a id="side-effects"></a>
## Side effects
1. Insert one row into `calculations` — see [data/calculations.md#write-patterns](../../data/calculations.md#write-patterns).

<a id="implementation"></a>
## Implementation
- Route: `api/routes/calculate.py` `[planned]`
- Arithmetic + validation: `api/operations.py` `[planned]`
- DB insert: `api/db.py` `[planned]`

<a id="test-plan"></a>
## Test plan

| # | Case | Expected |
|---|---|---|
| 1 | `2 + 3` | 200, `result` = 5 |
| 2 | `6 * 7` | 200, `result` = 42 |
| 3 | `10 / 4` | 200, `result` = 2.5 |
| 4 | `7 - 10` | 200, `result` = -3 |
| 5 | `5 / 0` | 400 `DIVISION_BY_ZERO` |
| 6 | operator `%` | 400 `INVALID_OPERATOR` |
| 7 | missing `second_number` | 400 `INVALID_NUMBER` |

<a id="verify"></a>
## Verify

```bash
curl -i -X POST http://localhost:8000/api/calculate -H "Content-Type: application/json" -d '{"first_number":2,"operator":"+","second_number":3}'
```
Expected (not run: needs a running server): HTTP 200, body has `result` = 5 and an integer `id`.
