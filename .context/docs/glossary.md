---
type: doc
name: glossary
description: Storefront terminology and domain concepts
category: glossary
generated: 2026-05-08
status: filled
scaffoldVersion: "2.0.0"
---
# Glossary

- FBits: The storefront platform/runtime targeted by this repository.
- Storefront theme: The collection of templates, components, assets, snippets, and config that define the customer-facing store.
- Component: A reusable HTML fragment in `Components/`, referenced directly or through `Configs/components.json`.
- Page template: A page-level HTML file in `Pages/`.
- Asset: CSS, JavaScript, image, or font file under `Assets/`.
- Generated CSS: Output CSS produced from an input/source CSS file or Tailwind workflow. Prefer editing source/input files when present.
- Checkout close/confirmation: Post-checkout pages under `Pages/checkout/`.
- CEP: Brazilian postal code used by regional offer and shipping quote flows.
- Wishlist: Customer-saved product flow implemented by `Assets/JS/wishlist.js`.
- Data layer: Analytics/event payload surface used by storefront scripts.

## Domain Rules

- HTML class and ID contracts are important because JavaScript selectors depend on them.
- Config JSON references must match actual component and email file names.
- Email templates should remain self-contained and conservative because email clients have limited CSS support.
- Avoid committing local secrets, certificates, exported zips, or temporary preview artifacts.

## Related Resources

- [project-overview.md](./project-overview.md)
