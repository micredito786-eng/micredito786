---
name: blog-generator
description: Genera un artículo de blog estandarizado, robusto y de alta calidad para Mi Crédito 786 (micredito786.com). Incluye contenido Markdown en español enfocado en latinos en EE.UU., sin marcas ni clichés de IA, cumplimiento estricto de las leyes FCRA, CROA y FDCPA, generación de imagen de portada fotográfica con generate_image (nunca ilustraciones SVG) con garantía de unicidad (sin duplicados), validación automatizada mediante script y publicación en Git creando rama y Pull Request únicamente si se solicita explícitamente en el chat.
---

# 📝 Generador de Blog Estandarizado y Robusto - Mi Crédito 786

> [!IMPORTANT]
> ### 🚨 REGLAS OBLIGATORIAS Y PRIORITARIAS:
> 
> 1. **MIRA LA SKILL SI SE PIDE QUE SE TOME EL CONTEXTO:** SIEMPRE QUE SE PIDA GENERAR O REVISAR ARTÍCULOS, O TOMAR EL CONTEXTO DEL BLOG, CONSULTA Y RESPETA OBLIGATORIAMENTE CADA DIRECTRIZ, REGLA TIPOGRÁFICA Y RESTRICCIÓN DE ESTA SKILL, ASÍ COMO LAS DIRECTRICES REGULATORIAS DE FCRA/CROA DE MI CRÉDITO 786.
> 2. **SIEMPRE QUE SE CREE EL BLOG HAGA UN RESUMEN DE LOS MD E IMÁGENES PARA PODER MIRAR:** UNA VEZ CREADO O MODIFICADO EL CONTENIDO, PRESENTA EN EL CHAT UN RESUMEN DETALLADO CON EL ARCHIVO `.md` GENERADO/ACTUALIZADO (TÍTULO, DESCRIPCIÓN, CATEGORÍA, ENFOQUE, FAQS) Y LA IMAGEN PARA QUE EL USUARIO PUEDA REVISARLO CÓMODAMENTE.
> 3. **FECHA CORRECTA DE CREACIÓN Y PUBLICACIÓN AL SUBIR A PRODUCCIÓN:** EL CAMPO `date` DEL FRONTMATTER EN EL ARCHIVO `.md` DEBE REFLEJAR OBLIGATORIAMENTE LA FECHA EXACTA Y ACTUAL (`YYYY-MM-DD`) DEL DÍA EN QUE EL BLOG SE SUBE A PRODUCCIÓN / SE PUBLICA EN EL REPOSITORIO. SI UN ARTÍCULO FUE REDACTADO DÍAS ANTES DURANTE LA FASE DE BORRADOR O AJUSTES, ANTES DE SUBIRLO AL REPO SE DEBE ACTUALIZAR EL CAMPO `date` A LA FECHA EXACTA DEL DÍA DE SUBIDA.
> 4. **NO SE HACE PR A MENOS QUE SE PIDA LITERALMENTE EN EL CHAT / NO SE HACE PUSH A MAIN A MENOS QUE SE PIDA ESPECÍFICAMENTE:** ESTÁ ESTRICTAMENTE PROHIBIDO ABRIR PULL REQUESTS O HACER PUSH A LA RAMA `main` (O A CUALQUIER RAMA REMOTA) DE FORMA AUTOMÁTICA. SOLO SE HARÁ PUSH O PR SI EL USUARIO LO PIDE DE MANERA EXPRESA Y LITERAL EN EL CHAT.
> 5. **MIENTRAS NO SE PIDA SUBIR AL REPO ESTAMOS EN FASE DE AJUSTES EN EL CONTENT:** MIENTRAS NO SE ORDENE EXPLÍCITAMENTE SUBIR AL REPOSITORIO, EL TRABAJO SE MANTIENE LOCALMENTE (USANDO `draft: true` O EN REVISIÓN LOCAL) Y SE ASUME QUE ESTAMOS EN FASE DE ITERACIÓN, AJUSTES Y REVISIÓN DEL CONTENIDO Y DE LA IMAGEN.
> 6. **PROHIBIDO REUTILIZAR UNA MISMA IMAGEN PARA VARIOS BLOGS (UNA IMAGEN NUEVA Y ÚNICA POR CADA BLOG):** CADA ARTÍCULO DE BLOG DEBE TENER OBLIGATORIAMENTE SU PROPIA IMAGEN ORIGINAL CREADA EXCLUSIVAMENTE PARA ÉL (`public/blog/{slug}/portada.webp`). ESTÁ TOTALMENTE PROHIBIDO REUTILIZAR, DUPLICAR, RE-CODIFICAR, RECORTAR O COMPARTIR UNA MISMA IMAGEN BASE EN MÁS DE UN BLOG. EL VALIDADOR AUTOMATIZADO BLOQUEARÁ CUALQUIER IMAGEN QUE SEA IDÉNTICA POR HASH SHA-256 CONTRA OTRAS PORTADAS EXISTENTES.
> 7. **CUMPLIMIENTO LEGAL ESTRICTO (FCRA / CROA / FDCPA):** CERO PROMESAS ILEGALES O NO VERIFICABLES. ESTÁ TERMINANTEMENTE PROHIBIDO PROMETER INCREMENTOS ESPECÍFICOS DE SCORE (EJ. "SUBE 100 PUNTOS GARANTIZADOS"), PLAZOS GARANTIZADOS DE REPARACIÓN, O AFIRMAR QUE SE "BORRA CUALQUIER HISTORIAL NEGATIVO LEGÍTIMO". SE DEBE EDUCAR SOBRE EL DERECHO DEL CONSUMIDOR A DISPUTAR INFORMACIÓN INEXACTA POR SU CUENTA DE FORMA GRATUITA BAJO LA LEY FEDERAL FCRA.
> 8. **VARIEDAD VISUAL Y RITMO EDITORIAL (PUNTOS DE VEZ EN CUANDO, NÚMEROS SOLO EN CASOS ESPECIALES QUE LO REQUIERAN):** CADA ARTÍCULO DEBE TENER RITMO Y DINAMISMO VISUAL EQUILIBRADO. NI SATURAR CADA SECCIÓN CON LISTAS (EVITAR LISTITIS), NI PRESENTAR TODO COMO UN BLOQUE PLANO Y MONÓTONO DE PARED A PARED. COMBINAR PÁRRAFOS NARRATIVOS FLUIDOS, 1 O 2 LISTAS CON GUION ESTÁNDAR (`- `) BIEN UBICADAS (CON SANGRÍA NATIVA A LA DERECHA), CITAS DESTACADAS (`> **Dato clave:** ...`), TABLAS COMPARATIVAS Y FAQS ESTRUCTURADAS. LAS LISTAS NUMERADAS (`1.`, `2.`, `3.`) QUEDAN RESERVADAS EXCLUSIVAMENTE PARA CASOS ESPECIALES QUE IMPLIQUEN UN ORDEN CRONOLÓGICO O PASO A PASO ESTRICTO (EJ. PROTOCOLO DE 5 PASOS PARA DISPUTAR UN ERROR EN TU REPORTE). ESTÁ TOTALMENTE PROHIBIDO USAR EL CARÁCTER UNICODE `•` O `●`: EN MARKDOWN LAS VIÑETAS SE ESCRIBEN SIEMPRE CON GUION ESTÁNDAR (`- `) PARA QUE EL NAVEGADOR LAS RENDERICE CON SU SANGRÍA HACIA LA DERECHA (`padding-left: 24px`) Y NO SE APLASTEN EN UN PÁRRAFO.

Esta Skill define el procedimiento riguroso y resiliente para redactar, estructurar, ilustrar y validar artículos de blog profesionales para **Mi Crédito 786** (`micredito786.com`). Todo artículo generado debe cumplir con estándares estrictos de valor educativo para la comunidad hispana en Estados Unidos, optimización SEO, cumplimiento legal regulatorio, unicidad visual y validación automatizada previa a su publicación.

---

## 📚 Contexto de Negocio, Marco Regulatorio y Audiencia

Mi Crédito 786 es una plataforma especializada en educación financiera, consultoría y optimización del crédito para la comunidad latina en Estados Unidos. El blog tiene una función educacional y de generación de confianza, orientando al lector sobre cómo navegar el sistema financiero estadounidense (bureaus, reportes, modelos FICO vs VantageScore, tarjetas de crédito, colecciones y préstamos).

### ⚖️ Marco Regulatorio Obligatorio (CROA, FCRA, FDCPA):
- **FCRA (Fair Credit Reporting Act):** Ley federal que otorga al consumidor el derecho a la exactitud, privacidad y disputa de información en los reportes de crédito. Los bureaus (Equifax, Experian, TransUnion) disponen por lo general de 30 días para investigar. El consumidor puede obtener sus reportes oficiales gratis a través de `AnnualCreditReport.com`.
- **CROA (Credit Repair Organizations Act):** Prohíbe cualquier declaración engañosa o no fundamentada. **NUNCA prometer un score específico** (ej. "subirás 150 puntos"), **NUNCA prometer eliminar deudas legítimas verificadas**, y **NUNCA garantizar resultados ni plazos exactos**. Siempre recordar que el usuario puede realizar el proceso por su cuenta sin costo.
- **FDCPA (Fair Debt Collection Practices Act):** Protege contra abusos, amenazas y acoso por parte de agencias de cobro (collections).

---

## 🎯 Requisitos de Entrada

El usuario proporcionará o se acordará con él:
- **Tema o Título propuesto** (Ej: "Cómo eliminar cuentas en colección de tu reporte de crédito").
- **Palabra clave principal** y 2-3 variantes en español orientadas a búsquedas de latinos en USA.
- **Categoría** (una de las cuatro categorías base de Mi Crédito 786):
  1. `Reporte de crédito`
  2. `Score de crédito`
  3. `Derechos del consumidor`
  4. `Finanzas personales`
- **Slug propuesto:** Minúsculas, números y guiones, sin acentos ni ñ (Ej: `como-eliminar-cuentas-en-coleccion`).

---

## 📁 Estructura de Archivos del Proyecto

El blog en Next.js procesa directamente archivos Markdown en `content/blog/`:

```
landing/
├── content/blog/
│   ├── _plantilla.md                   ← Plantilla base de referencia
│   └── {slug}.md                       ← Artículo completo (Frontmatter + Markdown en español)
├── public/blog/
│   └── {slug}/
│       └── portada.webp                ← Imagen de portada (1200×630 px en formato .webp)
├── src/lib/blog/
│   ├── posts.ts                        ← Motor de lectura, parsing y validación en build
│   └── markdown.ts                     ← Renderizador HTML y tabla de contenidos
├── scripts/
│   └── validate-blog-entry.mjs         ← Validador automatizado CLI
└── package.json
```

---

## 📄 1. Esquema Exacto del Frontmatter (`content/blog/{slug}.md`)

Todo archivo `{slug}.md` debe iniciar con un bloque frontmatter YAML estrictamente tipado:

```yaml
---
title: "Cómo disputar un error en tu reporte de crédito paso a paso"
metaTitle: "Cómo Disputar Errores en tu Reporte de Crédito: Guía Práctica"
description: "Aprende a disputar información errónea en Equifax, Experian y TransUnion. Conoce tus derechos bajo la ley FCRA y protege tu historial crediticio hoy."
date: 2026-09-26
author: "Equipo Mi Crédito 786"
category: "Reporte de crédito"
tags:
  - reporte de crédito
  - FCRA
  - disputas de crédito
  - bureaus
keywords:
  - como disputar errores en reporte de credito
  - disputa equifax experian transunion
  - carta de disputa de credito
image: "/blog/{slug}/portada.webp"
imageAlt: "Documento de reporte de crédito con lupa y sello de verificación en color verde"
startHere: 1
summary:
  - "Tienes derecho por ley federal (FCRA) a que tu información sea 100% exacta y verificable."
  - "Los bureaus tienen generalmente 30 días para investigar y responder a tu disputa."
  - "Disputar errores legítimos puede prevenir daños injustos en tu puntaje de crédito."
draft: true
faqs:
  - question: "¿Cuánto tiempo tarda un bureau en responder a una disputa?"
    answer: "Bajo la ley FCRA, los bureaus de crédito disponen normalmente de 30 días desde la recepción de la disputa para investigar los datos con el acreedor y notificarte los resultados."
  - question: "¿Disputar un error en mi reporte de crédito cuesta dinero?"
    answer: "No. Disputar errores directamente con los bureaus de crédito (Equifax, Experian y TransUnion) es un derecho federal totalmente gratuito."
  - question: "¿Qué sucede si el acreedor no puede verificar la información?"
    answer: "Si el bureau o el acreedor no pueden verificar la exactitud de los datos dentro del plazo legal estipulado, la información debe ser corregida o removida por completo del reporte."
---
```

### 📋 Reglas de los Campos Frontmatter:
| Campo | Tipo | Estado | Regla / Restricción |
|---|---|---|---|
| `title` | string | **Obligatorio** | H1 del artículo. Palabra clave al inicio, natural. 30 a 60 caracteres. |
| `metaTitle` | string | Opcional | Usar si `title` excede 60 caracteres. 50 a 60 caracteres, sin añadir la marca (se agrega sola). |
| `description` | string | **Obligatorio** | 120 a 160 caracteres. Explica qué aprenderá el lector y por qué le conviene actuar. |
| `date` | fecha | **Obligatorio** | Formato `AAAA-MM-DD`. Debe coincidir con la fecha de publicación al subir. |
| `updated` | fecha | Opcional | Usar al hacer modificaciones sustanciales posteriores a la fecha original. |
| `author` | string | Opcional | Por defecto `"Equipo Mi Crédito 786"`. |
| `category` | string | **Obligatorio** | Debe ser exactamente una de las cuatro categorías base. |
| `tags` | string[] | **Obligatorio** | 2 a 5 etiquetas en minúsculas para enlazar artículos relacionados. |
| `keywords` | string[] | Opcional | Palabra clave principal y 2-3 variaciones de búsqueda. |
| `image` | string | **Obligatorio** | Ruta exacta: `"/blog/{slug}/portada.webp"`. Solo imagen real (.webp); SVG no permitido. El build falla si falta o no existe en disco. |
| `imageAlt` | string | **Obligatorio** | Descripción visual y accesible de lo que se ilustra en la imagen. |
| `startHere` | número (1-3) | Opcional | Asigna prioridad en la sección "Empieza por estas guías" del home del blog. |
| `summary` | string[] | Recomendado | 2 a 4 oraciones cortas para el recuadro destacado "Resumen en 30 segundos". |
| `draft` | boolean | **Obligatorio en edición** | `true` durante redacción y revisión; `false` solo cuando se aprueba para publicar. |
| `faqs` | object[] | **Obligatorio** | 3 a 6 FAQs reales de búsqueda. Cada una con `question` y `answer` (2-4 frases directas). |

---

## 🖼️ 2. Estándar Visual y Protocolo de Portadas

Toda entrada debe contar con su imagen de portada en `public/blog/{slug}/portada.webp`.

### 📐 Especificaciones de la Imagen:
- **Dimensiones:** `1200 × 630` px (relación de aspecto 1.91:1 optimizada para Open Graph, Twitter Card y previsualización web).
- **Formato:** `.webp` de alta compresión y calidad (~85-90%).
- **Ruta física:** `public/blog/{slug}/portada.webp`.
- **Garantía de Unicidad:** Cada post tiene su propia imagen. Queda prohibido clonar o reutilizar portadas de otros posts.

### 🎨 Generación de la Portada:
- **Prohibido usar ilustraciones SVG o generadores vectoriales.** El generador `pnpm blog:portadas` fue eliminado y el build rechaza portadas `.svg` o artículos sin portada.
1. **Generación con `generate_image`:**
   - Si se genera una imagen fotográfica/editorial premium con `generate_image`:
     - **Estilo:** Fotografía corporativa hiperrealista o diseño editorial financiero premium.
     - **Sujetos:** Profesionales y familias latinas en EE.UU. revisando documentos financieros, escritorios con reportes de crédito nítidos, laptops con paneles de métricas limpias, llaves de hogar o tarjetas de crédito con acabados sobrios.
     - **Cero clichés de IA:** Cero texto ilegible o distorsionado en la imagen, cero manos con deformidades, cero marcas registradas falsas.
     - Redimensionar y guardar en `public/blog/{slug}/portada.webp`.

---

## ✍️ 3. Estándar de Redacción, Ritmo Editorial y Filtro Anti-IA

### 🚫 Filtro Anti-Clichés de IA (Prohibidos en Título, Descripción y Cuerpo)
El validador automatizado bloqueará y rechazará cualquier artículo que contenga estas frases o estructuras trilladas:
- ❌ *"En el mundo digital actual..."*
- ❌ *"En la era digital en la que vivimos..."* / *"En la era digital..."*
- ❌ *"Hoy en día, en un mundo donde..."*
- ❌ *"En este fascinante artículo..."*
- ❌ *"En conclusión,"* / *"En resumen,"* / *"Para concluir,"*
- ❌ *"Un faro de esperanza..."* / *"Un faro de luz..."*
- ❌ *"Caleidoscopio..."* / *"Tapiz..."* / *"Desentrañar..."*
- ❌ *"Sinfonía..."* / *"Adentrémonos en..."* / *"Un testimonio de..."*

### ✍️ Ritmo Editorial y Variedad Visual:
Un artículo de Mi Crédito 786 debe ser didáctico, empático y fácil de escanear por cualquier usuario:
1. **Sin H1 en el cuerpo:** Está prohibido usar `# ` en el Markdown. El título del frontmatter ya es el H1 del template.
2. **Estructura jerárquica:** Secciones principales con `## ` y subsecciones con `### `.
3. **Sangría adecuada con guion estándar (`- `):**
   - ✅ Usar siempre guion estándar `- ` para listas de viñetas.
   - 🚫 **PROHIBIDO TERMINANTEMENTE** usar los caracteres Unicode `•` o `●`. En Markdown no activan la lista nativa (`<ul><li>`), pierden el `padding-left: 24px` y se aplastan en un solo renglón.
4. **Listas con moderación (evitar la "listitis"):**
   - No conviertas el post en una colección de listas interminables.
   - Alterna párrafos fluidos de 2 a 4 oraciones bien conectadas con **1 o 2 listas concisas** (3 a 5 puntos) en secciones de pasos o recomendaciones.
5. **Listas numeradas (`1.`, `2.`, `3.`):**
   - Reservadas **exclusivamente** para secuencias estrictamente cronológicas o pasos obligatorios (ej. los pasos formales para disputar una cuenta ante un bureau). Para conceptos independientes, usar guion `- `.
6. **Citas y cajas destacadas:**
   - Incluir 1 o 2 llamadas de atención con `> **Dato clave:** ...`. En la interfaz web se renderizan como una elegante caja verde destacada.
7. **Tablas comparativas:**
   - Utilizar tablas Markdown (`| Columna 1 | Columna 2 |`) cuando se comparen plazos, bureaus, modelos de score o tipos de cuentas.
8. **FAQs integradas:**
   - Las FAQs se definen **únicamente** en el frontmatter (`faqs:`). No se redactan de nuevo en el cuerpo del artículo, pues el componente de React las inyecta automáticamente con formato de acordeón y metadatos estructurados JSON-LD (`FAQPage`).
9. **Enlaces y llamados a la acción (CTA):**
   - Enlazar orgánicamente al menos a otro artículo del blog (`/blog/{otro-slug}`).
   - Enlazar a la auditoría gratuita: `[agenda tu auditoría gratuita de crédito](/#agendar)`.
   - No es necesario saturar con despedidas comerciales: la plantilla del post ya incrusta automáticamente la tarjeta final de conversión *"Agenda tu auditoría gratis"*.

---

## 🛡️ 4. Validación Automatizada Obligatoria

Antes de presentar el trabajo como finalizado o preparar cualquier cambio en Git, es **OBLIGATORIO** ejecutar el script validador desde la terminal:

```bash
# Validar el post específico recién creado:
node scripts/validate-blog-entry.mjs {slug}

# O mediante el comando de package.json:
pnpm blog:validar {slug}

# O comprobar la integridad de todos los posts del blog:
node scripts/validate-blog-entry.mjs --all
```

### ✅ El validador verifica automáticamente:
1. **Existencia del archivo:** `content/blog/{slug}.md`.
2. **Slug válido:** Minúsculas, números y guiones en formato kebab-case.
3. **Frontmatter completo:** Presencia y longitud de `title`, `metaTitle`, `description`, `date`, `category`.
4. **Categoría autorizada:** Pertenencia estricta a una de las 4 categorías permitidas.
5. **Integridad de FAQs:** Estructura de array con `question` y `answer`.
6. **Imagen y accesibilidad:** Existencia del archivo `public/blog/{slug}/portada.webp` y presencia de `imageAlt`.
7. **Unicidad de imagen por hash:** Comprobación SHA-256 contra todas las demás portadas del repositorio para impedir imágenes idénticas o recicladas.
8. **Cumplimiento Anti-IA:** Ausencia de frases trilladas o clichés de redacción automática.
9. **Cumplimiento Legal CROA:** Ausencia de afirmaciones ilegales (promesas de score garantizado, borrado de deudas legítimas, etc.).
10. **Formato Markdown:** Ausencia de `# ` (H1) en el cuerpo y ausencia de caracteres Unicode `•`/`●`.
11. **Enlaces internos:** Presencia de enlace hacia la auditoría gratuita `/#agendar`.

Si el script devuelve algún error (`❌ ERRORES`), debe corregirse de inmediato hasta obtener salida exitosa (`0 errores`).

---

## 🔄 5. Flujo de Trabajo Paso a Paso

1. **Definición y Slug:**
   - Comprobar que el slug no exista en `content/blog/`.
   - Definir la categoría correspondiente y las palabras clave objetivo para la audiencia hispana en EE.UU.
2. **Generación de Imagen de Portada:**
   - Generar la portada y guardarla en `public/blog/{slug}/portada.webp`.
   - Configurar `image: "/blog/{slug}/portada.webp"` e `imageAlt` en el frontmatter (ambos obligatorios).
3. **Redacción del Contenido:**
   - Crear `content/blog/{slug}.md` con su frontmatter completo (`draft: true` durante la fase de trabajo).
   - Escribir el contenido respetando el ritmo editorial, cajas `> **Dato clave:**`, tablas comparativas y enlaces internos.
4. **Validación Automatizada:**
   - Ejecutar `node scripts/validate-blog-entry.mjs {slug}`.
   - Corregir cualquier advertencia o error hasta que la validación pase al 100%.
5. **Resumen en el Chat para el Usuario:**
   - Presentar un resumen completo con:
     - Título y categoría.
     - Meta descripción y keywords.
     - Puntos clave abordados y preguntas frecuentes (FAQs).
     - Ruta y descripción de la imagen generada.
   - Permanecer en fase local de iteración y ajustes de contenido hasta confirmación expresa del usuario.
6. **Flujo de Git y Pull Request (ÚNICAMENTE SI SE SOLICITA LITERALMENTE EN EL CHAT):**
   - **NO** hacer push a `main` a menos que se pida específicamente.
   - **NO** crear PR a menos que se pida literalmente en el chat.
   - Si el usuario solicita explícitamente subir o crear PR:
     - Cambiar `draft: false` en el frontmatter.
     - **Actualizar fecha:** Verificar que `date` tenga la fecha actual exacta (`YYYY-MM-DD`).
     - Crear rama de feature: `git checkout -b blog/{slug}`.
     - Añadir los archivos: `git add content/blog/{slug}.md public/blog/{slug}/portada.webp`.
     - Commit estructurado: `git commit -m "feat(blog): add article {slug}"`.
     - Subir la rama: `git push -u origin blog/{slug}`.
     - Abrir PR: `gh pr create --title "📝 Blog: {Título}" --body "..."` (o proporcionar URL si `gh` no está configurado).
