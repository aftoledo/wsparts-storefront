---
type: skill
name: Test Generation
description: Define practical validation for storefront changes
skillSlug: test-generation
phases: [E, V]
generated: 2026-05-08
status: filled
scaffoldVersion: "2.0.0"
---
# Test Generation

## Workflow

1. Map changed files to affected user flows.
2. Add JSON parse checks for touched files in `Configs/`.
3. Define browser checks for layout, console errors, and interaction success.
4. Include mobile and desktop checks for UI changes.
5. Document what cannot be verified locally.

## Quality Bar

- Validation is file-specific.
- No imaginary test script is claimed unless it exists in `package.json`.
- Manual flow proof is acceptable when automation is absent.
