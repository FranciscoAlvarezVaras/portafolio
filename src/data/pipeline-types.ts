import type { Lang } from '../i18n/ui';

export type L = Record<Lang, string>;

/**
 * Qué pasa aguas abajo si la pieza desaparece:
 *   stops    → las piezas que dependen de ella se quedan sin datos
 *   corrupts → siguen recibiendo datos, pero sin validar / sin transformar
 *   partial  → falta una fuente o un enriquecimiento: los datos llegan incompletos
 *   latent   → nada se rompe hoy, pero las piezas que protege quedan en riesgo
 */
export type Failure = 'stops' | 'corrupts' | 'partial' | 'latent';

/** Clave de capa; decide el color de la pieza. */
export type LayerKey = 'sources' | 'ingest' | 'process' | 'storage' | 'transform' | 'consume' | 'cross';

export interface Evidence {
  /** slug de la ficha de proyecto en este sitio */
  project: string;
  title: L;
  note: L;
}

export interface PipelineNode {
  id: string;
  layer: LayerKey;
  label: L;
  tool: L;
  tools: string[];
  desc: L;
  ifRemoved: L;
  failure: Failure;
  /** piezas que esta orquesta o protege (transversales) */
  controls?: string[];
  evidence: Evidence[];
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface Edge {
  from: string;
  to: string;
  /** etiqueta corta sobre la flecha (formato, protocolo, condición) */
  label?: L;
}

export interface Column {
  key: LayerKey;
  label: L;
  x: number;
}

/** Ficha explicativa de una capa, visible sin pulsar nada. */
export interface LayerCard {
  key: LayerKey | 'cross';
  title: L;
  what: L;
  why: L;
  services: string[];
  mine: L;
}

/** Un paso del "recorrido de un dato": texto + pieza que ilumina. */
export interface StoryStep {
  node: string;
  title: L;
  text: L;
}

export interface Scenario {
  node: string;
  label: L;
}

export interface Architecture {
  id: string;
  name: L;
  tagline: L;
  intro: L;
  columns: Column[];
  nodes: PipelineNode[];
  edges: Edge[];
  canvas: { width: number; height: number };
  layers: LayerCard[];
  story: StoryStep[];
  scenarios: Scenario[];
}

/* Evidencias reutilizables: enlazan a las fichas de proyecto. */
const mk = (project: string, title: L) => (note: L): Evidence => ({ project, title, note });

export const ev = {
  tfm: mk('tfm-quantia', { es: 'TFM · Rotación de empleados', en: 'Thesis · Employee churn' }),
  cloudrisk: mk('cloudrisk', { es: 'CloudRISK', en: 'CloudRISK' }),
  prices: mk('monitor-precios', { es: 'Monitor de precios', en: 'Price monitor' }),
  air: mk('calidad-aire-valencia', { es: 'Calidad del aire', en: 'Air quality' }),
  seo: mk('analitica-seo', { es: 'Analítica SEO', en: 'SEO analytics' }),
  hub: mk('edem-student-hub', { es: 'EDEM Student Hub', en: 'EDEM Student Hub' }),
  hotel: mk('hoteles-cumberland', { es: 'Hoteles Cumberland', en: 'Hoteles Cumberland' }),
};
