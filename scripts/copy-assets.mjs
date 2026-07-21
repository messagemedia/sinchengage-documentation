import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const WEB_DIR = path.join(root, 'web');
const OUT_DIR = path.join(root, 'web_deploy');

const ASSETS = [
  'favicon.png',
  'logo.png',
  'logo.svg',
  'message-flow.png',
];

fs.mkdirSync(OUT_DIR, { recursive: true });

for (const name of ASSETS) {
  const src = path.join(WEB_DIR, name);
  const dest = path.join(OUT_DIR, name);
  if (!fs.existsSync(src)) {
    console.warn(`Asset not found, skipping: ${name}`);
    continue;
  }
  fs.copyFileSync(src, dest);
  console.log(`Copied ${name} -> web_deploy/${name}`);
}
