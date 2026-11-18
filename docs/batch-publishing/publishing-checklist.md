# Batch Publishing — Review Checklist

Checklist for reviewing the `/batch` GitHub publishing test.

## Repository

- [ ] Origin is `https://github.com/jnanendra-meesala/Threads` (the correct repository, not a fork or a lookalike).

## Branch isolation

- [ ] Each worker runs on its own fresh branch (for example `batch/github-publishing-checklist`), never on `master`.
- [ ] The branch was created from the base commit and does not reuse or depend on another worker's branch.

## Diff scope

- [ ] Documentation-only change: only the assigned `.md` file was added.
- [ ] No existing project files were modified, deleted, or renamed.
- [ ] No dependencies were installed and no application code was changed.

## Pull request

- [ ] Exactly one draft pull request was opened.
- [ ] The PR targets `master`.
- [ ] The PR title is prefixed `[Batch QA]`.
- [ ] The PR body states that this is a documentation-only publishing test.

## No merge

- [ ] The PR is left open and in draft state — not merged.
- [ ] Nothing was pushed to `master`.
