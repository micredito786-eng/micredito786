/**
 * Validador automatizado de artículos de blog para Mi Crédito 786.
 *
 * Uso:
 *   node scripts/validate-blog-entry.mjs <slug>
 *   node scripts/validate-blog-entry.mjs --all
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import matter from 'gray-matter';

const ROOT = process.cwd();
const BLOG_DIR = path.join(ROOT, 'content', 'blog');
const PUBLIC_DIR = path.join(ROOT, 'public');

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const VALID_CATEGORIES = [
  'Reporte de crédito',
  'Score de crédito',
  'Derechos del consumidor',
  'Finanzas personales',
];

const AI_CLICHES_ES = [
  /en el mundo digital actual/i,
  /en la era digital en la que vivimos/i,
  /en la era digital/i,
  /hoy en día, en un mundo/i,
  /en este fascinante artículo/i,
  /en conclusión,/i,
  /en resumen,/i,
  /para concluir,/i,
  /un faro de esperanza/i,
  /un faro de luz/i,
  /caleidoscopio/i,
  /tapiz/i,
  /desentrañar/i,
  /adentrémonos en/i,
  /como un recordatorio de que/i,
  /no es solo una cuestión de.*sino de/i,
  /un testimonio de/i,
];

const CROA_VIOLATIONS = [
  /score garantizado/i,
  /garantizamos (subir|aumentar|eliminar|borrar)/i,
  /resultado(s)? (100% )?garantizado(s)?/i,
  /borramos todo/i,
  /eliminamos cualquier deuda/i,
  /sube (\d+) puntos en (\d+) días garantizado/i,
  /limpieza de crédito garantizada/i,
];

function calculateSha256(filePath) {
  const buffer = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(buffer).digest('hex');
}

function validatePost(slug) {
  const errors = [];
  const warnings = [];

  const fileName = `${slug}.md`;
  const filePath = path.join(BLOG_DIR, fileName);

  if (!SLUG_PATTERN.test(slug)) {
    errors.push(`El slug "${slug}" es inválido. Usa minúsculas, números y guiones.`);
  }

  if (!fs.existsSync(filePath)) {
    errors.push(`No se encontró el archivo: content/blog/${fileName}`);
    return { slug, errors, warnings };
  }

  const raw = fs.readFileSync(filePath, 'utf8');
  let data, content;
  try {
    const parsed = matter(raw);
    data = parsed.data;
    content = parsed.content;
  } catch (err) {
    errors.push(`Error al parsear el frontmatter YAML: ${err.message}`);
    return { slug, errors, warnings };
  }

  // 1. Campos obligatorios
  if (!data.title || typeof data.title !== 'string' || !data.title.trim()) {
    errors.push('Falta el campo obligatorio "title" en el frontmatter.');
  } else {
    const titleLen = data.title.trim().length;
    if (titleLen < 30 || titleLen > 70) {
      warnings.push(`"title" tiene ${titleLen} caracteres (recomendado: 30-60).`);
    }
  }

  if (data.metaTitle && typeof data.metaTitle === 'string') {
    const metaLen = data.metaTitle.trim().length;
    if (metaLen < 40 || metaLen > 65) {
      warnings.push(`"metaTitle" tiene ${metaLen} caracteres (recomendado: 50-60).`);
    }
  }

  if (!data.description || typeof data.description !== 'string' || !data.description.trim()) {
    errors.push('Falta el campo obligatorio "description" en el frontmatter.');
  } else {
    const descLen = data.description.trim().length;
    if (descLen < 120 || descLen > 165) {
      warnings.push(`"description" tiene ${descLen} caracteres (recomendado: 140-160, mínimo 120).`);
    }
  }

  if (!data.date) {
    errors.push('Falta el campo obligatorio "date" en el frontmatter (formato YYYY-MM-DD).');
  } else {
    const dateObj = new Date(String(data.date));
    if (Number.isNaN(dateObj.getTime())) {
      errors.push(`"date" ("${data.date}") no es una fecha válida (usa YYYY-MM-DD).`);
    }
  }

  if (!data.category || typeof data.category !== 'string') {
    errors.push('Falta el campo obligatorio "category".');
  } else if (!VALID_CATEGORIES.includes(data.category.trim())) {
    errors.push(
      `Categoría "${data.category}" no reconocida. Categorías válidas: ${VALID_CATEGORIES.join(', ')}`
    );
  }

  // 2. FAQs
  if (data.faqs) {
    if (!Array.isArray(data.faqs)) {
      errors.push('"faqs" debe ser un array de objetos con question y answer.');
    } else {
      if (data.faqs.length < 3) {
        warnings.push(`Se recomiendan entre 3 y 6 FAQs (actualmente tiene ${data.faqs.length}).`);
      }
      data.faqs.forEach((faq, i) => {
        if (!faq.question || !faq.answer) {
          errors.push(`FAQ #${i + 1} no tiene "question" o "answer" válidos.`);
        }
      });
    }
  }

  // 3. Imagen (portada obligatoria, solo imágenes reales)
  if (!data.image) {
    errors.push('Falta "image": cada artículo necesita su portada en public/blog/<slug>/portada.webp.');
  } else if (/\.svg$/i.test(data.image)) {
    errors.push('"image" no puede ser SVG: usa una portada .webp (1200×630).');
  }
  if (data.image) {
    if (!data.imageAlt) {
      errors.push('Falta "imageAlt": describe lo que se ve en la portada.');
    }
    const expectedPath = `/blog/${slug}/portada.webp`;
    if (data.image !== expectedPath) {
      warnings.push(`La ruta recomendada de imagen es "${expectedPath}" (actual: "${data.image}").`);
    }
    const diskImagePath = path.join(PUBLIC_DIR, data.image.replace(/^\//, ''));
    if (!fs.existsSync(diskImagePath)) {
      errors.push(`El archivo de imagen no existe en disco: ${diskImagePath}`);
    } else {
      // Unicidad de imagen por hash contra otros blogs
      const currentHash = calculateSha256(diskImagePath);
      const blogFolders = fs.readdirSync(path.join(PUBLIC_DIR, 'blog'), { withFileTypes: true })
        .filter((d) => d.isDirectory() && d.name !== slug);

      for (const dir of blogFolders) {
        const otherCover = path.join(PUBLIC_DIR, 'blog', dir.name, 'portada.webp');
        if (fs.existsSync(otherCover)) {
          const otherHash = calculateSha256(otherCover);
          if (currentHash === otherHash) {
            errors.push(
              `Violación de unicidad de imagen: portada idéntica a la del post "${dir.name}". Cada blog debe tener su propia imagen original.`
            );
            break;
          }
        }
      }
    }
  }

  // 4. Verificaciones de contenido Markdown
  const lines = content.split('\n');

  // No usar # (H1) en el cuerpo
  const h1Match = lines.find((line) => /^#\s+/.test(line));
  if (h1Match) {
    errors.push(
      `No uses encabezados H1 ("# ") en el cuerpo del Markdown: el título ya actúa como H1. Usa "## " y "### ". Encontrado: "${h1Match.trim()}"`
    );
  }

  // Prohibido el uso de bullet unicode • o ●
  const bulletUnicode = lines.find((line) => /^[ \t]*[•●]/.test(line));
  if (bulletUnicode) {
    errors.push(
      `Prohibido usar caracteres Unicode "•" o "●" para viñetas. Usa siempre guion estándar "- " para respetar la sangría adecuada. Encontrado: "${bulletUnicode.trim()}"`
    );
  }

  // Cero clichés de IA
  for (const regex of AI_CLICHES_ES) {
    if (regex.test(content) || (data.description && regex.test(data.description))) {
      errors.push(`Detectado cliché de IA prohibido: coincide con patrón ${regex}`);
    }
  }

  // Restricciones legales y regulatorias (CROA / FCRA)
  for (const regex of CROA_VIOLATIONS) {
    if (regex.test(content) || (data.description && regex.test(data.description))) {
      errors.push(
        `Violación regulatoria CROA detectada: promesa de crédito ilegal o no permitida que coincide con ${regex}`
      );
    }
  }

  // Conteo de palabras
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  if (wordCount < 400) {
    warnings.push(
      `El artículo tiene ${wordCount} palabras. Se recomienda un mínimo de 600-1200 palabras para posicionamiento SEO efectivo.`
    );
  }

  // Enlace a la auditoría gratuita
  if (!content.includes('/#agendar')) {
    warnings.push('Se recomienda incluir al menos un enlace a la auditoría gratuita (/#agendar).');
  }

  return { slug, errors, warnings, wordCount };
}

// Ejecución CLI
const arg = process.argv[2];

if (!arg) {
  console.log('Uso: node scripts/validate-blog-entry.mjs <slug> | --all');
  process.exit(1);
}

let slugsToValidate = [];

if (arg === '--all') {
  slugsToValidate = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md') && !f.startsWith('_'))
    .map((f) => f.replace(/\.md$/, ''));
} else {
  slugsToValidate = [arg.replace(/\.md$/, '')];
}

let totalErrors = 0;
let totalWarnings = 0;

console.log(`\n🔍 Validando ${slugsToValidate.length} artículo(s) de Mi Crédito 786...\n`);

for (const slug of slugsToValidate) {
  const result = validatePost(slug);
  console.log(`📄 Post: ${result.slug}`);
  if (result.wordCount !== undefined) {
    console.log(`   Palabras: ${result.wordCount}`);
  }

  if (result.errors.length > 0) {
    console.log('   ❌ ERRORES:');
    result.errors.forEach((err) => console.log(`      - ${err}`));
    totalErrors += result.errors.length;
  }

  if (result.warnings.length > 0) {
    console.log('   ⚠️  ADVERTENCIAS:');
    result.warnings.forEach((warn) => console.log(`      - ${warn}`));
    totalWarnings += result.warnings.length;
  }

  if (result.errors.length === 0 && result.warnings.length === 0) {
    console.log('   ✅ Válido y listo sin observaciones.');
  }

  console.log('');
}

console.log('────────────────────────────────────────');
if (totalErrors > 0) {
  console.error(`🚨 Falló la validación con ${totalErrors} error(es) y ${totalWarnings} advertencia(s).\n`);
  process.exit(1);
} else {
  console.log(`🎉 ¡Validación superada con éxito! (0 errores, ${totalWarnings} advertencia(s)).\n`);
  process.exit(0);
}
