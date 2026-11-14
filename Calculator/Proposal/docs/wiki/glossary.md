# Glossary

> **Sources** — interview Q1–Q4, Q13; spec `Documentation/project_documentation.md` §1–§6
> **Status** — [spec]
> **Page-size budget** — used 28 / 200 lines

<a id="project"></a>
**simple-calculator** — a web app that performs basic arithmetic and keeps a persistent calculation history. Stack: React + Python (FastAPI) + SQLite. Architecture: monolith. See [data/00-overview.md](data/00-overview.md).

<a id="calculation"></a>
**Calculation** — one stored arithmetic operation: two operands, an operator, and a computed result. Stored in the `calculations` table — see [data/calculations.md](data/calculations.md).

<a id="history"></a>
**History** — the ordered list of stored calculations, newest first. Read via [api/history/list.md](api/history/list.md).

<a id="operator"></a>
**Operator** — one of the four arithmetic symbols `+`, `-`, `*`, `/`. Constrained on the `calculations.operator` column — see [data/calculations.md#invariants](data/calculations.md#invariants).

<a id="operand"></a>
**Operand** — one of the two input numbers to an operation (`first_number`, `second_number`), stored as REAL — see [data/calculations.md#columns](data/calculations.md#columns).

<a id="verify"></a>
## Verify

```bash
git grep --untracked -n "operator" -- docs/wiki ":(exclude)docs/wiki/glossary.md"
```
Expected (not run: not a Git repository yet): every page that uses the term `operator`, with this page excluded.
