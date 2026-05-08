---
type: skill
name: Bug Investigation
description: Investigate storefront bugs by tracing page, component, asset, and config ownership
skillSlug: bug-investigation
phases: [E, V]
generated: 2026-05-08
status: filled
scaffoldVersion: "2.0.0"
---
# Bug Investigation

## Workflow

1. Start from the visible page or flow.
2. Search matching text, class names, IDs, and config references in `Pages/`, `Components/`, `Assets/`, `Configs/`, and `Emails/`.
3. Confirm whether the source is HTML, CSS, JavaScript, or platform data.
4. Patch the smallest owning files.
5. Validate with browser behavior and JSON parsing where relevant.

## Quality Bar

- Do not overwrite unrelated local storefront changes.
- Treat PowerShell profile warnings as noise unless the target command failed.
- Record any validation gap clearly.
