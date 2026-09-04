// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Dominio propio. Vercel usa la versión con www como principal y redirige la otra.
  site: 'https://www.franciscoalvarez.dev',
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
      // Fuera la 404 y la raíz (solo redirige por idioma y lleva noindex).
      filter: (page) => !page.endsWith('/404/') && page !== 'https://www.franciscoalvarez.dev/',
    }),
  ],
});
