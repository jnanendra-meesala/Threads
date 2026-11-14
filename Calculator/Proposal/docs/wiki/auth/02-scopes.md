# Scope catalog

> **Sources** — interview Q5, Q11
> **Status** — [spec]
> **Page-size budget** — used 24 / 200 lines

There are no scopes. No auth means no permission strings; no endpoint declares a required scope. A scope catalog is empty by design.

<a id="scopes"></a>
## Scopes

| Scope | Grants | Held by roles |
|---|---|---|
| *(none)* | *(n/a)* | *(n/a)* |

Endpoints that require a scope: none — see [api/00-overview.md](../api/00-overview.md).

<a id="verify"></a>
## Verify

```bash
git grep --untracked -n "scope" -- docs/wiki ":(exclude)docs/wiki/auth/02-scopes.md"
```
Expected (not run: not a Git repository yet): no output — no endpoint declares a required scope.
