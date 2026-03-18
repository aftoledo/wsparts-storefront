---
type: doc
name: project-overview
description: High-level overview of the Wake Commerce Storefront project, its purpose, and key components
category: overview
generated: 2026-03-16
status: filled
scaffoldVersion: "2.0.0"
---
## Project Overview

This project is a **Wake Commerce Storefront** implementation. It uses a headless architecture where the frontend is rendered on the server (SSR) using the **Scriban** template engine and fetches data from the **Wake Storefront API** via **GraphQL**.

The codebase is organized into reusable components, GraphQL queries, and static assets, following the standard Wake Storefront structure.

## Codebase Reference

> **Detailed Analysis**: For complete symbol counts, architecture layers, and dependency graphs, see [`codebase-map.json`](./codebase-map.json).

## Quick Facts

- **Root**: `./`
- **Primary Language**: HTML (Scriban), GraphQL, CSS (Tailwind), JavaScript
- **Local Dev Server**: `fbits.storefront.exe`
- **Full Analysis**: [`codebase-map.json`](./codebase-map.json)

## Key Directories

- `Assets/` — CSS, JavaScript, Images, and Fonts.
- `Components/` — Reusable Scriban templates (`.html`).
- `Queries/` — GraphQL queries used to fetch data for pages and components.
- `Pages/` — Main page templates (Home, Product, Search, etc.).
- `Configs/` — JSON configuration files for store settings, colors, and components.
- `Emails/` — Transactional email templates.
- `Snippets/` — Smaller reusable code snippets.
- `Root/` — Root-level files like `robots.txt` and Service Workers (`sw.js`).

## Technology Stack Summary

**Runtime**: Wake Storefront SSR Environment

**Template Engine**: Scriban

**Data Fetching**: GraphQL (Wake Storefront API)

**Styling**: TailwindCSS

**Development Tools**:
- `fbits.storefront.exe` — Local development server and CLI for syncing with the Wake platform.

## Core Framework Stack

- **Frontend**: Vanilla JavaScript / TailwindCSS.
- **Template Engine**: Scriban (Liquid-like syntax for .NET).
- **API**: GraphQL (Storefront API).

## UI & Interaction Libraries

- **TailwindCSS**: Utility-first CSS framework for styling.
- **Glider.js**: Lightweight carousel library (inferred from `Assets/CSS/glider.css`).

## Development Tools Overview

See [Tooling](./tooling.md) for detailed development environment setup.

**Essential Commands**:
- `fbits.storefront.exe` — Start the local development server.

## Next Steps

- Review [Architecture](./architecture.md) for system design details.
- See [Development Workflow](./development-workflow.md) for contribution guidelines.
- Check [Tooling](./tooling.md) for local setup instructions.

## Related Resources

- [architecture.md](./architecture.md)
- [development-workflow.md](./development-workflow.md)
- [tooling.md](./tooling.md)
- [codebase-map.json](./codebase-map.json)
