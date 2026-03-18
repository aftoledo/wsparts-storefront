---
type: doc
name: scriban-reference
description: Scriban objects, filters, and syntax reference for Wake Storefront
category: reference
generated: 2026-03-16
status: filled
---
## Scriban Reference

The project uses the **Scriban** template engine for SSR. This document lists common objects and filters available in the Wake Storefront environment.

## Global Objects

These objects are usually available in the context of various page templates.

### `store`
General store information.
- `store.urls.base`: Base URL of the store.
- `store.urls.checkout`: Checkout URL.
- `store.urls.static_img`: URL for static images.
- `store.theme`: Current active theme name.
- `store.last_modified`: Last modification timestamp (useful for cache busting).

### `settings`
Global store settings and credentials.
- `settings.access_token`: Storefront API access token.

### `cart`
Information about the current shopping cart.
- `cart.items`: Array of items in the cart.
- `cart.total_price`: Total cart value.

### `product`
Available in product pages and within spots.
- `product.product_name`: Name of the product.
- `product.alias`: URL alias.
- `product.prices`: Object containing `list_price`, `price`, `discount_percentage`, etc.
- `product.images`: Array of product images.
- `product.available`: Boolean indicating if the product is in stock.
- `product.similar_products`: Array of related products.

## Custom Filters

Wake provides specialized Scriban filters for common storefront tasks.

### `sc_imagelink`
Resizes and returns a URL for an image.
**Usage**: `{{ product.image | sc_imagelink 220 220 }}`

### `sc_xc_serialize`
Serializes a Scriban object to a JSON string for use in client-side scripts.
**Usage**: `<div data-product='{{ product | sc_xc_serialize }}'></div>`

### `sc_format_currency`
Formats a number as currency.
**Usage**: `{{ product.prices.price | sc_format_currency }}`

### `array.limit` (Standard Scriban)
Limits the number of items in an array.
**Usage**: `{{ for item in items | array.limit 4 }}`

### `group.by`
Groups an array by a specific property or function.
**Usage**: `{{ groups = items | group.by @(do; ret $0.category; end) }}`

## Common Syntax

### Loops
```scriban
{{~ for item in items ~}}
  <div>{{ item.name }}</div>
{{~ end ~}}
```

### Conditionals
```scriban
{{~ if product.available ~}}
  <span>In Stock</span>
{{~ else ~}}
  <span>Out of Stock</span>
{{~ end ~}}
```

### Includes
Includes a component from the `Components/` folder.
```scriban
{{ spot product: product }}
```

## Tips

- **Serialization**: Use `{{ object | sc_xc_serialize }}` to debug and see all available properties of an object.
- **Whitespace Control**: Use `{{-` or `~}}` to control whitespace around tags.
- **Comments**: Use `{{ ## ... ## }}` for multi-line comments.

## Related Resources
- [Architecture](./architecture.md)
- [Project Overview](./project-overview.md)
- [Scriban Official Docs](https://scriban.github.io)
