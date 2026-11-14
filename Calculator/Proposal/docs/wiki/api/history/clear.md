# DELETE /api/history — clear all history

> **Sources** — interview Q15; spec `Documentation/project_documentation.md` §6; [data/calculations.md](../../data/calculations.md)
> **Status** — [spec]
> **Page-size budget** — used 47 / 300 lines

<a id="purpose"></a>
## Purpose
Delete every stored calculation.

<a id="auth"></a>
## Auth
None — public endpoint.

<a id="request"></a>
## Request
None (no headers, no body).

<a id="responses"></a>
## Responses

### 204 No Content
All rows deleted. No body.

<a id="side-effects"></a>
## Side effects
1. Delete every row in `calculations` — see [data/calculations.md#write-patterns](../../data/calculations.md#write-patterns).

<a id="implementation"></a>
## Implementation
- Route: `api/routes/history.py` `[planned]`

<a id="test-plan"></a>
## Test plan

| # | Case | Expected |
|---|---|---|
| 1 | Several rows present | 204, then [list.md](list.md) returns `[]` |
| 2 | Empty history | 204, no error |

<a id="verify"></a>
## Verify

```bash
curl -i -X DELETE http://localhost:8000/api/history
```
Expected (not run: needs a running server): HTTP 204.
