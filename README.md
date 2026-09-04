# Portafolio · Francisco Álvarez Varas

Web personal bilingüe (ES/EN) construida con [Astro](https://astro.build) y desplegada en Vercel.

## Comandos

```bash
npm install        # dependencias
npm run dev        # servidor local en http://localhost:4321
npm run build      # genera el sitio estático en dist/
npm run preview    # sirve dist/ para comprobarlo
```

## Dónde cambiar qué

| Quiero cambiar… | Archivo |
|---|---|
| Textos de la interfaz (titular, botones, secciones) en los dos idiomas | `src/i18n/ui.ts` |
| Experiencia, stack, formación, hitos del máster, repos de práctica | `src/data/profile.ts` |
| Piezas del diagrama end-to-end, sus textos y evidencias | `src/data/pipeline.ts` |
| Un proyecto (ficha completa) | `src/content/projects/es/<slug>.md` y `src/content/projects/en/<slug>.md` |
| Añadir un proyecto nuevo | Copia una ficha existente en las dos carpetas con el mismo `<slug>`; `featured: true` lo saca a portada y `order` decide su posición |
| Imágenes de proyectos | `public/img/projects/` |
| CV descargable | `public/cv/Francisco_Alvarez_Varas_CV_ES.pdf` y `..._EN.pdf` |
| Colores y tipografía | `src/styles/global.css` (variables al inicio) |
| Dominio del sitio | `site` en `astro.config.mjs` y `Sitemap` en `public/robots.txt` |

## Estructura

```
src/
├── i18n/ui.ts            textos y rutas por idioma
├── data/                 perfil y modelo del diagrama
├── content/projects/     fichas de proyecto en Markdown (es/ y en/)
├── layouts/Base.astro    <head>, cabecera y pie comunes
├── components/           secciones de la portada y ficha de proyecto
└── pages/
    ├── index.astro       redirige al idioma del navegador
    ├── es/  en/          portada en cada idioma
    └── es/proyectos/[slug].astro · en/projects/[slug].astro
```

El diseño acordado está en `docs/superpowers/specs/2026-09-04-portafolio-design.md`.
