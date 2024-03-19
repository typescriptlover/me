import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
   site: 'https://vigy.me',
   integrations: [tailwind(), svelte(), react(), sitemap()],
});
