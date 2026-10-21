import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function weddingApiPlugin(): Plugin {
  const dataDir = path.resolve(__dirname, 'data');
  const wishesFile = path.join(dataDir, 'wishes.json');
  const rsvpsFile = path.join(dataDir, 'rsvps.json');

  const ensureDataFiles = () => {
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    if (!fs.existsSync(wishesFile)) {
      fs.writeFileSync(wishesFile, JSON.stringify([], null, 2));
    }
    if (!fs.existsSync(rsvpsFile)) {
      fs.writeFileSync(rsvpsFile, JSON.stringify([], null, 2));
    }
  };

  return {
    name: 'wedding-api-plugin',
    configureServer(server) {
      ensureDataFiles();

      server.middlewares.use((req, res, next) => {
        if (!req.url?.startsWith('/api/')) {
          return next();
        }

        // Handle GET /api/wishes
        if (req.method === 'GET' && req.url === '/api/wishes') {
          try {
            ensureDataFiles();
            const data = fs.readFileSync(wishesFile, 'utf-8');
            res.setHeader('Content-Type', 'application/json');
            res.end(data || '[]');
          } catch (e) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: 'Failed to read wishes' }));
          }
          return;
        }

        // Handle POST /api/wishes
        if (req.method === 'POST' && req.url === '/api/wishes') {
          let body = '';
          req.on('data', (chunk) => { body += chunk; });
          req.on('end', () => {
            try {
              ensureDataFiles();
              const newWish = JSON.parse(body);
              const existing = JSON.parse(fs.readFileSync(wishesFile, 'utf-8') || '[]');
              existing.unshift(newWish);
              fs.writeFileSync(wishesFile, JSON.stringify(existing, null, 2));
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, wish: newWish }));
            } catch (e) {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: 'Invalid wish data' }));
            }
          });
          return;
        }

        // Handle POST /api/rsvp
        if (req.method === 'POST' && req.url === '/api/rsvp') {
          let body = '';
          req.on('data', (chunk) => { body += chunk; });
          req.on('end', () => {
            try {
              ensureDataFiles();
              const newRsvp = JSON.parse(body);
              const existing = JSON.parse(fs.readFileSync(rsvpsFile, 'utf-8') || '[]');
              existing.unshift(newRsvp);
              fs.writeFileSync(rsvpsFile, JSON.stringify(existing, null, 2));
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, message: 'RSVP confirmed' }));
            } catch (e) {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: 'Invalid RSVP data' }));
            }
          });
          return;
        }

        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), weddingApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

