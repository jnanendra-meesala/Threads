# Operations — overview

> **Sources** — interview Q3, Q4, Q7
> **Status** — [spec]
> **Page-size budget** — used 30 / 200 lines

<a id="environments"></a>
## Environments

| Environment | Purpose | Base URL |
|---|---|---|
| local | development | `http://localhost:8000` |

Only local for MVP (interview Q8).

<a id="deploy"></a>
## Deploy summary
Monolith with two dev processes: the FastAPI API (see [env-vars.md](env-vars.md)) and a static React build served by the frontend dev server. No production deploy is specced yet.

<a id="runbooks"></a>
## Runbooks
- [reset-db.md](runbooks/reset-db.md)

<a id="verify"></a>
## Verify

```bash
git grep --untracked -n "DATABASE_PATH" -- docs/wiki ":(exclude)docs/wiki/ops/00-overview.md"
```
Expected (not run: not a Git repository yet): the variable's row in [env-vars.md](env-vars.md).
