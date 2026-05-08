---
type: doc
name: security
description: Security notes for storefront and local tooling changes
category: security
generated: 2026-05-08
status: filled
scaffoldVersion: "2.0.0"
---
# Security

This repo is frontend/theme code, but it still handles customer-facing flows. Security work is mostly about avoiding secret leakage, unsafe client-side assumptions, and broken commerce behavior.

## Sensitive Files

- Do not commit certificates, local config secrets, storefront export zips, or generated temp files from `tmp/`.
- Treat `storefront.config` and local preview helper outputs as potentially environment-specific.
- Keep real tokens out of `Configs/`, `Assets/JS`, templates, and email files.

## Browser Security

- Do not inject unsanitized customer, product, or query data into HTML.
- Prefer text assignment over raw HTML when adding dynamic DOM behavior.
- Keep customer tokens/session data handling scoped to platform-supported flows.
- Do not add third-party scripts without documenting their purpose and load point.

## Review Focus

- New forms and checkout changes.
- Scripts that read/write customer tokens, cart state, local storage, or session storage.
- Search, newsletter, and regional-offer inputs.
- Email template links and customer-specific variables.

## Related Resources

- [architecture.md](./architecture.md)
- [testing-strategy.md](./testing-strategy.md)
