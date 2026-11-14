# Bootstrap interview — 2026-11-14

Verbatim answers from Phase 1 of the Spec Bootstrap workflow. This file is the canonical Source for every wiki page that cites `interview Q<N>`. Append-only after creation.

## Q1 — PROJECT_NAME
simple-calculator

## Q2 — ONE_LINE_PURPOSE
simple-calculator is a web app that performs basic arithmetic and keeps a persistent calculation history.

## Q3 — ARCHITECTURE
monolith

## Q4 — PRIMARY_STACK
React + Python (FastAPI) + SQLite

## Q5 — AUTH_MODEL
none-yet

## Q6 — DATABASE / ORM
SQLite / raw sqlite3 (Python stdlib)

## Q7 — DEPLOYABLE_UNITS
frontend, api

## Q8 — ROADMAP_PHASES
MVP (single phase)

## Q9 — EXTERNAL_READERS
no

## Q10 — SPEC_INPUT
Documentation/project_documentation.md (read in full)

## Q11 — USER_ROLES
none — single anonymous user, no auth (spec `Documentation/project_documentation.md` describes no login)

## Q12 — MAIN_WORKFLOWS
perform a calculation → view history → delete one calculation → clear all history (spec §3, §6)

## Q13 — DOMAIN_VOCABULARY
calculation, history, operator (spec §5, §6)

## Q14 — CORE_DATA
calculations table: id, first_number, operator, second_number, result, created_at (spec §5)

## Q15 — KEY_ENDPOINTS_AND_SCREENS
POST /api/calculate, GET /api/history, DELETE /api/history/{id}, DELETE /api/history; calculator UI screen (spec §3, §6)

## Q16 — SUCCESS_METRICS
unknown → [GAP-BIZ-01]

## Q17 — BRANDING
none yet

## Q18 — PERFORMANCE_TARGETS
unknown → [GAP-OPS-01]

## Scope contract (confirmed 2026-11-14)
1. Project: simple-calculator
2. Purpose: simple-calculator is a web app that performs basic arithmetic and keeps a persistent calculation history
3. Architecture: monolith
4. Stack: React + Python (FastAPI) + SQLite
5. Auth: none-yet
6. DB / ORM: SQLite / raw sqlite3
7. Deployables: frontend, api
8. Phases: MVP
9. External readers: no
10. Spec input: Documentation/project_documentation.md
11. Roles: none (single anonymous user)
12. Workflows: perform calculation → view history → delete one → clear all
13. Vocabulary: calculation, history, operator
14. Data: calculations (id, first_number, operator, second_number, result, created_at)
15. Endpoints/screens: POST /api/calculate · GET /api/history · DELETE /api/history/{id} · DELETE /api/history · calculator UI
16. Success metrics: unknown → [GAP-BIZ-01]
17. Branding: none yet
18. Performance: unknown → [GAP-OPS-01]

## External URL allowlist
External URLs cited anywhere in the wiki must appear here. Add only URLs the person gave you or that their spec document contains; the audit rejects any wiki link to a URL not in this list.

(none)
