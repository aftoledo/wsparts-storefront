---
type: doc
name: project-overview
description: What this repository is and how to approach it
category: overview
generated: 2026-05-08
status: filled
scaffoldVersion: "2.0.0"
---
# Project Overview

`wsparts.com.br` stores the customer-facing storefront implementation for WS Parts on top of an FBits storefront runtime. It is mostly static frontend source: HTML templates, reusable components, CSS, JavaScript, images, fonts, email templates, and JSON configuration.

## Primary Workflows

- Update storefront pages in `Pages/`.
- Update reusable fragments in `Components/`.
- Adjust style and behavior in `Assets/CSS` and `Assets/JS`.
- Configure template references in `Configs/components.json` and `Configs/emails.json`.
- Maintain email templates in `Emails/`.
- Use local storefront helpers and generated preview artifacts only as validation/support files.

## Important Constraints

The repository does not look like a conventional TypeScript application despite older AGENTS guidance mentioning TypeScript sessions. `package.json` currently only declares Tailwind dependencies and no npm scripts. Treat platform preview tooling and browser validation as the main feedback loop unless new scripts are added.

## Good Starting Points

- `README.md` for existing repo notes.
- `AGENTS.md` for collaboration rules.
- `Assets/JS/product.js` for product-page behavior.
- `Pages/checkout/` and checkout components for checkout changes.
- `Configs/` when new components or emails are introduced.

## Related Resources

- [architecture.md](./architecture.md)
- [development-workflow.md](./development-workflow.md)
- [tooling.md](./tooling.md)
