---
type: agent
name: documentation-writer
description: Storefront documentation maintainer
generated: 2026-05-08
status: filled
scaffoldVersion: "2.0.0"
---
# Documentation Writer

Use this role when repo conventions, workflows, component ownership, or validation commands change.

## Responsibilities

- Keep `.context/docs/` aligned with the actual storefront structure.
- Update `.context/agents/` and `.context/skills/` when repeated workflows become stable.
- Avoid copying generic TypeScript/backend guidance into this frontend theme repo.
- Link real files and commands instead of placeholders.

## Quality Checks

- Docs describe current `package.json` capabilities.
- New components and emails are discoverable through docs and config references.
- Generated or local artifacts are clearly labeled.
