---
type: doc
name: architecture
description: Static storefront architecture and ownership map
category: architecture
generated: 2026-05-08
status: filled
scaffoldVersion: "2.0.0"
---
# Architecture

`wsparts.com.br` is a static storefront/theme workspace for an FBits storefront. Most runtime behavior is delivered as HTML fragments, CSS, browser JavaScript, JSON configuration, and email templates consumed by the storefront platform or by the local `fbits.storefront.exe` helper.

## Top-Level Structure

- `Assets/` contains storefront CSS, JavaScript, fonts, and images. Edit this when changing visual style, browser interactions, analytics hooks, cart behavior, wishlist behavior, search behavior, or checkout styling.
- `Components/` contains reusable HTML fragments used by pages and storefront slots. Edit this for shared header, footer, filter, sort, pagination, checkout, and product-list pieces.
- `Configs/` contains JSON configuration that maps components and emails into the storefront build/runtime.
- `Emails/` contains email HTML templates.
- `Pages/` contains page-level HTML templates such as search, login, checkout, close, and confirmation pages.
- `Queries/`, `Root/`, and `Snippets/` hold platform-specific storefront support files and reusable snippets.
- `fbits.storefront.exe`, `start-dev.bat`, `start-dev.sh`, and `storefront.config` support local storefront preview and extraction workflows.

## Runtime Model

The platform renders page templates and components, then loads assets from `Assets/`. Browser JavaScript in `Assets/JS` binds to rendered DOM, calls storefront/customer/cart APIs exposed by the platform, updates DOM fragments, and records client-side events. Styling is split between source/input CSS and generated/output CSS; do not edit generated output without checking whether an input source also needs the same change.

## Key Frontend Modules

- `Assets/JS/product.js` handles product attributes, quantity, buy/add-to-cart flows, wholesale pricing, and customization capture.
- `Assets/JS/cart*.js` and checkout scripts handle cart and checkout UI behavior.
- `Assets/JS/wishlist.js` manages wishlist state and customer token checks.
- `Assets/JS/search.js`, `sort.js`, `products_per_page.js`, and filter scripts control listing/search UX.
- `Assets/JS/regional_offers.js` and `shipping_quotes.js` handle CEP/regional offer and shipping quote flows.

## Change Boundaries

Keep storefront HTML, CSS, and JavaScript changes aligned. A component change often requires a matching asset update and a config reference. Generated preview or exported files in `tmp/` are local artifacts and should not be treated as source unless explicitly promoted.

## Related Resources

- [project-overview.md](./project-overview.md)
- [data-flow.md](./data-flow.md)
- [tooling.md](./tooling.md)
