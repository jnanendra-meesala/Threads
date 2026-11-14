# Test fixtures

> **Sources** — interview Q14; spec `Documentation/project_documentation.md` §5
> **Status** — [spec]
> **Page-size budget** — used 30 / 200 lines

<a id="fixtures"></a>
## Canonical calculations

| first_number | operator | second_number | result |
|---|---|---|---|
| 2 | + | 3 | 5 |
| 6 | * | 7 | 42 |
| 10 | / | 4 | 2.5 |
| 7 | - | 10 | -3 |

Referenced from [api/calculate/post.md](../api/calculate/post.md#test-plan) and [test/00-overview.md](00-overview.md).

<a id="edge-cases"></a>
## Edge cases
- `5 / 0` → `DIVISION_BY_ZERO`
- operator `%` → `INVALID_OPERATOR`

<a id="verify"></a>
## Verify

```bash
git grep --untracked -n "2.5" -- docs/wiki ":(exclude)docs/wiki/test/fixtures.md"
```
Expected (not run: not a Git repository yet): the `10 / 4` result in [api/calculate/post.md](../api/calculate/post.md#test-plan).
