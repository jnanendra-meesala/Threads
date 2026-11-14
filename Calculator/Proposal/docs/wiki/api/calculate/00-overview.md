# Resource: calculate

> **Sources** — interview Q15; spec `Documentation/project_documentation.md` §6
> **Status** — [spec]
> **Page-size budget** — used 24 / 200 lines

<a id="purpose"></a>
## Purpose
The compute entry point: validate two operands and an operator, perform the arithmetic, save the result to history, and return it.

<a id="endpoints"></a>
## Endpoints

| Method | Path | Action | Page |
|---|---|---|---|
| POST | /api/calculate | perform + save a calculation | [post.md](post.md) |

<a id="verify"></a>
## Verify

```bash
git grep --untracked -n "POST /api/calculate" -- docs/wiki ":(exclude)docs/wiki/api/calculate/00-overview.md"
```
Expected (not run: not a Git repository yet): the endpoint's page `post.md`.
