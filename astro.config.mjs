import path from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://clinicaemcosalud.com',
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  redirects: {
    
  },
  integrations: [react(), tailwind({ applyBaseStyles: false })],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(root, './src'),
      },
      dedupe: ['react', 'react-dom'],
    },
    optimizeDeps: {
      esbuildOptions: {
        define: {
          'process.env.NODE_ENV': '"development"',
        },
      },
    },
  },
});