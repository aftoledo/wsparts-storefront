---
type: skill
name: Commit Message
description: Generate Conventional Commit messages for storefront changes
skillSlug: commit-message
phases: [E, C]
generated: 2026-05-08
status: filled
scaffoldVersion: "2.0.0"
---
# Commit Message

## Workflow

1. Inspect changed files and identify the dominant storefront area.
2. Use Conventional Commits.
3. Prefer scopes such as `checkout`, `components`, `assets`, `emails`, `configs`, `docs`, or `tooling`.
4. Keep the subject imperative and under one line.

## Examples

```text
fix(checkout): align branded footer links
docs(dotcontext): refresh storefront playbooks
chore(tooling): document local preview helpers
```
