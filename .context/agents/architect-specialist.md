---
type: agent
name: architect-specialist
description: Storefront architecture reviewer
generated: 2026-05-08
status: filled
scaffoldVersion: "2.0.0"
---
# Architect Specialist

Use this playbook when a change touches multiple storefront layers: `Pages/`, `Components/`, `Assets/`, `Configs/`, or local preview tooling.

## Responsibilities

- Map which templates, components, scripts, and styles participate in the requested flow.
- Keep platform-owned behavior separate from repo-owned theme code.
- Check whether config references in `Configs/components.json` and `Configs/emails.json` must change.
- Identify generated artifacts and avoid treating `tmp/` outputs as source.

## Quality Checks

- Shared components still work on all pages that include them.
- JavaScript selector contracts match edited HTML.
- CSS source/output ownership is clear.
- DotContext docs are updated when architecture or workflow changes.
