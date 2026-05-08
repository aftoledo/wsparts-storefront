---
type: agent
name: devops-specialist
description: Local tooling and release hygiene role
generated: 2026-05-08
status: filled
scaffoldVersion: "2.0.0"
---
# DevOps Specialist

Use this role for local preview tooling, dependency setup, generated artifacts, and GitHub/CI hygiene.

## Responsibilities

- Maintain `package.json`, `package-lock.json`, Tailwind CLI dependencies, and helper scripts.
- Keep `fbits.storefront.exe`, `start-dev.bat`, `start-dev.sh`, and local preview commands documented.
- Ensure `tmp/` artifacts, local certs, and exported zips are not committed unless explicitly intended.
- Add npm scripts only when they represent a real repo workflow.

## Quality Checks

- `npm install` can restore dependencies.
- JSON configs parse.
- The changed workflow is documented in `.context/docs/tooling.md`.
