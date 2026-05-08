---
type: skill
name: Api Design
description: Review storefront API and platform contracts
skillSlug: api-design
phases: [P, R]
generated: 2026-05-08
status: filled
scaffoldVersion: "2.0.0"
---
# API Design

Use this when changing browser calls from `Assets/JS` to FBits/platform APIs.

## Workflow

1. Identify the script and user action that triggers the call.
2. Inspect the expected request fields, token/session source, and response handling.
3. Preserve platform contract names unless confirmed otherwise.
4. Add recoverable error handling and keep user feedback visible.
5. Validate in the affected browser flow.

## Quality Bar

- No secrets or real tokens in source.
- Payload shape and DOM update path are documented in the change notes.
- Failure and empty-state responses are handled.
