import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { rehypeCdnImages } from './src/img.mjs';
export default defineConfig({
  site: 'https://noonwild.com',
  integrations: [sitemap()],
  markdown: { rehypePlugins: [rehypeCdnImages] },
});
