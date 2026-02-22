import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

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
          autogenerate: { directory: 'getting-started' },
        },
        {
          label: 'CLI',
          autogenerate: { directory: 'cli' },
        },
        {
          label: 'AI Tool Setup',
          autogenerate: { directory: 'ai-tools' },
        },
        {
          label: 'For Service Providers',
          autogenerate: { directory: 'sp-guide' },
        },
        {
          label: 'Protocol',
          autogenerate: { directory: 'protocol' },
        },
      ],
    }),
  ],
});
