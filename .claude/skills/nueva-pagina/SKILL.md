---
name: nueva-pagina
description: Crea una página nueva en la landing de Mi Crédito 786 con la estructura estándar del proyecto (ruta en src/app, secciones en components/sections, metadata SEO con canonical, esquema JSON-LD y registro en sitemap). Úsala siempre que se pida crear, agregar o duplicar una página, landing, ruta o URL nueva del sitio.
---

# Crear una página nueva

Toda página del sitio sigue la misma estructura para que el SEO (título, descripción, canonical, Open Graph, schema, sitemap) quede consistente. Todo lo de SEO sale de `src/lib/seo/`; **nunca** escribas `export const metadata: Metadata = {...}` a mano ni URLs del dominio en duro.

## 1. Datos que necesitas antes de empezar

Si el usuario no los dio, pregúntalos (o propónlos y pide confirmación):

| Dato | Regla |
|---|---|
| **Ruta** (`path`) | minúsculas, en español, palabras separadas con `-`, sin acentos ni `ñ` (ej. `/reparacion-de-credito-miami`). Debe empezar con `/` |
| **Meta título** | 50-60 caracteres. Palabra clave principal al inicio. NO incluyas la marca: la plantilla agrega ` \| Mi Crédito 786™` |
| **Meta descripción** | 140-160 caracteres. Beneficio + llamada a la acción. Única por página |
| **¿Indexable?** | Páginas de gracias, confirmación, pruebas o campañas privadas → `noIndex: true` |
| **H1** | Uno solo por página, alineado con el meta título (no idéntico) |

Respeta el tono legal del sitio (CROA/FCRA): nada de "garantizamos subir tu score" ni "borramos todo".

## 2. Archivos a crear

```
src/app/<ruta>/page.tsx                      ← Server Component: metadata + schema + composición
src/components/sections/<Nombre>Section.tsx  ← contenido visual ('use client' si usa framer-motion)
src/components/sections/index.ts             ← exportar la sección nueva
```

### `src/app/<ruta>/page.tsx` (plantilla)

```tsx
import { Header } from '@/components/layout';
import { FooterSection, EjemploSection } from '@/components/sections';
import { JsonLd } from '@/components/seo';
import { breadcrumbSchema, createMetadata, webPageSchema } from '@/lib/seo';

const page = {
  title: 'Reparación de Crédito en Miami para Latinos',   // 50-60 caracteres, sin la marca
  description:
    'Descripción única de 140-160 caracteres con el beneficio principal y una llamada a la acción clara.',
  path: '/reparacion-de-credito-miami',
};

export const metadata = createMetadata(page);

export default function ReparacionCreditoMiamiPage() {
  return (
    <>
      <JsonLd
        schemas={[
          webPageSchema(page),
          breadcrumbSchema([{ name: 'Reparación de crédito en Miami', path: page.path }]),
        ]}
      />
      <Header />
      <main>
        <EjemploSection />
      </main>
      <FooterSection />
    </>
  );
}
```

Reglas del `page.tsx`:
- Es **Server Component**: sin `'use client'`. Lo interactivo va en las secciones.
- El objeto `page` se reutiliza para `createMetadata` y `webPageSchema`, así título, descripción y canonical nunca se desalinean.
- `createMetadata` genera canonical absoluto, Open Graph, Twitter y robots. Opciones extra: `noIndex`, `keywords`, `image`, `socialTitle`, `socialDescription`, `absoluteTitle` (solo home).
- El schema de organización y sitio web ya lo pone `layout.tsx`: **no** lo repitas.
- Páginas `noIndex`: no agregues `JsonLd` ni breadcrumb.
- **Header**: `<Header />` (transparente) solo si la página empieza con un hero oscuro como la home. Si empieza con fondo claro usa `<Header variant="solid" />` y deja espacio arriba en el `<main>` (`pt-28`).
- **Migas visibles**: `Breadcrumbs` de `@/components/blog` (acepta los mismos items que `breadcrumbSchema`).
- **Imagen de previsualización generada**: crea `src/app/<ruta>/opengraph-image.tsx` con `renderOgImage({ title, eyebrow })` de `@/lib/seo/og-image` (ver `src/app/blog/opengraph-image.tsx`) y pasa `image: false` a `createMetadata`.
- **Contenido tipo artículo**: `createMetadata({ ..., article: { publishedTime, modifiedTime, authors, section, tags } })` y `blogPostingSchema` en vez de `webPageSchema`.
- ¿Es un artículo del blog? **No uses esta skill**: usa `nuevo-articulo-blog` (solo hay que crear un `.md` en `content/blog`).

### Sección (`<Nombre>Section.tsx`)

Sigue el patrón de las secciones existentes (ej. `FAQSection.tsx`):
- Named export `export function NombreSection()`.
- Usa `Container`, `Button`, etc. de `@/components/ui` y los tokens de Tailwind del proyecto (`text-primary`, `bg-neutral`, `text-foreground-muted`...).
- Animaciones con `framer-motion` (`initial` / `whileInView` / `viewport={{ once: true }}`) → requiere `'use client'`.
- Títulos de sección con `<h2>`; el `<h1>` solo en la primera sección de la página.
- Imágenes con `next/image` y `alt` descriptivo.
- Los CTA que llevan a agendar usan `<Link href="/#agendar">` (`next/link`; el linter no permite `<a>` hacia `/`).
- Contenido que Google debe leer (FAQs, acordeones) tiene que estar en el HTML inicial: usa `<details>/<summary>` como `PostFaqs`, no el `Accordion` de `@/components/ui` (no renderiza las respuestas cerradas).

## 3. Registrar en SEO

- **Indexable** → agrega la ruta a `sitemapPages` en `src/lib/seo/config.ts`:
  ```ts
  { path: '/reparacion-de-credito-miami', changeFrequency: 'monthly', priority: 0.8 },
  ```
  Prioridad: home 1, páginas de servicio 0.8, índice del blog 0.7, artículos 0.6 (se agregan solos), legales 0.3.
- **noIndex** → NO la agregues al sitemap ni a `disallowedPaths` (si robots.txt la bloquea, Google no ve el noindex).
- Datos de marca, contacto, dirección, horario o redes: solo se cambian en `siteConfig` (`src/lib/seo/config.ts`).

## 4. Verificar

1. `npm run build` sin errores.
2. En el HTML generado (`.next/server/app/<ruta>.html`) comprueba:
   - `<title>` = `Meta título | Mi Crédito 786™`
   - `<link rel="canonical" href="https://micredito786.com/<ruta>">`
   - `<meta name="description">` y `og:url` correctos
   - `<meta name="robots" content="index, follow">` (o `noindex, nofollow` si aplica)
   - `<script type="application/ld+json">` con `WebPage` y `BreadcrumbList`
3. Si es indexable, que aparezca en `.next/server/app/sitemap.xml.body`.
4. Tras el deploy, validar el schema en https://search.google.com/test/rich-results y pedir indexación en Search Console.
