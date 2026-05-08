---
type: doc
name: testing-strategy
description: Validation strategy for storefront changes
category: testing
generated: 2026-05-08
status: filled
scaffoldVersion: "2.0.0"
---
# Testing Strategy

There is no configured Jest/Vitest suite in the current `package.json`. Validation is therefore a mix of static inspection, local storefront preview, browser checks, and targeted manual regression of affected flows.

## Test Types

- Static checks: verify JSON validity for `Configs/*.json`, broken file references, and obvious HTML/CSS/JS syntax errors.
- Browser checks: open the affected page or preview artifact and confirm layout, interactions, console errors, and responsive behavior.
- Flow checks: validate product add-to-cart, wishlist, search/sort/filter, checkout, login, email preview, or regional/shipping flow depending on the files changed.
- Build checks: if Tailwind input/output files are changed, regenerate the matching output CSS with the repo's Tailwind CLI workflow.

## Suggested Commands

- `npm install` to restore dependencies.
- `npx tailwindcss --help` to confirm Tailwind CLI availability.
- `node -e "JSON.parse(require('fs').readFileSync('Configs/components.json','utf8'))"` to validate JSON when config changes.

## Quality Gates

- No broken config references.
- No console errors in affected browser flows.
- Generated CSS matches source CSS changes.
- Temporary files in `tmp/` stay uncommitted unless explicitly needed.
- Changes to shared components are checked on every page that uses them.

## Related Resources

- [development-workflow.md](./development-workflow.md)
- [tooling.md](./tooling.md)
