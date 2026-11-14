# Test strategy

> **Sources** — interview Q16, Q18; spec `Documentation/project_documentation.md` §8
> **Status** — [spec]
> **Page-size budget** — used 47 / 200 lines

<a id="layers"></a>
## Layers

| Layer | What it tests | Tool | Speed |
|---|---|---|---|
| unit | arithmetic + validation logic | `[GAP-TEST-01]` | ms |
| integration | API + SQLite | `[GAP-TEST-01]` | seconds |
| e2e | full stack via browser | `[GAP-TEST-01]` | tens of seconds |

Test tooling is not specified in the spec — `[GAP-TEST-01: test framework (pytest/Jest/Playwright) — developer decides]`.

<a id="what-to-verify"></a>
## What to verify (from spec §8)
- All four operations (`+ − × ÷`) are correct.
- Decimal and negative operands work.
- Division by zero shows an error.
- Results are saved in SQLite.
- History persists across refresh.
- Delete-one and clear-all work.
- Frontend and backend communicate.

<a id="fixtures"></a>
## Fixtures
See [fixtures.md](fixtures.md).

<a id="acceptance-targets"></a>
## Acceptance targets

| Target | Source | How it is measured |
|---|---|---|
| All §8 behaviors pass | spec §8 | the layer commands above |
| Success metric | `[GAP-BIZ-01]` | — |
| Performance target | `[GAP-OPS-01]` | — |

<a id="verify"></a>
## Verify

```bash
git grep --untracked -n "division by zero" -- Documentation
```
Expected (not run: not a Git repository yet): the spec document's §3 and §8 mention of the error.
