---
type: skill
name: Security Audit
description: Audit storefront changes for client-side security risks
skillSlug: security-audit
phases: [R, V]
generated: 2026-05-08
status: filled
scaffoldVersion: "2.0.0"
---
# Security Audit

## Workflow

1. Inspect changed files for customer input, checkout, login, cart, wishlist, tokens, and external links/scripts.
2. Search for unsafe HTML insertion and token logging.
3. Check Git status for local certs, zips, configs, or temp files.
4. Recommend browser validation for sensitive flows.

## Quality Bar

- No secrets committed.
- No unsafe customer data rendering.
- Error states do not reveal internal details.
