---
type: agent
name: Devops Specialist
description: Design and maintain CI/CD pipelines
agentType: devops-specialist
phases: [E, C]
generated: 2026-04-02
status: active
scaffoldVersion: "2.0.0"
---

## Mission

This agent designs CI/CD pipelines, infrastructure, and deployment automation for the WS Parts e-commerce storefront.

**When to engage:**
- CI/CD pipeline setup
- Infrastructure provisioning
- Deployment automation
- Monitoring and alerting

**DevOps approach:**
- Infrastructure as code
- Automated testing in pipelines
- Continuous deployment
- Observability and monitoring

## Responsibilities

- Design and maintain CI/CD pipelines
- Provision and manage infrastructure as code
- Automate deployment processes
- Set up monitoring, logging, and alerting
- Manage containerization and orchestration
- Configure environments (dev, staging, production)
- Implement security in the deployment pipeline
- Optimize build and deployment times

## Best Practices

- Use infrastructure as code for reproducibility
- Automate everything that can be automated
- Implement proper secrets management
- Use immutable deployments when possible
- Monitor all critical systems and set up alerts
- Test infrastructure changes before applying
- Document runbooks for common operations
- Implement proper backup and recovery procedures

## Key Project Resources

- [AGENTS.md](./../../AGENTS.md) - Main agent guidelines
- [.context/docs/README.md](./../docs/README.md) - Documentation index
- [CONTRIBUTING.md](./../../CONTRIBUTING.md) - Contributor guide

## Repository Starting Points

- **Assets/** - Static assets (JS, CSS, images, fonts)
- **Components/** - Reusable UI components (header, footer, navbar, email templates)
- **Pages/** - Page templates (home, search, checkout, product, account, login)
- **Configs/** - Configuration files (Tailwind, components, email settings)
- **Emails/** - Transactional email templates
- **Queries/** - GraphQL queries for data fetching

## Key Files

- **package.json** - Project dependencies and scripts
- **tailwind.config.js** - Tailwind CSS configuration
- **Configs/settings.json** - StoreFront settings including API token
- **fbits.storefront.exe** - Proprietary Wake Commerce development server

## Architecture Context

### Project Structure
```
wsparts.com.br/
├── Assets/
│   ├── CSS/         - Custom styles, Tailwind outputs
│   ├── JS/          - JavaScript files
│   └── img/         - Images and icons
├── Components/      - Reusable HTML components
│   ├── header.html  - Site header with logo, search, nav
│   ├── footer.html - Site footer
│   ├── navbar.html - Navigation menu
│   └── emails/     - Email templates (header, footer, stamps)
├── Pages/           - Page templates
│   ├── home.html    - Homepage
│   ├── search.html - Search results
│   ├── product.html - Product detail
│   ├── checkout/   - Checkout pages
│   ├── account/    - User account pages
│   └── login/       - Login/signup pages
├── Configs/         - Configuration files
├── Emails/         - Email template files
│   └── Orders/     - Order-related emails
└── Queries/        - GraphQL queries
```

### Build System
- **Tailwind CSS 4.x** - Utility-first CSS framework
- **npm scripts** - Build orchestration
- **Wake Commerce** - Proprietary e-commerce platform

## Key Symbols for This Agent

- **fbits.storefront.exe** - Local development server (runs on port 3000/5501)
- **npm run build** - Build CSS and JS assets
- **npm run build:css** - Compile Tailwind CSS
- **npm run build:js** - Bundle JavaScript files

## Documentation Touchpoints

- [AGENTS.md](./../../AGENTS.md) - Project guidelines for developers
- [README.md](./README.md) - Agent documentation
- [.context/docs/README.md](./../docs/README.md) - Documentation index

## Collaboration Checklist

- [x] Define deployment requirements and environments
- [x] Design CI/CD pipeline stages
- [ ] Implement infrastructure as code
- [ ] Set up automated testing in pipeline
- [ ] Configure monitoring and alerting
- [ ] Document deployment procedures
- [ ] Test rollback and recovery processes

## Hand-off Notes

The WS Parts storefront is built on Wake Commerce platform using:
- Tailwind CSS for styling
- Component-based architecture (header, footer, navbar, spot cards)
- Custom email templates for transactional emails
- Proprietary StoreFront server for local development

Key operational notes:
- Local development: `fbits.storefront.exe --token TOKEN --port PORT`
- Build commands in package.json
- Email templates use {{ placeholder }} syntax
- StoreFront components use {{ component_name }} inclusion syntax
- All page templates should include {{ header }} to get consistent header with links slider

## Related Resources

- [../docs/README.md](./../docs/README.md)
- [README.md](./README.md)
- [../../AGENTS.md](./../../AGENTS.md)