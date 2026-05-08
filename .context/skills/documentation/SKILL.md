---
type: skill
name: Documentation
description: Maintain DotContext docs for this storefront repo
skillSlug: documentation
phases: [P, C]
generated: 2026-05-08
status: filled
scaffoldVersion: "2.0.0"
---
# Documentation

## Workflow

1. Check whether the change affects architecture, tooling, validation, or repeated agent behavior.
2. Update the smallest relevant file under `.context/docs`, `.context/agents`, or `.context/skills`.
3. Use real paths and commands from this repo.
4. Remove stale placeholders and generic TypeScript/backend advice.

## Quality Bar

- Current `package.json` capabilities are accurate.
- Local/generated artifacts are labeled.
- References point to actual files.
