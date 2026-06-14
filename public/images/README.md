# Imágenes de las tarjetas de Offer

`specialty.jpg` y `commercial.jpg` son **placeholders** (gradiente verde con la
etiqueta "PLACEHOLDER"). Sustitúyelos por fotografías reales **manteniendo el
mismo nombre y proporción**; no hay que tocar el código.

| Archivo | Dónde se usa | Tamaño recomendado | Proporción |
|---|---|---|---|
| `specialty.jpg` | Tarjeta "Café de especialidad" (`components/Offer.tsx`) | 1200×900 | 4:3 |
| `commercial.jpg` | Tarjeta "Café comercial" (`components/Offer.tsx`) | 1200×900 | 4:3 |

La foto del hero vive aparte en `public/hero.jpg` (se usa en `components/Hero.tsx`
y en el Open Graph). Es interina y de baja resolución (640×640): conviene
reemplazarla por una de ~1920×1280 (3:2).

Notas:
- `next/image` genera automáticamente AVIF/WebP y los tamaños responsive (ver `next.config.mjs`).
- Formatos válidos: `.jpg`, `.png` o `.webp` (si cambias la extensión, actualiza la ruta en el componente).
