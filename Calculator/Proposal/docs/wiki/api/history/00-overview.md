# Resource: history

> **Sources** — interview Q15; spec `Documentation/project_documentation.md` §6
> **Status** — [spec]
> **Page-size budget** — used 26 / 200 lines

<a id="purpose"></a>
## Purpose
Read and delete the stored calculation history.

<a id="endpoints"></a>
## Endpoints

| Method | Path | Action | Page |
|---|---|---|---|
| GET | /api/history | list history | [list.md](list.md) |
| DELETE | /api/history/{id} | delete one | [delete-by-id.md](delete-by-id.md) |
| DELETE | /api/history | clear all | [clear.md](clear.md) |

<a id="verify"></a>
## Verify

```bash
git grep --untracked -n "GET /api/history" -- docs/wiki ":(exclude)docs/wiki/api/history/00-overview.md"
```
Expected (not run: not a Git repository yet): the list endpoint's page `list.md`.
