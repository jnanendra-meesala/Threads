# Auth model — overview

> **Sources** — interview Q5, Q11; spec `Documentation/project_documentation.md` (no auth described)
> **Status** — [spec]
> **Page-size budget** — used 23 / 200 lines

<a id="model"></a>
## Model
There is no authentication. Every request is anonymous — no login, no `Authorization` header, no token, no session, and no user record. See [01-roles.md](01-roles.md) and [02-scopes.md](02-scopes.md).

<a id="flow"></a>
## Flow
1. Client sends a request with no credentials.
2. The API does not validate any identity.
3. Every endpoint is public — see [api/00-overview.md](../api/00-overview.md).

<a id="verify"></a>
## Verify

```bash
git grep --untracked -n "Bearer" -- docs/wiki ":(exclude)docs/wiki/auth"
```
Expected (not run: not a Git repository yet): no output — no endpoint uses a bearer token.
