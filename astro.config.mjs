import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',
  site: 'https://docs.bywrit.com',
  integrations: [
    starlight({
      title: 'ByWrit',
      description: 'Verified identity for AI agents. One KYC, every service.',
      social: {
        github: 'https://github.com/bywrit',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Quick Start', slug: 'getting-started/quickstart' },
            { label: 'Core Concepts', slug: 'getting-started/concepts' },
          ],
        },
        {
          label: 'CLI',
          items: [
            { label: 'Installation', slug: 'cli/installation' },
            { label: 'Commands', slug: 'cli/commands' },
          ],
        },
        {
          label: 'AI Tool Setup',
          items: [
            { label: 'Claude Code', slug: 'ai-tools/claude-code' },
            { label: 'Cursor', slug: 'ai-tools/cursor' },
            { label: 'Windsurf', slug: 'ai-tools/windsurf' },
          ],
        },
        {
          label: 'For Service Providers',
          items: [
            { label: 'Integration Guide', slug: 'sp-guide/integration' },
            { label: 'API Reference', slug: 'sp-guide/api-reference' },
          ],
        },
        {
          label: 'Protocol',
          items: [
            { label: 'Agent Claims', slug: 'protocol/agent-claims' },
            { label: 'OIDC Extensions', slug: 'protocol/oidc-extensions' },
          ],
        },
      ],
    }),
  ],
});
