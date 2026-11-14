# Internal modules

> **Sources** — interview Q3, Q4, Q7
> **Status** — [spec]
> **Page-size budget** — used 27 / 300 lines

<a id="modules"></a>
## Modules

| Module | Path | Role | Exposes |
|---|---|---|---|
| api | `api/` | FastAPI backend: routes, validation, arithmetic, SQLite access | REST endpoints under `/api` |
| frontend | `frontend/` | React SPA: calculator UI and history panel | the calculator screen at `/` |

<a id="boundaries"></a>
## Boundaries
- `frontend` calls `api` over HTTP only (JSON); it never touches SQLite directly.
- `api` is the only writer of the `calculations` table — see [data/calculations.md](../data/calculations.md).
- Arithmetic logic lives in `api` only (see [api/calculate/post.md](../api/calculate/post.md)); the frontend sends raw operands + operator and displays the returned `result`.

<a id="verify"></a>
## Verify

```bash
git grep --untracked -n "api/routes" -- docs/wiki ":(exclude)docs/wiki/architecture/01-modules.md"
```
Expected (not run: not a Git repository yet): the route paths referenced from the API pages.
