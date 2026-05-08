---
type: doc
name: development-workflow
description: Day-to-day engineering process for storefront changes
category: workflow
generated: 2026-05-08
status: filled
scaffoldVersion: "2.0.0"
---
# Development Workflow

Work in small storefront slices: identify the page or component, inspect matching CSS/JS/config references, change the minimum required files, then preview the affected flow.

## Local Commands

- Install dependencies: `npm install`
- Tailwind CLI is available through the package dependencies.
- Local storefront helpers: `start-dev.bat`, `start-dev.sh`, and `tmp/run-storefront-local.ps1`
- If scripts are added later, update `package.json` and this document.

## Branching And Reviews

Use feature or fix branches when publishing changes. Follow Conventional Commits, for example `fix(checkout): align branded footer links`. Keep generated or extracted artifacts out of commits unless they are required source files.

## Daily Checklist

- Check `git status --short` before editing; this repo often has active storefront work in progress.
- Locate the source file before changing generated output CSS or exported HTML.
- Update `Configs/components.json` or `Configs/emails.json` when adding, renaming, or replacing referenced templates.
- For shared components, inspect all pages that include them.
- Keep `.context/` docs current when architecture, tooling, or repo conventions change.

## Related Resources

- [testing-strategy.md](./testing-strategy.md)
- [tooling.md](./tooling.md)
