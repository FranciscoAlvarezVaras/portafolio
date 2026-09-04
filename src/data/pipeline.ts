/**
 * Arquitecturas del diagrama interactivo.
 *   reference → versión agnóstica de nube (también se usa como anticipo en la portada)
 *   gcp       → versión detallada con servicios de Google Cloud
 */
export { reference } from './pipeline-reference';
export { gcp } from './pipeline-gcp';
export type { Architecture, PipelineNode, Edge, Column, LayerKey, Failure } from './pipeline-types';
