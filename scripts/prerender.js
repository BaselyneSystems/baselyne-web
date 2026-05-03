import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { preview } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, '../dist');

const routes = [
  '/',
  '/physical-ai',
  '/solutions',
  '/blog/bulkhead',
  '/blog/gatekeeper',
  '/blog/robot-data-lake',
  '/blog/edge-sync',
  '/blog/training-pipeline',
  '/blog/cdc-platform',
  '/blog',
  '/about',
  '/contact',
];

async function prerender() {
  console.log('Starting pre-rendering...');

  // Start a preview server
  const server = await preview({
    preview: { port: 3000, open: false },
  });

  console.log('Preview server started on port 3000');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  // Read the SPA shell once for use as fallback
  const spaShell = await fs.readFile(path.join(distPath, 'index.html'), 'utf-8');
  let failures = 0;

  try {
    for (const route of routes) {
      console.log(`Pre-rendering: ${route}`);

      const page = await browser.newPage();

      // Capture page-level JS errors and console errors for diagnostics
      page.on('pageerror', err => console.log(`  [pageerror] ${err.message}`));
      page.on('console', msg => {
        if (msg.type() === 'error') console.log(`  [console.error] ${msg.text()}`);
      });

      try {
        await page.goto(`http://localhost:3000${route}`, {
          waitUntil: 'networkidle0',
          timeout: 30000,
        });

        // Wait for React to hydrate (increased to 30 s)
        await page.waitForSelector('#root > *', { timeout: 30000 });

        // Wait for react-helmet-async to update meta tags
        await page.waitForFunction(
          () => {
            const desc = document.querySelector('meta[name="description"]');
            const title = document.querySelector('title');
            return desc && title && !title.textContent.startsWith('Baselyne Systems |');
          },
          { timeout: 5000 }
        ).catch(() => {
          console.log(`  (Using default meta for ${route})`);
        });

        // Small delay to ensure all helmet updates are applied
        await new Promise(resolve => setTimeout(resolve, 500));

        // Get the rendered HTML
        const html = await page.content();

        // Determine output path
        const outputPath = route === '/'
          ? path.join(distPath, 'index.html')
          : path.join(distPath, route, 'index.html');

        // Create directory if needed
        const outputDir = path.dirname(outputPath);
        await fs.mkdir(outputDir, { recursive: true });

        // Write the pre-rendered HTML
        await fs.writeFile(outputPath, html);
        console.log(`  Written: ${outputPath}`);

      } catch (routeErr) {
        failures++;
        console.warn(`  WARNING: pre-rendering failed for ${route}: ${routeErr.message}`);
        console.warn(`  Falling back to SPA shell so GitHub Pages can still serve the route.`);

        // Write the SPA shell as a fallback so the route is not a 404
        const outputPath = route === '/'
          ? path.join(distPath, 'index.html')
          : path.join(distPath, route, 'index.html');
        const outputDir = path.dirname(outputPath);
        await fs.mkdir(outputDir, { recursive: true });
        await fs.writeFile(outputPath, spaShell);
        console.warn(`  Fallback written: ${outputPath}`);
      } finally {
        try {
          await page.close();
        } catch (closeErr) {
          console.warn(`  [warn] page.close failed for ${route}: ${closeErr.message}`);
        }
      }
    }

    if (failures > 0) {
      console.warn(`\nPre-rendering complete with ${failures} fallback(s).`);
    } else {
      console.log('\nPre-rendering complete!');
    }
  } finally {
    await browser.close();
    server.httpServer.close();
  }
}

prerender().catch((err) => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
