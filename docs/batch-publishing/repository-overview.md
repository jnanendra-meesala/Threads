# Repository Overview

This repository is a clone of `jnanendra-meesala/Threads` (default branch `master`). It
contains a single top-level directory, [`Calculator/Proposal/`](../../Calculator/Proposal/),
which holds the entire project. This page describes the actual structure and contents of that
directory as they exist in this checkout.

## Top-level layout

- [`Calculator/Proposal/`](../../Calculator/Proposal/) — the only project directory in the
  repository. Everything below lives under this path.

## `Calculator/Proposal/` contents

### `api/` — FastAPI backend

- [`api/main.py`](../../Calculator/Proposal/api/main.py) — FastAPI app entry point. Creates the
  `simple-calculator` app, runs `init_db()` on startup, configures CORS for the Vite dev server
  (`http://localhost:5173`), registers the `calculate` and `history` routers, and maps
  `RequestValidationError` to a JSON error response.
- [`api/db.py`](../../Calculator/Proposal/api/db.py) — raw `sqlite3` access layer. Creates the
  `calculations` table and provides `insert_calculation`, `list_calculations`,
  `delete_calculation`, and `clear_calculations`.
- [`api/operations.py`](../../Calculator/Proposal/api/operations.py) — arithmetic helper.
  Defines `OPERATORS = ("+", "-", "*", "/")` and a `perform` function.
- [`api/schemas.py`](../../Calculator/Proposal/api/schemas.py) — Pydantic request schema
  (`CalculateRequest` with `first_number`, `operator`, `second_number`).
- [`api/routes/calculate.py`](../../Calculator/Proposal/api/routes/calculate.py) —
  `POST /api/calculate`: validates the operator and division-by-zero, performs the calculation,
  and stores the result.
- [`api/routes/history.py`](../../Calculator/Proposal/api/routes/history.py) — history endpoints:
  `GET /api/history`, `DELETE /api/history/{calc_id}`, and `DELETE /api/history`.
- [`api/requirements.txt`](../../Calculator/Proposal/api/requirements.txt) — Python dependencies:
  `fastapi`, `uvicorn`, `pydantic`.
- [`api/__init__.py`](../../Calculator/Proposal/api/__init__.py) — package marker.
- [`api/routes/__init__.py`](../../Calculator/Proposal/api/routes/__init__.py) — package marker.

### `frontend/` — React + Vite

- [`frontend/index.html`](../../Calculator/Proposal/frontend/index.html) — HTML entry point that
  mounts the React root.
- [`frontend/package.json`](../../Calculator/Proposal/frontend/package.json) — package manifest;
  scripts are `dev` (vite), `build` (vite build), and `preview` (vite preview). Dependencies:
  `react`, `react-dom`; dev dependencies: `@vitejs/plugin-react`, `vite`.
- [`frontend/package-lock.json`](../../Calculator/Proposal/frontend/package-lock.json) — lockfile.
- [`frontend/vite.config.js`](../../Calculator/Proposal/frontend/vite.config.js) — Vite config with
  the React plugin, dev-server port `5173`, and a `/api` proxy to the backend (default
  `http://localhost:8000`, overridable via `VITE_BACKEND_URL`).
- [`frontend/src/App.jsx`](../../Calculator/Proposal/frontend/src/App.jsx) — root component that
  composes the `Calculator` and `History` components.
- [`frontend/src/api.js`](../../Calculator/Proposal/frontend/src/api.js) — API client for the
  backend (`calculate`, `getHistory`, `deleteCalculation`, `clearHistory`).
- [`frontend/src/main.jsx`](../../Calculator/Proposal/frontend/src/main.jsx) — ReactDOM bootstrap.
- [`frontend/src/index.css`](../../Calculator/Proposal/frontend/src/index.css) — global styles.
- [`frontend/src/components/Calculator.jsx`](../../Calculator/Proposal/frontend/src/components/Calculator.jsx) —
  calculator keypad and display component.
- [`frontend/src/components/History.jsx`](../../Calculator/Proposal/frontend/src/components/History.jsx) —
  calculation history component with delete and clear-all.

### `docs/` — deeplink wiki and operational notes

- [`docs/wiki/`](../../Calculator/Proposal/docs/wiki/) — the deeplink wiki. Its routing index is
  [`docs/wiki/00-INDEX.md`](../../Calculator/Proposal/docs/wiki/00-INDEX.md), which links to the
  sections below.
  - [`docs/wiki/api/`](../../Calculator/Proposal/docs/wiki/api/) — API pages (overview, and
    per-endpoint pages under `calculate/` and `history/`).
  - [`docs/wiki/architecture/01-modules.md`](../../Calculator/Proposal/docs/wiki/architecture/01-modules.md) —
    internal module map.
  - [`docs/wiki/auth/`](../../Calculator/Proposal/docs/wiki/auth/) — auth pages (overview, roles,
    scopes).
  - [`docs/wiki/data/`](../../Calculator/Proposal/docs/wiki/data/) — data pages (overview and
    `calculations.md`).
  - [`docs/wiki/glossary.md`](../../Calculator/Proposal/docs/wiki/glossary.md) — project glossary.
  - [`docs/wiki/integrations/`](../../Calculator/Proposal/docs/wiki/integrations/) — integration
    pages.
  - [`docs/wiki/ops/`](../../Calculator/Proposal/docs/wiki/ops/) — ops pages (overview,
    `env-vars.md`, and runbooks under `runbooks/`).
  - [`docs/wiki/test/`](../../Calculator/Proposal/docs/wiki/test/) — test pages (overview and
    `fixtures.md`).
  - [`docs/wiki/ui/`](../../Calculator/Proposal/docs/wiki/ui/) — UI pages (overview and
    `calculator.md`).
- [`docs/log.md`](../../Calculator/Proposal/docs/log.md) — append-only operations log.
- [`docs/roadmap.md`](../../Calculator/Proposal/docs/roadmap.md) — planned-but-not-specced work.
- [`docs/sources/`](../../Calculator/Proposal/docs/sources/) — append-only source material
  (`external/` and `transcripts/`).

### Other files

- [`Documentation/project_documentation.md`](../../Calculator/Proposal/Documentation/project_documentation.md) —
  the project specification (overview, technologies, features, architecture, database design, and
  API endpoints).
- [`.gitignore`](../../Calculator/Proposal/.gitignore) — ignores for Python, SQLite, Node, and
  environment files.
- [`.nexgilerules`](../../Calculator/Proposal/.nexgilerules) — the repository's operating rules for
  Nexgile Code (what to read before a task, hard rules, verification, and phase tags).
