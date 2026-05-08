---
type: skill
name: PR Review
description: Review pull requests for storefront source and validation completeness
skillSlug: pr-review
phases: [R, V]
generated: 2026-05-08
status: filled
scaffoldVersion: "2.0.0"
---
# PR Review

## Workflow

1. Read the changed file list and PR intent.
2. Check whether templates, assets, and configs changed together where required.
3. Look for accidental `tmp/` artifacts, local certs, generated zips, or stale output CSS.
4. Verify validation evidence covers the changed user flow.

## Quality Bar

- Findings first, with severity and file references.
- Browser validation gaps are explicit.
- Conventional Commit scope is checked when commit advice is requested.
