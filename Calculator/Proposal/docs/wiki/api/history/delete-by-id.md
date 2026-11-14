# DELETE /api/history/{id} — delete one calculation

> **Sources** — interview Q15; spec `Documentation/project_documentation.md` §6; [data/calculations.md](../../data/calculations.md)
> **Status** — [spec]
> **Page-size budget** — used 63 / 300 lines

<a id="purpose"></a>
## Purpose
Delete the single calculation with the given id.

<a id="auth"></a>
## Auth
None — public endpoint.

<a id="request"></a>
## Request

### Path parameters

| Param | Type | Constraints |
|---|---|---|
| id | integer | positive; must exist |

### Headers
None.

### Body
None.

<a id="responses"></a>
## Responses

### 204 No Content
Deleted. No body.

### 404 Not Found
```json
{ "error": { "code": "NOT_FOUND", "message": "no calculation with id 999" } }
```

<a id="side-effects"></a>
## Side effects
1. Delete the `calculations` row with `id = {id}` — see [data/calculations.md#write-patterns](../../data/calculations.md#write-patterns).

<a id="implementation"></a>
## Implementation
- Route: `api/routes/history.py` `[planned]`

<a id="test-plan"></a>
## Test plan

| # | Case | Expected |
|---|---|---|
| 1 | Existing id | 204, row gone from [list.md](list.md) |
| 2 | Unknown id | 404 `NOT_FOUND` |

<a id="verify"></a>
## Verify

```bash
curl -i -X DELETE http://localhost:8000/api/history/1
```
Expected (not run: needs a running server): HTTP 204 (or 404 if id 1 does not exist).
