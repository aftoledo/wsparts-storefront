---
type: doc
name: tooling
description: Local tools and commands used by this storefront repository
category: tooling
generated: 2026-05-08
status: filled
scaffoldVersion: "2.0.0"
---
# Tooling

## Node And Tailwind

`package.json` currently declares `tailwindcss` and `@tailwindcss/cli`. It does not currently define `build`, `test`, or `dev` scripts. Use direct `npx tailwindcss ...` commands or add scripts deliberately when the workflow is standardized.

## Storefront Preview

- `fbits.storefront.exe` is the local storefront helper executable.
- `start-dev.bat` and `start-dev.sh` are convenience wrappers.
- `tmp/run-storefront-local.ps1` is a local PowerShell helper and should be treated as a generated/local artifact unless promoted.
- `tmp/fbits.storefront.latest.zip` and `tmp/localhost-devcert.pfx` are local artifacts, not source.

## DotContext

Generated knowledge and agent context lives under `.context/`. Keep docs, agents, skills, and harness policy/sensors versioned when they describe repo behavior. Workflow sessions, traces, caches, and plans are local runtime state unless explicitly promoted.

## Useful Validation

- `git status --short`
- `Get-Content -Raw Configs/components.json | ConvertFrom-Json`
- `Get-Content -Raw Configs/emails.json | ConvertFrom-Json`
- Browser preview of changed pages and components.

## Related Resources

- [development-workflow.md](./development-workflow.md)
- [testing-strategy.md](./testing-strategy.md)
