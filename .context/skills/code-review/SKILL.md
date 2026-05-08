---
type: skill
name: Code Review
description: Review storefront changes for regressions and source/config drift
skillSlug: code-review
phases: [R, V]
generated: 2026-05-08
status: filled
scaffoldVersion: "2.0.0"
---
# Code Review

## Workflow

1. Inspect `git diff --stat` and changed files.
2. Group findings by storefront flow.
3. Check selector, CSS, config, and generated artifact consistency.
4. Lead with bugs and regressions, not summaries.
5. Mention missing browser validation or JSON checks.

## Quality Bar

- File/line references for findings.
- No style-only commentary unless it can cause user-facing breakage.
- Separate source changes from generated/local artifacts.
