# Integrations — overview

> **Sources** — interview Q4; spec `Documentation/project_documentation.md` §2
> **Status** — [spec]
> **Page-size budget** — used 21 / 200 lines

<a id="dependencies"></a>
## Third-party dependencies
None. The app has no external services — no queues, no email, no third-party APIs. The only data store is local SQLite (see [data/00-overview.md](../data/00-overview.md)).

| Integration | Purpose | Auth | Page |
|---|---|---|---|
| *(none)* | — | — | — |

<a id="verify"></a>
## Verify

```bash
git grep --untracked -n "https://" -- docs/wiki ":(exclude)docs/wiki/integrations/00-overview.md"
```
Expected (not run: not a Git repository yet): no output — no external URLs are cited.
