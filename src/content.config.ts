import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Proyectos: un archivo Markdown por proyecto y por idioma.
 *   src/content/projects/es/<slug>.md
 *   src/content/projects/en/<slug>.md
 * El id de cada entrada es "es/<slug>" o "en/<slug>".
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    /** Una frase: el problema o el titular del caso. */
    summary: z.string(),
    /** Resultado o cifra clave, corta. */
    result: z.string().optional(),
    /** Mi rol en el proyecto, corto. */
    role: z.string(),
    period: z.string(),
    team: z.string().optional(),
    /** Categoría que decide el color de la etiqueta. */
    category: z.enum(['analytics', 'engineering', 'product']),
    stack: z.array(z.string()),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    links: z
      .object({
        repo: z.string().url().optional(),
        live: z.string().url().optional(),
        dashboard: z.string().url().optional(),
        docs: z.string().url().optional(),
      })
      .default({}),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = { projects };
