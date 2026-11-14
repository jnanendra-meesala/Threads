# GET /api/history — view calculation history

> **Sources** — interview Q15; spec `Documentation/project_documentation.md` §6; [data/calculations.md](../../data/calculations.md)
> **Status** — [spec]
> **Page-size budget** — used 66 / 300 lines

<a id="purpose"></a>
## Purpose
Return all stored calculations, newest first.

<a id="auth"></a>
## Auth
None — public endpoint.

<a id="request"></a>
## Request

### Headers
None.

### Body
None.

### Query
None.

<a id="responses"></a>
## Responses

### 200 OK
```json
{
  "calculations": [
    { "id": 42, "first_number": 6.0, "operator": "*", "second_number": 7.0, "result": 42.0, "created_at": "2026-11-14T14:39:50Z" },
    { "id": 41, "first_number": 2.0, "operator": "+", "second_number": 3.0, "result": 5.0, "created_at": "2026-11-14T14:38:00Z" }
  ]
}
```
- Order: `created_at` DESC (newest first).
- Empty history returns `{"calculations": []}`.

<a id="side-effects"></a>
## Side effects
None (read-only).

<a id="implementation"></a>
## Implementation
- Route: `api/routes/history.py` `[planned]`
- Query: `api/db.py` `[planned]`

<a id="test-plan"></a>
## Test plan

| # | Case | Expected |
|---|---|---|
| 1 | Empty DB | 200, `{"calculations": []}` |
| 2 | Three rows inserted | 200, three items, newest first |
| 3 | History survives refresh | same rows returned again |

<a id="verify"></a>
## Verify

```bash
curl -i http://localhost:8000/api/history
```
Expected (not run: needs a running server): HTTP 200 with a `calculations` array ordered newest first.
