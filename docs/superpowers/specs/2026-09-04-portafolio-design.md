# Portafolio de Francisco Álvarez Varas · diseño

Fecha: 2026-09-04. Estado: aprobado por Francisco en conversación; implementación en curso.

## Objetivo

Una web personal que, en cinco segundos, posicione a Francisco como **Analytics Engineer / Data Analyst** ante reclutadores de Valencia y remoto, y que demuestre método y evidencia en vez de listar repositorios.

## Decisiones tomadas

| Decisión | Elección | Motivo |
|---|---|---|
| Posicionamiento | Analytics Engineer · Data Analyst | Encaja con 3 años de experiencia pagada y con el mercado local. Los proyectos de GCP y Terraform se presentan como "analista que además construye la tubería". |
| Idioma | Español por defecto, inglés completo con selector | Cubre pymes españolas e internacionales; el selector demuestra el bilingüismo. |
| Hosting | Vercel con dominio propio | Ya lo usa con Cumberland; el dominio se compra aparte (pendiente). |
| Stack | Astro 7, estático, sin framework de UI | Carga instantánea, SEO, i18n nativo, proyectos en Markdown. |
| Cumberland | Enlace a producción, capturas y repo público | Repo verificado sin secretos ni base de datos en el historial. |

## Revisión del mismo día: sitio de varias páginas

Tras ver la primera versión, Francisco pidió dos cambios que sustituyen la portada única:

1. **Varias páginas** para que la visita sea más dinámica: inicio corto, "Cómo trabajo" con el diagrama completo, proyectos con filtros por tipo, máster, y "Sobre mí" con experiencia, stack, formación y contacto. Transiciones entre páginas con el ClientRouter de Astro y aparición progresiva de tarjetas al hacer scroll.
2. **Hero cinematográfico**: fondo con trayectorias de datos animadas, pulsos, halos difuminados con deriva lenta, zoom tipo cámara, viñeta y grano de película; el texto entra por planos como una secuencia de títulos. Todo se desactiva con `prefers-reduced-motion`.

El diagrama gana botones de escenario ("¿y si falla la orquestación?") y un recorrido guiado automático, y sus flechas llevan puntos de datos en movimiento que se apagan o cambian de color según el estado. La paleta pasó a la de Claude sobre fondo blanco, sin modo oscuro.

La sección siguiente describe la portada única original y se conserva como historial.

## Estructura (versión inicial, sustituida)

**Portada** (`/es/` y `/en/`), en este orden:

1. Hero: nombre, titular, frase de posicionamiento, CTAs (proyectos, CV, LinkedIn), estado y ubicación, tres datos clave.
2. **Cómo trabajo**: diagrama interactivo de un pipeline end-to-end (ver abajo).
3. Proyectos destacados: seis tarjetas con enlace a ficha.
4. Bloque del máster: hitos (DP1, DP2, DP3, hackathon GFT, Londres, TFM) y rejilla de prácticas por módulo con enlace a repo cuando es público.
5. Experiencia: puestos de datos, con la etapa anterior plegada.
6. Stack agrupado como piensa un Analytics Engineer.
7. Formación y certificaciones en curso.
8. Contacto: email, LinkedIn, GitHub, CV. Sin formulario.

**Fichas de proyecto** (`/es/proyectos/<slug>/`, `/en/projects/<slug>/`) con estructura fija: contexto, problema, qué hice yo, arquitectura, resultado, aprendizaje. Metadatos en frontmatter: rol, periodo, equipo, resultado, stack, enlaces, imagen.

Proyectos y orden: tfm-quantia, monitor-precios, calidad-aire-valencia, analitica-seo, cloudrisk, hoteles-cumberland (destacados); edem-student-hub (solo ficha).

## Diagrama interactivo "pipeline end-to-end"

- Datos en `src/data/pipeline.ts`: 16 piezas en cinco columnas (fuentes, ingesta, lake, warehouse, consumo) más cuatro transversales (orquestación, gobierno, infraestructura como código, monitorización). Cada pieza tiene descripción, herramientas, evidencias enlazadas a fichas y un texto "qué pasa si falta".
- Render en SVG en build; interactividad en un script sin dependencias.
- Al pulsar una pieza: panel con qué hace, herramientas y dónde la ha construido.
- Al quitar una pieza: se propaga el efecto por el flujo de datos. Modos de fallo: `stops` (aguas abajo sin datos), `corrupts` (datos no fiables), `partial` (datos incompletos), `latent` (riesgo sin rotura inmediata). Un nodo con varias entradas queda "incompleto" si solo falla alguna.
- Accesible por teclado; en móvil el diagrama hace scroll horizontal y el panel baja.

## Técnica

- Astro 7 con `i18n.prefixDefaultLocale = true`; raíz `/` redirige por idioma del navegador.
- Content collection `projects` con loader glob; id `es/<slug>` o `en/<slug>`.
- Textos de interfaz en `src/i18n/ui.ts`; datos del perfil en `src/data/profile.ts`.
- CSS propio con tokens (paleta del README de GitHub: burdeos, esmeralda, marino, crema), modo oscuro por `prefers-color-scheme`.
- Sitemap, robots, hreflang, Open Graph, JSON-LD de persona.
- Sin analítica de terceros en la v1.

## Fuera de alcance (v1)

Blog, formulario de contacto, demo viva con infraestructura encendida, animaciones pesadas.

## Pendientes que dependen de Francisco

- Comprar dominio y conectarlo en Vercel; actualizar `site` en `astro.config.mjs` y `robots.txt`.
- Hacer públicos: `hotel-web`, `Data-Project-1-Calidad-del-aire`, `PYTHON_PRACTICE` y los repos de práctica; añadir sus URLs en `profile.ts` y en las fichas.
- Subir a GitHub los 30 commits locales del monitor de precios (hoy solo existen en el clon local).
- Revisar el texto de las fichas de Calidad del aire y Analítica SEO, escritas a partir del README y del CV.
- Foto de perfil opcional e imagen Open Graph.
- CV en inglés alineado con el titular de la web (hoy dice Data Engineer).
