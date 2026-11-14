# UI — overview

> **Sources** — interview Q3, Q4, Q12, Q17; spec `Documentation/project_documentation.md` §3
> **Status** — [spec]
> **Page-size budget** — used 25 / 200 lines

<a id="routing"></a>
## Routing
Single page at `/` — the calculator (see [calculator.md](calculator.md)). No client-side routes beyond `/`.

<a id="layout"></a>
## Layout shell
- `frontend/src/App.js` `[planned]` mounts the calculator and the history panel.

<a id="branding"></a>
## Branding
None yet (interview Q17). Default styling only.

<a id="verify"></a>
## Verify

```bash
git grep --untracked -n "frontend/src" -- docs/wiki/ui ":(exclude)docs/wiki/ui/00-overview.md"
```
Expected (not run: not a Git repository yet): the component paths referenced from the UI pages.
