# ByWrit Documentation

**Visibility**: Public (`bywrit/docs`)
**License**: CC-BY-4.0
**Deploys to**: docs.bywrit.com (Cloudflare Pages)

The ByWrit documentation site, built with [Astro Starlight](https://starlight.astro.build/).

## Getting Started

```bash
npm install
npm run dev      # Local dev server
npm run build    # Production build
```

## Content Priority

1. **Quick Start** — < 5 minutes to first account provisioned
2. **Core Concepts** — KYC-first flow, OIDC, what ByWrit stores, agent tokens
3. **CLI Reference** — all commands, JSON output mode, agent integration examples
4. **AI Tool Setup** — sample CLAUDE.md, .cursorrules, Windsurf rules
5. **SP Integration Guide** — add "Sign in with ByWrit" in 2 hours
6. **Provider Directory API Reference**

## Project Structure

```
docs/
├── src/
│   ├── content/
│   │   └── docs/
│   │       ├── getting-started/
│   │       │   ├── quickstart.mdx
│   │       │   └── concepts.mdx
│   │       ├── cli/
│   │       │   ├── installation.mdx
│   │       │   └── commands.mdx
│   │       ├── ai-tools/
│   │       │   ├── claude-code.mdx
│   │       │   ├── cursor.mdx
│   │       │   └── windsurf.mdx
│   │       ├── sp-guide/
│   │       │   ├── integration.mdx
│   │       │   └── api-reference.mdx
│   │       └── protocol/
│   │           ├── agent-claims.mdx
│   │           └── oidc-extensions.mdx
│   └── assets/
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Deployment

Deployed automatically to Cloudflare Pages on push to `main`. Custom domain: `docs.bywrit.com`.
