import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';
import { execSync } from 'child_process';
import contactHandler from './api/contact';

function generateSitemapPlugin(): Plugin {
  return {
    name: 'generate-sitemap-plugin',
    buildStart() {
      try {
        execSync('node scripts/generate-sitemap.js', { stdio: 'inherit' });
      } catch (err) {
        console.error('[Sitemap Plugin] Error running generate-sitemap.js:', err);
      }
    }
  };
}

function apiContactPlugin(): Plugin {
  return {
    name: 'api-contact-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url && (req.url === '/api/contact' || req.url.startsWith('/api/contact?'))) {
          await contactHandler(req, res);
          return;
        }
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url && (req.url === '/api/contact' || req.url.startsWith('/api/contact?'))) {
          await contactHandler(req, res);
          return;
        }
        next();
      });
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [generateSitemapPlugin(), apiContactPlugin(), react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
