/**
 * Genera la imagen de previsualización (og.jpg, 1200x630) de cada artículo a partir de su portada.
 * Corre solo antes de dev y build; sharp se usa únicamente aquí, nunca en el servidor.
 * Algunas redes (LinkedIn) no leen WebP, por eso se convierte a JPG.
 *
 * Uso: node scripts/generate-og-images.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import sharp from 'sharp';

const ROOT = process.cwd();
const BLOG_DIR = path.join(ROOT, 'content', 'blog');
const PUBLIC_DIR = path.join(ROOT, 'public');
const OG_SIZE = { width: 1200, height: 630 };

const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith('.md') && !file.startsWith('_'));

let generated = 0;
for (const file of files) {
  const { data } = matter(fs.readFileSync(path.join(BLOG_DIR, file), 'utf8'));
  if (typeof data.image !== 'string') continue;

  const cover = path.join(PUBLIC_DIR, data.image);
  // Si falta la portada, el build falla con un mensaje claro en src/lib/blog/posts.ts
  if (!fs.existsSync(cover)) continue;

  const output = path.join(path.dirname(cover), 'og.jpg');
  if (fs.existsSync(output) && fs.statSync(output).mtimeMs >= fs.statSync(cover).mtimeMs) continue;

  await sharp(cover)
    .resize(OG_SIZE.width, OG_SIZE.height, { fit: 'cover' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(output);
  generated++;
}

console.log(`[og] ${generated} imagen(es) de previsualización generada(s), ${files.length} artículo(s) revisado(s)`);
