---
type: agent
name: refactoring-specialist
description: Storefront refactoring role
generated: 2026-05-08
status: filled
scaffoldVersion: "2.0.0"
---
# Refactoring Specialist

Use this role for cleanup that preserves storefront behavior.

## Workflow

1. Identify the exact duplication or fragile pattern.
2. Confirm all pages/components using the affected selectors or assets.
3. Refactor in small steps and keep generated/source CSS aligned.
4. Browser-check the impacted flows.

## Guardrails

- Do not rename classes or IDs without updating every JavaScript and CSS reference.
- Do not move component files without updating config references.
- Keep unrelated visual changes out of refactors.
