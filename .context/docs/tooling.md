---
type: doc
name: tooling
description: Development environment setup, tools, and automation for Wake Commerce Storefront
category: tooling
generated: 2026-03-16
status: filled
scaffoldVersion: "2.0.0"
---
## Tooling & Environment

This document describes the development environment, local tools, and automation used in this project.

## Local Development Server

The primary tool for development is the **Wake Storefront CLI** (`fbits.storefront.exe`).

### Prerequisites
- **Wake CLI**: Usually provided as `fbits.storefront.exe` in the project root.
- **Node.js**: Required for some build scripts and potential frontend tools.
- **TailwindCSS**: Used for styling; ensure you have the necessary environment for processing CSS if needed.

### Essential Commands
- **Start Server**: Run `fbits.storefront.exe` to start the local development server. This allows you to preview the store with real data from the Wake API.
- **Syncing**: The CLI automatically syncs your local files (`Components/`, `Pages/`, `Assets/`, etc.) with the Wake platform during development.

## Project Structure & Tooling

- **Scriban Templates**: Located in `Pages/`, `Components/`, and `Snippets/`. These are rendered on the server.
- **GraphQL Queries**: Defined in `Queries/`. These define the data available to the Scriban templates.
- **TailwindCSS**: The project uses Tailwind for styling. The configuration is in `tailwind.config.js`.
- **JavaScript**: Client-side logic is in `Assets/JS/`.

## Build & Asset Management

- **Assets**: CSS, JS, and images are managed in the `Assets/` directory.
- **Tailwind Processing**: If you need to rebuild the Tailwind CSS, ensure you have the Tailwind CLI or a compatible task runner installed.

## Best Practices

1. **Use Fragments**: When writing GraphQL queries, use fragments to keep queries clean and reusable.
2. **Component Isolation**: Keep logic within `Components/` focused on rendering. Use `Queries/` for data fetching.
3. **Scriban Documentation**: Refer to [scriban.github.io](https://scriban.github.io) for template syntax.
4. **Tailwind Utilities**: Prefer Tailwind utility classes over custom CSS whenever possible.

## Next Steps

- Review [Architecture](./architecture.md) for system design.
- See [Development Workflow](./development-workflow.md) for contribution guidelines.
