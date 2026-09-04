// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Dirección pública actual. Cambia esto (y public/robots.txt) por tu dominio propio cuando lo compres.
  site: 'https://portafolio-sigma-mocha-57.vercel.app',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-ES', en: 'en-GB' } },
      filter: (page) => !page.endsWith('/404/'),
    }),
  ],
});
