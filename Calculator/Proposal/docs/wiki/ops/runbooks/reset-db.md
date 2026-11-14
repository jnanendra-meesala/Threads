# Runbook: reset the database

> **Sources** — interview Q6; [data/calculations.md](../../data/calculations.md)
> **Status** — [spec]
> **Page-size budget** — used 31 / 200 lines

<a id="when-to-use-this"></a>
## When to use this
You want to wipe all calculation history and start from an empty database during development.

<a id="pre-checks"></a>
## Pre-checks
- [ ] Stop the API process so it releases the SQLite file.

<a id="steps"></a>
## Steps
1. **Stop the API** — Ctrl-C the dev server — expected: process exits.
2. **Delete the DB file** — `rm calculator.db` — expected: file removed (history gone).
3. **Restart the API** — start the API dev server — expected: `api/db.py` `[planned]` re-creates the `calculations` table on startup.

<a id="rollback"></a>
## Rollback if step 2 fails
Restore `calculator.db` from a backup; there is no other rollback.

<a id="verify"></a>
## Verify recovery

```bash
curl http://localhost:8000/api/history
```
Expected (not run: needs a running server): `{"calculations": []}`.
