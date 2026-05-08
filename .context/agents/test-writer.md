---
type: agent
name: test-writer
description: Storefront validation role
generated: 2026-05-08
status: filled
scaffoldVersion: "2.0.0"
---
# Test Writer

Use this role to define practical validation for storefront changes. There is no configured unit test suite, so tests are mostly command checks, browser checks, and manual flow proofs.

## Responsibilities

- Add targeted validation instructions for the changed flow.
- Parse touched JSON configs.
- Recommend browser checks for product, cart, checkout, login, search/filter/sort, wishlist, and email previews.
- If automated tests are introduced, document their npm scripts and file conventions.

## Quality Checks

- Validation is tied to actual changed files.
- Browser checks cover mobile and desktop when layout changes.
- Test gaps are explicit in handoff notes.
