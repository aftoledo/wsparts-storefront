---
type: doc
name: data-flow
description: Data movement through storefront templates and browser assets
category: data-flow
generated: 2026-05-08
status: filled
scaffoldVersion: "2.0.0"
---
# Data Flow

The repository does not own a backend service or database. Data enters through the FBits storefront platform, rendered page templates, platform-provided globals, browser storage, customer/session state, and storefront API calls made by client JavaScript.

## High-Level Flow

1. Platform page data is rendered into `Pages/` templates and `Components/` fragments.
2. Assets from `Assets/CSS`, `Assets/JS`, `Assets/img`, and `Assets/Fonts` are loaded by the browser.
3. JavaScript modules bind event handlers to storefront DOM elements.
4. Customer actions trigger cart, wishlist, search, sort, shipping, regional-offer, newsletter, or product flows.
5. Results are reflected back into the DOM, browser storage, platform cart/customer state, or analytics/data-layer events.

## Module Dependencies

- `Pages/` depends on `Components/`, `Assets/`, and platform placeholders.
- `Components/` depends on CSS class contracts, JavaScript selectors, and entries in `Configs/components.json`.
- `Emails/` depends on template variables and references in `Configs/emails.json`.
- `Assets/JS` depends on browser DOM, platform APIs, customer/cart tokens, and selectors emitted by templates.
- `Assets/CSS` depends on class names used by `Pages/`, `Components/`, and email templates.

## External Integrations

- FBits storefront runtime: renders templates and provides commerce context.
- Browser APIs: DOM, events, local/session storage, fetch/XHR where used.
- Customer/cart APIs: used by product, wishlist, checkout, and login scripts.
- Analytics/data layer: product and checkout scripts emit or prepare tracking data where platform conventions require it.

## Failure Modes

Most failures are selector drift, missing config references, stale generated CSS, platform variable mismatch, or scripts running before the expected DOM exists. Validate changes through local preview where possible and by inspecting the affected page in a browser.

## Related Resources

- [architecture.md](./architecture.md)
- [testing-strategy.md](./testing-strategy.md)
