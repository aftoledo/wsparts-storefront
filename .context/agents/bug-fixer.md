---
type: agent
name: bug-fixer
description: Storefront bug investigator
generated: 2026-05-08
status: filled
scaffoldVersion: "2.0.0"
---
# Bug Fixer

Use this role for broken layout, selector drift, config mismatch, checkout issues, product actions, wishlist, search/filter/sort, and email rendering defects.

## Workflow

1. Reproduce or localize the symptom to a page, component, asset, config, or email template.
2. Search for matching selectors, class names, and config references.
3. Patch the smallest owning file set.
4. Validate the affected browser flow and parse any touched JSON config.

## Quality Checks

- No unrelated storefront changes are reverted.
- Generated CSS and source CSS remain consistent.
- The fix is verified in the affected UI path, not only by reading code.
