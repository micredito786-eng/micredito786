---
# ─────────────────────────────────────────────────────────────────────────────
# PLANTILLA DE ARTÍCULO — copia este archivo y renómbralo.
# Los archivos que empiezan con "_" NO se publican.
#
# El NOMBRE DEL ARCHIVO es la URL:  como-subir-tu-score.md  →  /blog/como-subir-tu-score
#   minúsculas, números y guiones; sin acentos, ñ ni espacios.
# ─────────────────────────────────────────────────────────────────────────────

# [OBLIGATORIO] H1 visible del artículo. Claro y con la palabra clave principal.
title: "Título del artículo con la palabra clave principal"

# [OPCIONAL] Meta título para Google si el title es muy largo. 50-60 caracteres.
# No pongas la marca: se agrega sola " | Mi Crédito 786™".
metaTitle: "Meta título de 50 a 60 caracteres con la palabra clave"

# [OBLIGATORIO] Meta descripción: 140-160 caracteres. Beneficio + llamada a la acción.
# También se usa como entradilla bajo el H1 y en la tarjeta del listado.
description: "Resumen de 140 a 160 caracteres que explica qué va a aprender el lector y por qué le conviene leer este artículo hoy."

# [OBLIGATORIO] Fecha de publicación (AAAA-MM-DD).
date: 2026-01-01

# [OPCIONAL] Fecha de la última actualización importante. Google la muestra y la usa el sitemap.
# updated: 2026-02-01

# [OPCIONAL] Por defecto "Equipo Mi Crédito 786".
# author: "Nombre Apellido"

# [OBLIGATORIO] Una sola categoría. Reutiliza las existentes para agrupar:
#   Reporte de crédito · Score de crédito · Derechos del consumidor · Finanzas personales
category: "Reporte de crédito"

# [OPCIONAL] 2-5 etiquetas. Sirven para "Sigue aprendiendo" (artículos relacionados).
tags:
  - score de crédito
  - FCRA

# [OPCIONAL] Palabras clave para la meta keywords. Si no se ponen, se usan las tags.
keywords:
  - palabra clave principal
  - variante de la palabra clave

# [OBLIGATORIO] Portada: foto real en public/blog/<nombre-del-archivo>/portada.webp (1200×630).
# Única por artículo. No se permiten SVG: el build falla si falta o no existe el archivo.
image: "/blog/nombre-del-archivo/portada.webp"
# [OBLIGATORIO] Descripción de lo que se ve en la portada.
imageAlt: "Descripción de lo que se ve en la imagen"

# [OPCIONAL] 2-4 frases cortas para el recuadro "Resumen en 30 segundos" al inicio del artículo.
# summary:
#   - "Idea principal número uno."
#   - "Idea principal número dos."

# [OPCIONAL] 1, 2 o 3: posición en "Empieza por estas guías" del índice del blog.
# Úsalo solo en las guías básicas para quien llega por primera vez.
# startHere: 1

# [OPCIONAL] true = borrador: se ve en `pnpm dev` pero NO se publica.
draft: true

# [OPCIONAL] 3-6 preguntas reales que la gente busca en Google.
# Se muestran al final del artículo y generan el schema FAQPage.
# Respuestas cortas (2-4 frases). Admiten **negritas** y [enlaces](/ruta).
faqs:
  - question: "¿Pregunta que la gente busca en Google?"
    answer: "Respuesta directa en la primera frase. Luego un poco de contexto."
  - question: "¿Otra pregunta relacionada?"
    answer: "Respuesta corta y clara."
---

Párrafo de introducción (2-4 frases). Incluye la **palabra clave principal** en las primeras 100 palabras y explica qué problema resuelve el artículo.

## Primer subtítulo (H2) con una variante de la palabra clave

No uses `#` (H1): el título del artículo ya es el H1. Usa `##` para secciones y `###` para subsecciones; así se arma solo el índice "En este artículo".

### Subsección (H3)

- Listas cortas y fáciles de escanear
- Una idea por punto

## Segundo subtítulo (H2)

Enlaza a otros artículos del blog ([ejemplo](/blog/otro-articulo)) y a la auditoría gratuita ([agenda aquí](/#agendar)). Los enlaces a otros sitios se abren en una pestaña nueva automáticamente.

| Tabla | Soportada |
|---|---|
| Sí | ✅ |

> **Dato clave:** las citas (líneas que empiezan con `>`) se muestran como una caja verde destacada. Úsalas 1-2 veces por artículo.

## Conclusión

Resume en 2-3 frases e invita a agendar la auditoría gratuita. Recuerda el tono legal (CROA/FCRA): nunca prometas un score concreto ni "borrar todo".
