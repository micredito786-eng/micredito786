---
name: nuevo-articulo-blog
description: Escribe o edita un artículo del blog de Mi Crédito 786 (archivo Markdown en content/blog) con frontmatter SEO completo, FAQs y verificación. Úsala siempre que se pida crear, redactar, publicar, actualizar o revisar un post, artículo, guía o entrada del blog.
---

# Crear un artículo del blog

El blog se alimenta de archivos Markdown: **un archivo = un artículo**. No hay que tocar código; `/blog`, `/blog/<slug>`, sitemap, metadatos, imagen de previsualización y schemas se generan solos.

| Qué | Dónde |
|---|---|
| Artículos | `content/blog/<slug>.md` |
| Plantilla con todos los campos comentados | `content/blog/_plantilla.md` (los `_*.md` no se publican) |
| Imágenes | `public/blog/<slug>/` (se referencian como `/blog/<slug>/imagen.webp`) |
| Lectura y validación | `src/lib/blog/posts.ts` |
| Página del artículo | `src/app/blog/[slug]/page.tsx` |

## 1. Antes de escribir

Define con el usuario (o propón y confirma):
- **Palabra clave principal** y 2-3 variantes (lo que un latino en USA escribiría en Google, en español).
- **Categoría**: reutiliza una existente para agrupar (`grep -h "^category:" content/blog/*.md`). Base: Reporte de crédito · Score de crédito · Derechos del consumidor · Finanzas personales.
- **Slug** = nombre del archivo = URL. Minúsculas, números y guiones; sin acentos, ñ ni artículos de relleno. Ej. `como-subir-tu-score-de-credito.md`. **No se cambia después de publicar** (rompe la URL indexada).

## 2. Frontmatter

Copia `content/blog/_plantilla.md`. Reglas SEO:

| Campo | Regla |
|---|---|
| `title` | H1 visible. Palabra clave al inicio, natural |
| `metaTitle` | Solo si `title` pasa de 60 caracteres. 50-60, sin la marca (se agrega sola) |
| `description` | 140-160 caracteres. Qué aprende + por qué ahora. Única |
| `date` / `updated` | `AAAA-MM-DD`. Al hacer cambios importantes, actualiza `updated` (no `date`) |
| `tags` | 2-5, en minúsculas. Alimentan "Sigue aprendiendo" |
| `keywords` | Palabra clave principal + variantes |
| `image` + `imageAlt` | **Obligatorios**. Foto real única en `public/blog/<slug>/portada.webp` (1200×630). Sin SVG ni ilustraciones generadas: es la única imagen que se muestra en el listado y en el artículo |
| `summary` | Opcional. 2-4 frases cortas para "Resumen en 30 segundos" |
| `startHere` | Opcional. 1, 2 o 3: posición en "Empieza por estas guías" del índice. Solo guías básicas |
| `faqs` | 3-6 preguntas reales ("¿...?"). Respuesta directa en la primera frase, 2-4 frases en total |
| `draft` | `true` mientras se revisa: se ve en `pnpm dev`, no se publica |

El build **falla** si faltan `title`, `description`, `category`, `date`, `image` o `imageAlt`, si el slug no es válido, o si la portada es SVG o no existe en `public/`. Avisa con `[blog]` si el título o la descripción están fuera de rango.

## 3. Cuerpo del artículo

- **Sin `#` (H1)**: el título ya es el H1. Secciones con `##`, subsecciones con `###` → forman el índice "En este artículo".
- Palabra clave en el primer párrafo y en al menos un `##`.
- Párrafos cortos (2-4 frases), listas y tablas para escanear. 800-1.500 palabras para guías.
- **Enlaces internos**: al menos uno a otro artículo (`/blog/<slug>`) y uno a la auditoría (`/#agendar`). Los externos se abren en pestaña nueva solos.
- `> **Dato clave:** ...` (cita) se muestra como caja verde destacada. 1-2 por artículo.
- Las FAQs **no** se repiten en el cuerpo: se muestran al final automáticamente con su schema FAQPage.
- **Tono legal (CROA/FCRA)**: nunca prometer un score concreto, plazos garantizados ni "borrar todo". Recordar que el consumidor puede disputar por su cuenta. Datos legales (plazos, sitios oficiales) solo si son verificables.
- No hace falta cerrar con CTA: la página añade la tarjeta "Agenda tu auditoría gratis".

## 4. Verificar

1. `pnpm dev` → abrir `http://localhost:3000/blog/<slug>` (los borradores se ven en dev con etiqueta "Borrador").
2. Revisar índice (TOC), FAQs y enlaces.
3. Para publicar: `draft: false` (o quitar la línea) y `npm run build` sin errores ni avisos `[blog]`.
4. En `.next/server/app/blog/<slug>.html`: `<title>`, `canonical`, `og:type=article`, JSON-LD con `BlogPosting`, `BreadcrumbList` y `FAQPage`.
5. Que aparezca en `.next/server/app/sitemap.xml.body`.
6. Tras el deploy: validar en https://search.google.com/test/rich-results, probar la previsualización (ej. https://www.opengraph.xyz) y pedir indexación en Search Console.
