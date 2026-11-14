# API — overview

> **Sources** — interview Q4, Q15; spec `Documentation/project_documentation.md` §6
> **Status** — [spec]
> **Page-size budget** — used 59 / 200 lines

<a id="base"></a>
## Base URL and prefix
- Dev base URL: `http://localhost:8000`
- All endpoints under the `/api` prefix.
- Media type: `application/json`.

<a id="headers"></a>
## Common headers

| Header | Required | Notes |
|---|---|---|
| Content-Type | only on POST | `application/json` |

No `Authorization` header — there is no auth (see [auth/00-overview.md](../auth/00-overview.md)).

<a id="envelope"></a>
## Error envelope
All error responses use the same shape:

```json
{ "error": { "code": "INVALID_OPERATOR", "message": "operator must be one of + - * /" } }
```

<a id="ids"></a>
## IDs and pagination
- Calculation `id` is a positive integer (`INTEGER PRIMARY KEY`).
- No pagination: [history/list.md](history/list.md) returns the full history, newest first.

<a id="status-codes"></a>
## Status codes

| Code | Meaning |
|---|---|
| 200 | success with a body |
| 204 | success, no body (delete) |
| 400 | invalid request (bad operator, division by zero, bad operand) |
| 404 | id not found |

<a id="resources"></a>
## Resources

| Resource | Endpoints | Overview |
|---|---|---|
| calculate | POST /api/calculate | [calculate/00-overview.md](calculate/00-overview.md) |
| history | GET /api/history, DELETE /api/history/{id}, DELETE /api/history | [history/00-overview.md](history/00-overview.md) |

<a id="verify"></a>
## Verify

```bash
git grep --untracked -n "Required scope" -- docs/wiki/api ":(exclude)docs/wiki/api/00-overview.md"
```
Expected (not run: not a Git repository yet): no output — no endpoint declares a required scope.
