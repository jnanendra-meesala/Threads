# Route: / — Calculator

> **Sources** — interview Q12, Q15; spec `Documentation/project_documentation.md` §3, §4; [api/calculate/post.md](../api/calculate/post.md); `frontend/src/components/Calculator.jsx:11`, `frontend/src/components/History.jsx:16`
> **Status** — [spec]
> **Page-size budget** — used 57 / 300 lines

<a id="purpose"></a>
## Purpose
Let the user perform arithmetic and manage their calculation history.

<a id="route"></a>
## Route
- Path: `/`
- File: `frontend/src/components/Calculator.jsx` `[planned]`
- Auth required: no.

<a id="state"></a>
## Local state

| Name | Type | Initial | Updated by |
|---|---|---|---|
| display | string | "0" | button presses, API result |
| history | array | [] | API responses |

<a id="behavior"></a>
## Behavior
1. User enters operands and an operator with the keypad (digits, `.`, `+ - × ÷`).
2. **Clear** resets the current input; **Delete** removes the last character.
3. On **=**: POST `/api/calculate` per [api/calculate/post.md](../api/calculate/post.md).
4. On 200: show the returned `result`; refresh history via [api/history/list.md](../api/history/list.md).
5. On 400 `DIVISION_BY_ZERO`: show "Cannot divide by zero"; do not add to history.
6. History panel: delete one via [api/history/delete-by-id.md](../api/history/delete-by-id.md), clear all via [api/history/clear.md](../api/history/clear.md).

<a id="components"></a>
## Components
- `Calculator.jsx` — keypad + display `[planned]`
- `History.jsx` — history list + delete/clear `[planned]`
- `api.js` — fetch wrapper for the four endpoints `[planned]`

<a id="test-plan"></a>
## Test plan

| # | Case | Expected |
|---|---|---|
| 1 | Press `2 + 3 =` | display shows `5`, history shows the row |
| 2 | Press `5 / 0 =` | error shown, no row added |
| 3 | Refresh page | history still present |
| 4 | Delete one row | row disappears, others remain |
| 5 | Clear all | history empty |

<a id="verify"></a>
## Verify

```bash
git grep --untracked -n "DIVISION_BY_ZERO" -- docs/wiki ":(exclude)docs/wiki/ui/calculator.md"
```
Expected (not run: not a Git repository yet): the error code in [api/calculate/post.md](../api/calculate/post.md) and here.
