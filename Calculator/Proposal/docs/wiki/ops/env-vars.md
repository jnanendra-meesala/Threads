# Environment variables

> **Sources** — interview Q4, Q6
> **Status** — [spec]
> **Page-size budget** — used 27 / 300 lines

<a id="variables"></a>
## Variables

| Variable | Service | Required | Default | Secret | Read at | Purpose |
|---|---|---|---|---|---|---|
| `DATABASE_PATH` | api | no | `calculator.db` | no | `api/db.py` `[planned]` | SQLite file path |
| `API_PORT` | api | no | `8000` | no | `api/main.py` `[planned]` | HTTP port |
| `API_BASE_URL` | frontend | yes | `http://localhost:8000` | no | `frontend/src/api.js` `[planned]` | API base URL, inlined at build time |

<a id="loading"></a>
## Loading
- `api`: reads `DATABASE_PATH` and `API_PORT` at startup `[planned]`.
- `frontend`: the React build tool inlines `API_BASE_URL` `[planned]`. Toolchain not specified — `[GAP-ARCH-01: React build toolchain (Vite vs Create React App) — developer decides]`.

<a id="verify"></a>
## Verify

```bash
git grep --untracked -n "DATABASE_PATH" -- docs/wiki ":(exclude)docs/wiki/ops/env-vars.md"
```
Expected (not run: not a Git repository yet): [data/calculations.md](../data/calculations.md) (its Verify uses `$DATABASE_PATH`).
