# Roles

> **Sources** — interview Q11; spec `Documentation/project_documentation.md` (no roles described)
> **Status** — [spec]
> **Page-size budget** — used 22 / 200 lines

<a id="roles"></a>
## Roles

| Role | May do | May not do |
|---|---|---|
| anonymous | everything — all four arithmetic operations, view history, delete one, clear all | nothing (no restriction exists) |

There is exactly one principal: an unauthenticated "anonymous" user. There are no accounts, so there are no other roles. See [auth/00-overview.md](00-overview.md).

<a id="verify"></a>
## Verify

```bash
git grep --untracked -n "anonymous" -- docs/wiki ":(exclude)docs/wiki/auth"
```
Expected (not run: not a Git repository yet): no output — no page assigns any other role.
