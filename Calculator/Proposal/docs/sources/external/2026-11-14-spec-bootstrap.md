# Spec Bootstrap workflow (archived 2026-11-14)

This file records the workflow that generated the `docs/wiki/` scaffold, so future contributors know what rules the wiki follows. Abridged archival copy of the Greenfield Documentation Bootstrap workflow.

## Ground rules
- This mode writes only: `docs/wiki/**/*.md`, `docs/log.md`, `docs/roadmap.md`, dated files in `docs/sources/transcripts|external|decisions|archive/`, and `.nexgilerules` at the project root.
- Existing documents are read-only inputs; never edit them.
- Answers come from the person, never invented.

## The three properties (every page must satisfy all three)
1. **Concrete** — schemas as schemas, endpoints as endpoints, types as types; no vague verbs.
2. **Linkable** — exact deeplinks (`page.md#anchor` or `path:line`); page-size caps (300, and 150/200 for overviews, catalogs, glossary, roles, scopes, fixtures, runbooks); no duplicated facts.
3. **Verifiable** — every page (except `docs/wiki/00-INDEX.md`) ends with a `## Verify` block containing one command, plus an `Expected:` line from actual output (or `Expected (not run: <reason>):`).

## Provenance header (top of every page)
```
> **Sources** — …
> **Status** — [spec] | [code] | [drift]
> **Page-size budget** — used N / cap lines
```

## Generation order (bottom-up)
glossary → data → auth → events (skip if not event-driven) → API → service/module map → UI → integrations → operations → test strategy.

## Forbidden patterns (automatic rejection)
`handles`, `manages`, `supports`, `deals with`, "see the X docs", TODO/TBD/FIXME without a GAP ID, vague future tense, external URLs not in the transcript allowlist, values nobody gave (use `[GAP-XX-NN]`).

## Page anatomy
Exactly one H1; every H2 preceded by `<a id="kebab-case"></a>`; a `## Verify` block on every page except the index.

## The nine audits (run on the whole wiki)
1. Deeplink — every link/path resolves (or is `[planned]`).
2. Page size — no page exceeds its cap.
3. Orphan — every page linked from ≥1 other page or the index.
4. Forbidden patterns — none, unless tagged with a well-formed `[GAP-XX-NN]`.
5. Provenance — all three header lines present in the first 12 lines.
6. Anatomy — one H1, anchored H2s, Verify block.
7. Operational files — `.nexgilerules`, `docs/log.md` (`[bootstrap]` entry), `docs/roadmap.md`, the workflow archive, and the interview transcript all exist.
8. Interview citations — every `interview Q<N>` resolves to a `## Q<N>` heading in the transcript.
9. Microservices structure — skipped (this is a monolith).

## Deeplink format rules
Relative links with explicit anchors; code references as `path:line`; `[planned]` on paths that don't exist yet; no bare URLs.

## Hand-off
Report the page count, list open GAPs, and remind the person that nothing is committed — they review and commit `docs/` and `.nexgilerules`. Spec Sync tracks code changes from the commit recorded in `docs/log.md` (`none` means it will ask where to start).
