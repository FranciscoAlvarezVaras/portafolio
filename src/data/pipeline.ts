import type { Lang } from '../i18n/ui';

type L = Record<Lang, string>;

/**
 * Modelo del pipeline end-to-end.
 *
 * - `failure` describe qué pasa aguas abajo si la pieza desaparece:
 *     stops    → las piezas que dependen de ella se quedan sin datos
 *     corrupts → siguen recibiendo datos, pero sin validar / sin transformar
 *     partial  → falta una fuente: los datos llegan, pero incompletos
 *     latent   → nada se rompe hoy, pero las piezas que protege quedan en riesgo
 * - `controls`  → piezas que esta orquesta o protege (para orquestación,
 *                 gobierno, infraestructura y monitorización)
 */
export type Failure = 'stops' | 'corrupts' | 'partial' | 'latent';
export type Layer = 'sources' | 'ingest' | 'storage' | 'transform' | 'consume' | 'cross';

export interface Evidence {
  /** slug de la ficha de proyecto en este sitio */
  project: string;
  title: L;
  note: L;
}

export interface PipelineNode {
  id: string;
  layer: Layer;
  label: L;
  tool: L;
  tools: string[];
  desc: L;
  ifRemoved: L;
  failure: Failure;
  controls?: string[];
  evidence: Evidence[];
  /** posición en el lienzo (viewBox 1230 × 620) */
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface Edge {
  from: string;
  to: string;
}

/* Rejilla ------------------------------------------------------------ */
const C = [24, 244, 464, 684, 904]; // x de cada columna
const W = 180;
const H = 64;
export const columnsX = C;

export const layerNames: Record<Layer, L> = {
  sources: { es: 'Fuentes', en: 'Sources' },
  ingest: { es: 'Ingesta', en: 'Ingestion' },
  storage: { es: 'Lake · bronze', en: 'Lake · bronze' },
  transform: { es: 'Warehouse · silver & gold', en: 'Warehouse · silver & gold' },
  consume: { es: 'Consumo', en: 'Consumption' },
  cross: { es: 'Transversal', en: 'Cross-cutting' },
};

/* Evidencias reutilizables ------------------------------------------- */
const ev = {
  tfm: (note: L): Evidence => ({
    project: 'tfm-quantia',
    title: { es: 'TFM · Rotación de empleados', en: 'Thesis · Employee churn' },
    note,
  }),
  cloudrisk: (note: L): Evidence => ({
    project: 'cloudrisk',
    title: { es: 'CloudRISK', en: 'CloudRISK' },
    note,
  }),
  prices: (note: L): Evidence => ({
    project: 'monitor-precios',
    title: { es: 'Monitor de precios', en: 'Price monitor' },
    note,
  }),
  air: (note: L): Evidence => ({
    project: 'calidad-aire-valencia',
    title: { es: 'Calidad del aire', en: 'Air quality' },
    note,
  }),
  seo: (note: L): Evidence => ({
    project: 'analitica-seo',
    title: { es: 'Analítica SEO', en: 'SEO analytics' },
    note,
  }),
  hub: (note: L): Evidence => ({
    project: 'edem-student-hub',
    title: { es: 'EDEM Student Hub', en: 'EDEM Student Hub' },
    note,
  }),
  hotel: (note: L): Evidence => ({
    project: 'hoteles-cumberland',
    title: { es: 'Hoteles Cumberland', en: 'Hoteles Cumberland' },
    note,
  }),
};

/* Nodos --------------------------------------------------------------- */
export const nodes: PipelineNode[] = [
  /* ---------- Fuentes ---------- */
  {
    id: 'src_db',
    layer: 'sources',
    label: { es: 'Sistemas internos', en: 'Internal systems' },
    tool: { es: 'ERP · CRM · PostgreSQL', en: 'ERP · CRM · PostgreSQL' },
    tools: ['PostgreSQL', 'Cloud SQL', 'Excel corporativo'],
    desc: {
      es: 'Las tablas que ya tiene la empresa: RRHH, ventas, reservas. Son la fuente más fiable y también la más sensible, así que se leen con cuentas de solo lectura y se registra qué columnas contienen datos personales.',
      en: 'The tables the company already has: HR, sales, bookings. The most reliable source and also the most sensitive, so they are read with read-only accounts and personal-data columns are tagged.',
    },
    ifRemoved: {
      es: 'Sin los sistemas internos no hay verdad de negocio: el dashboard puede mostrar clima y mercado, pero no quién trabaja aquí ni qué vendemos. Todo lo que hay aguas abajo queda incompleto.',
      en: 'Without internal systems there is no business truth: the dashboard may show weather and market data, but not who works here or what we sell. Everything downstream is incomplete.',
    },
    failure: 'partial',
    evidence: [
      ev.tfm({ es: 'Registros mensuales de RRHH de 130 empleados durante 24 meses', en: 'Monthly HR records for 130 employees over 24 months' }),
      ev.hotel({ es: 'Reservas y huéspedes en PostgreSQL con Prisma', en: 'Bookings and guests in PostgreSQL with Prisma' }),
    ],
    x: C[0], y: 110, w: W, h: H,
  },
  {
    id: 'src_api',
    layer: 'sources',
    label: { es: 'APIs externas', en: 'External APIs' },
    tool: { es: 'Eurostat · Search Console · OpenWeather', en: 'Eurostat · Search Console · OpenWeather' },
    tools: ['REST', 'Python requests', 'Cuotas y reintentos'],
    desc: {
      es: 'Contexto que la empresa no genera: mercado laboral, tráfico de búsqueda, clima. Cada API tiene su cuota, su formato y su manera de fallar, así que se envuelven en un cliente con reintentos y se guardan tal cual llegan antes de tocarlas.',
      en: 'Context the company does not generate: labour market, search traffic, weather. Every API has its own quota, format and way of failing, so each is wrapped in a client with retries and stored as received before touching it.',
    },
    ifRemoved: {
      es: 'Se pierde el contexto externo. Las métricas internas siguen, pero ya no puedes explicar si la rotación sube porque el mercado paga más o porque algo cambió dentro.',
      en: 'External context is gone. Internal metrics keep flowing, but you can no longer tell whether churn rises because the market pays more or because something changed inside.',
    },
    failure: 'partial',
    evidence: [
      ev.tfm({ es: 'Ingesta de Eurostat y Adzuna para comparar salarios de mercado', en: 'Eurostat and Adzuna ingestion to benchmark market salaries' }),
      ev.seo({ es: 'API de Google Search Console para medir experimentos', en: 'Google Search Console API to measure experiments' }),
      ev.cloudrisk({ es: 'OpenWeather y calidad del aire cada 30 segundos', en: 'OpenWeather and air quality every 30 seconds' }),
    ],
    x: C[0], y: 200, w: W, h: H,
  },
  {
    id: 'src_events',
    layer: 'sources',
    label: { es: 'Eventos en tiempo real', en: 'Real-time events' },
    tool: { es: 'Apps · sensores · Slack', en: 'Apps · sensors · Slack' },
    tools: ['Pub/Sub', 'Kafka', 'Webhooks'],
    desc: {
      es: 'Cosas que pasan ahora: un jugador que camina, un sensor de aire, un mensaje en Slack. Llegan miles por minuto y desordenados, así que primero se publican en una cola y se procesan después.',
      en: 'Things happening right now: a player walking, an air sensor, a Slack message. They arrive by the thousand, out of order, so they are published to a queue first and processed afterwards.',
    },
    ifRemoved: {
      es: 'Se acaba el tiempo real. Todo lo que dependía de eventos pasa a ser una foto diaria, y los casos de uso que exigen minutos, como alertas o juego en vivo, dejan de tener sentido.',
      en: 'Real time is over. Everything that depended on events becomes a daily snapshot, and use cases that need minutes, like alerts or live play, stop making sense.',
    },
    failure: 'partial',
    evidence: [
      ev.cloudrisk({ es: 'Pasos y posiciones GPS de cada jugador como eventos', en: 'Each player\'s steps and GPS positions as events' }),
      ev.air({ es: 'Lecturas de estaciones de calidad del aire en tiempo real', en: 'Real-time readings from air-quality stations' }),
    ],
    x: C[0], y: 290, w: W, h: H,
  },
  {
    id: 'src_files',
    layer: 'sources',
    label: { es: 'Ficheros de negocio', en: 'Business files' },
    tool: { es: 'Excel · CSV · exportaciones', en: 'Excel · CSV · exports' },
    tools: ['Cloud Storage', 'pandas', 'Validación de esquema'],
    desc: {
      es: 'El Excel que alguien mantiene a mano y del que depende medio departamento. Se acepta como fuente, pero se valida el esquema al entrar y se guarda una copia inmutable por fecha.',
      en: 'The spreadsheet someone maintains by hand and half a department depends on. Accepted as a source, but its schema is validated on arrival and an immutable dated copy is kept.',
    },
    ifRemoved: {
      es: 'Desaparece el conocimiento informal: precios de referencia, objetivos, listas maestras. Las cifras siguen, pero sin el contexto contra el que compararlas.',
      en: 'Informal knowledge disappears: reference prices, targets, master lists. Figures keep flowing, but without the context to compare them against.',
    },
    failure: 'partial',
    evidence: [
      ev.tfm({ es: 'Excel de RRHH y CSV de Slack como punto de partida', en: 'HR spreadsheet and Slack CSV as the starting point' }),
      ev.prices({ es: 'CSV de precios de referencia mantenido a mano', en: 'Hand-maintained reference price CSV' }),
    ],
    x: C[0], y: 380, w: W, h: H,
  },

  /* ---------- Ingesta ---------- */
  {
    id: 'ing_batch',
    layer: 'ingest',
    label: { es: 'Ingesta batch', en: 'Batch ingestion' },
    tool: { es: 'Python · Airflow · Cloud Run Jobs', en: 'Python · Airflow · Cloud Run Jobs' },
    tools: ['Python', 'Airflow', 'Cloud Run Jobs', 'Cloud Scheduler'],
    desc: {
      es: 'Scripts que se ejecutan a una hora fija, leen las fuentes y depositan los datos crudos en el lake. Son idempotentes: si se lanzan dos veces el mismo día, el resultado es el mismo.',
      en: 'Scripts that run at a fixed time, read the sources and drop raw data into the lake. They are idempotent: run them twice on the same day and the result is the same.',
    },
    ifRemoved: {
      es: 'Nada nuevo entra por la vía batch. El lake solo recibe eventos en streaming, así que las tablas de negocio se congelan en la última carga y cada día que pasa el dashboard miente un poco más.',
      en: 'Nothing new enters through the batch path. The lake only receives streaming events, so business tables freeze at the last load and every day the dashboard lies a little more.',
    },
    failure: 'stops',
    evidence: [
      ev.prices({ es: 'Snapshot diario de catálogos como CronJob de Kubernetes', en: 'Daily catalogue snapshot as a Kubernetes CronJob' }),
      ev.tfm({ es: 'Cargas de Eurostat y Adzuna a la capa bronze', en: 'Eurostat and Adzuna loads into the bronze layer' }),
      ev.cloudrisk({ es: 'Walker como Cloud Run Job disparado por Scheduler', en: 'Walker as a Cloud Run Job triggered by Scheduler' }),
    ],
    x: C[1], y: 155, w: W, h: H,
  },
  {
    id: 'ing_stream',
    layer: 'ingest',
    label: { es: 'Ingesta streaming', en: 'Streaming ingestion' },
    tool: { es: 'Pub/Sub → Dataflow', en: 'Pub/Sub → Dataflow' },
    tools: ['Pub/Sub', 'Dataflow', 'Apache Beam', 'Kafka'],
    desc: {
      es: 'Una cola desacopla a quien produce de quien consume, y un pipeline de Beam procesa los eventos con ventanas temporales y estado. Aquí viven las reglas que no pueden esperar al día siguiente, como el antitrampas de CloudRISK.',
      en: 'A queue decouples producers from consumers, and a Beam pipeline processes events with time windows and state. This is where the rules that cannot wait until tomorrow live, like CloudRISK\'s anti-cheat.',
    },
    ifRemoved: {
      es: 'Los eventos se acumulan en la cola y nadie los lee. Tras la retención se pierden. El lake sigue recibiendo cargas batch, pero todo lo que era en vivo se apaga.',
      en: 'Events pile up in the queue and nobody reads them. After the retention window they are lost. The lake keeps receiving batch loads, but everything that was live goes dark.',
    },
    failure: 'stops',
    evidence: [
      ev.cloudrisk({ es: 'Pipeline stateful de Apache Beam con radar de velocidad y límites diarios', en: 'Stateful Apache Beam pipeline with speed radar and daily caps' }),
      ev.air({ es: 'Ingesta continua de lecturas y alertas por Telegram', en: 'Continuous ingestion of readings and Telegram alerts' }),
    ],
    x: C[1], y: 335, w: W, h: H,
  },

  /* ---------- Almacenamiento ---------- */
  {
    id: 'lake',
    layer: 'storage',
    label: { es: 'Data lake · capa bronze', en: 'Data lake · bronze layer' },
    tool: { es: 'Cloud Storage · BigQuery raw', en: 'Cloud Storage · BigQuery raw' },
    tools: ['Cloud Storage', 'BigQuery', 'Particionado por fecha'],
    desc: {
      es: 'Los datos tal cual llegaron, sin tocar, particionados por fecha de carga. Es el seguro de vida del pipeline: si una transformación sale mal, se vuelve a ejecutar desde aquí sin pedir nada a las fuentes.',
      en: 'Data exactly as it arrived, untouched, partitioned by load date. The pipeline\'s life insurance: if a transformation goes wrong, you rerun it from here without asking the sources for anything.',
    },
    ifRemoved: {
      es: 'Sin sitio donde aterrizar, la ingesta no tiene destino y el warehouse no tiene origen. Y sin histórico crudo, cualquier error en silver es irreversible: no hay de dónde reconstruir.',
      en: 'With nowhere to land, ingestion has no destination and the warehouse no origin. And without raw history, any mistake in silver is irreversible: there is nothing to rebuild from.',
    },
    failure: 'stops',
    evidence: [
      ev.tfm({ es: 'Bronze en BigQuery con nombres normalizados y particiones', en: 'Bronze in BigQuery with normalised names and partitions' }),
      ev.prices({ es: 'Tabla de snapshots: una fila por producto, tienda y día', en: 'Snapshot table: one row per product, store and day' }),
    ],
    x: C[2], y: 245, w: W, h: H,
  },

  /* ---------- Transformación ---------- */
  {
    id: 'silver',
    layer: 'transform',
    label: { es: 'Capa silver', en: 'Silver layer' },
    tool: { es: 'dbt · Dataform', en: 'dbt · Dataform' },
    tools: ['dbt', 'Dataform', 'SQL', 'Modelos incrementales'],
    desc: {
      es: 'Limpieza, tipos, deduplicación y claves consistentes. Cada modelo es un SQL versionado en git con su documentación al lado. Aquí se decide qué significa "empleado activo" o "precio por unidad" una sola vez.',
      en: 'Cleaning, types, deduplication and consistent keys. Every model is a versioned SQL file in git with its docs next to it. This is where "active employee" or "unit price" gets defined exactly once.',
    },
    ifRemoved: {
      es: 'Gold se construye directamente sobre datos crudos: duplicados, nulos y fechas en tres formatos. El dashboard sigue mostrando números, pero cada gráfico cuenta una versión distinta de la verdad.',
      en: 'Gold gets built straight on raw data: duplicates, nulls and dates in three formats. The dashboard keeps showing numbers, but every chart tells a different version of the truth.',
    },
    failure: 'corrupts',
    evidence: [
      ev.tfm({ es: 'Transformaciones Dataform de bronze a silver con reglas documentadas', en: 'Dataform transformations from bronze to silver with documented rules' }),
      ev.air({ es: 'Modelos dbt ejecutados cada cinco minutos', en: 'dbt models run every five minutes' }),
      ev.prices({ es: 'Normalización y matching de productos entre supermercados', en: 'Product normalisation and cross-store matching' }),
    ],
    x: C[3], y: 110, w: W, h: H,
  },
  {
    id: 'quality',
    layer: 'transform',
    label: { es: 'Tests de calidad', en: 'Data quality tests' },
    tool: { es: 'dbt tests · aserciones', en: 'dbt tests · assertions' },
    tools: ['dbt tests', 'Dataform assertions', 'ydata-profiling'],
    desc: {
      es: 'Unicidad, no nulos, rangos válidos y relaciones entre tablas, comprobados en cada ejecución antes de dejar pasar los datos a gold. Si un test falla, el pipeline se para y avisa; mejor un dashboard vacío que uno equivocado.',
      en: 'Uniqueness, not-null, valid ranges and relationships between tables, checked on every run before data is allowed into gold. If a test fails the pipeline stops and alerts; an empty dashboard beats a wrong one.',
    },
    ifRemoved: {
      es: 'Los datos malos pasan en silencio. Un cambio de formato en una fuente, un duplicado, un salario en céntimos en vez de euros: nadie lo ve hasta que un director pregunta por qué el KPI se ha disparado.',
      en: 'Bad data passes silently. A format change at a source, a duplicate, a salary in cents instead of euros: nobody notices until a director asks why the KPI just exploded.',
    },
    failure: 'corrupts',
    evidence: [
      ev.tfm({ es: 'Aserciones en Dataform y etiquetas de PII en las columnas', en: 'Dataform assertions and PII tags on columns' }),
      ev.hotel({ es: 'Validación con Zod y suite de tests de seguridad', en: 'Zod validation and a security test suite' }),
    ],
    x: C[3], y: 200, w: W, h: H,
  },
  {
    id: 'gold',
    layer: 'transform',
    label: { es: 'Capa gold · métricas', en: 'Gold layer · metrics' },
    tool: { es: 'Modelo dimensional · vistas de KPIs', en: 'Dimensional model · KPI views' },
    tools: ['Star schema', 'Vistas', 'Catálogo de KPIs'],
    desc: {
      es: 'Tablas pensadas para responder preguntas, no para almacenar: hechos, dimensiones y KPIs con su definición escrita. Es la capa que ve negocio, y por eso cada métrica tiene dueño, fórmula y umbral.',
      en: 'Tables designed to answer questions, not to store: facts, dimensions and KPIs with written definitions. This is the layer business sees, so every metric has an owner, a formula and a threshold.',
    },
    ifRemoved: {
      es: 'Cada analista vuelve a calcular la rotación a su manera en su propia query. Tres reuniones, tres cifras. El dashboard y el modelo se quedan sin tablas que leer.',
      en: 'Every analyst goes back to computing churn their own way in their own query. Three meetings, three numbers. The dashboard and the model are left with no tables to read.',
    },
    failure: 'stops',
    evidence: [
      ev.tfm({ es: 'Vistas gold y catálogo de KPIs de retención para el dashboard', en: 'Gold views and the retention KPI catalogue for the dashboard' }),
      ev.prices({ es: 'Vistas SQL de variaciones, mayores subidas y cesta comparada', en: 'SQL views for price changes, biggest movers and basket comparison' }),
    ],
    x: C[3], y: 290, w: W, h: H,
  },

  /* ---------- Consumo ---------- */
  {
    id: 'dashboard',
    layer: 'consume',
    label: { es: 'Dashboards', en: 'Dashboards' },
    tool: { es: 'Looker Studio · Power BI · Dash', en: 'Looker Studio · Power BI · Dash' },
    tools: ['Looker Studio', 'Power BI', 'Plotly Dash', 'Grafana'],
    desc: {
      es: 'La parte que ve la gente. Pocas métricas, bien definidas, con umbrales que digan cuándo actuar. Un dashboard que no cambia una decisión es decoración.',
      en: 'The part people actually see. Few metrics, well defined, with thresholds that say when to act. A dashboard that never changes a decision is decoration.',
    },
    ifRemoved: {
      es: 'El pipeline funciona y nadie lo sabe. Las decisiones vuelven a tomarse por intuición y por el último Excel que alguien envió por correo.',
      en: 'The pipeline works and nobody knows. Decisions go back to gut feeling and the last spreadsheet someone emailed.',
    },
    failure: 'stops',
    evidence: [
      ev.tfm({ es: 'Centro de mando de retención en Looker Studio', en: 'Retention command centre in Looker Studio' }),
      ev.prices({ es: 'Dashboard en Plotly Dash con top 100 y comparación entre tiendas', en: 'Plotly Dash dashboard with top 100 and store comparison' }),
      ev.seo({ es: 'Dashboards de KPIs y reporting automatizado para dirección', en: 'KPI dashboards and automated reporting for management' }),
    ],
    x: C[4], y: 110, w: W, h: H,
  },
  {
    id: 'ml',
    layer: 'consume',
    label: { es: 'Modelos y NLP', en: 'Models and NLP' },
    tool: { es: 'Vertex AI · scikit-learn · SHAP', en: 'Vertex AI · scikit-learn · SHAP' },
    tools: ['Vertex AI', 'scikit-learn', 'SHAP', 'Sentiment'],
    desc: {
      es: 'Predicción y texto sobre la capa gold, nunca sobre datos crudos. Modelos interpretables: un manager debe poder leer por qué un empleado está marcado en riesgo.',
      en: 'Prediction and text on top of the gold layer, never on raw data. Interpretable models: a manager must be able to read why an employee is flagged at risk.',
    },
    ifRemoved: {
      es: 'Se pierde la anticipación. Sigues sabiendo qué pasó, pero no quién está a punto de irse. El dashboard vuelve a ser un retrovisor.',
      en: 'You lose foresight. You still know what happened, but not who is about to leave. The dashboard becomes a rear-view mirror again.',
    },
    failure: 'stops',
    evidence: [
      ev.tfm({ es: 'Modelo de rotación con explicabilidad y sentimiento de Slack', en: 'Churn model with explainability and Slack sentiment' }),
      ev.hub({ es: 'Agente conversacional con Gemini y búsqueda vectorial', en: 'Conversational agent with Gemini and vector search' }),
    ],
    x: C[4], y: 200, w: W, h: H,
  },
  {
    id: 'api',
    layer: 'consume',
    label: { es: 'Apps y APIs', en: 'Apps and APIs' },
    tool: { es: 'FastAPI · Cloud Run · Next.js', en: 'FastAPI · Cloud Run · Next.js' },
    tools: ['FastAPI', 'Cloud Run', 'Next.js', 'Firestore'],
    desc: {
      es: 'Cuando el dato tiene que volver al producto: un mapa que se actualiza, un panel de administración, una app que consulta el estado. Misma capa gold, otro consumidor.',
      en: 'When data has to go back into the product: a map that updates, an admin panel, an app querying state. Same gold layer, different consumer.',
    },
    ifRemoved: {
      es: 'El dato se queda en el warehouse. Los equipos de producto y operaciones vuelven a pedir extracciones por correo.',
      en: 'Data stays in the warehouse. Product and operations teams go back to requesting extracts by email.',
    },
    failure: 'stops',
    evidence: [
      ev.cloudrisk({ es: 'Backend FastAPI sobre Firestore y BigQuery', en: 'FastAPI backend on Firestore and BigQuery' }),
      ev.hotel({ es: 'Panel de administración con reservas, CRM y seguridad', en: 'Admin panel with bookings, CRM and security' }),
    ],
    x: C[4], y: 290, w: W, h: H,
  },

  /* ---------- Transversales ---------- */
  {
    id: 'orchestration',
    layer: 'cross',
    label: { es: 'Orquestación', en: 'Orchestration' },
    tool: { es: 'Airflow · Cloud Scheduler · Dataform', en: 'Airflow · Cloud Scheduler · Dataform' },
    tools: ['Airflow', 'Cloud Scheduler', 'Dataform workflows', 'Cloud Build'],
    desc: {
      es: 'Quién ejecuta qué, en qué orden y qué pasa si falla. Reintentos, dependencias y un sitio donde ver el estado de cada ejecución. Sin esto, el pipeline es una colección de scripts que alguien tiene que acordarse de lanzar.',
      en: 'Who runs what, in which order and what happens on failure. Retries, dependencies and one place to see the state of every run. Without it, the pipeline is a pile of scripts someone has to remember to launch.',
    },
    ifRemoved: {
      es: 'Nada se ejecuta a su hora. La ingesta batch, silver, los tests y gold se quedan esperando a que alguien los lance a mano. El lunes por la mañana el dashboard enseña los datos del viernes, y nadie sabe por qué.',
      en: 'Nothing runs on schedule. Batch ingestion, silver, tests and gold sit waiting for someone to launch them by hand. On Monday morning the dashboard shows Friday\'s data, and nobody knows why.',
    },
    failure: 'stops',
    controls: ['ing_batch', 'silver', 'quality', 'gold'],
    evidence: [
      ev.cloudrisk({ es: 'Cloud Scheduler disparando Cloud Run Jobs', en: 'Cloud Scheduler triggering Cloud Run Jobs' }),
      ev.prices({ es: 'CronJob diario en Kubernetes sobre una Raspberry Pi', en: 'Daily Kubernetes CronJob on a Raspberry Pi' }),
      ev.tfm({ es: 'Pipeline orquestado en GCP que procesa datos nuevos sin intervención manual', en: 'Orchestrated GCP pipeline processing new data with no manual step' }),
    ],
    x: C[1], y: 24, w: C[3] + W - C[1], h: 48,
  },
  {
    id: 'governance',
    layer: 'cross',
    label: { es: 'Gobierno y catálogo', en: 'Governance and catalogue' },
    tool: { es: 'Dataplex · etiquetas PII · documentación', en: 'Dataplex · PII tags · documentation' },
    tools: ['Dataplex', 'Data Catalog', 'PII tags', 'dbt docs'],
    desc: {
      es: 'Qué significa cada tabla, quién es su dueño, de dónde viene y qué columnas son datos personales. Es lo que permite que un analista nuevo entienda el warehouse sin preguntar a nadie.',
      en: 'What each table means, who owns it, where it comes from and which columns are personal data. It is what lets a new analyst understand the warehouse without asking anyone.',
    },
    ifRemoved: {
      es: 'Hoy no se rompe nada. En seis meses hay dos tablas llamadas "empleados", nadie sabe cuál es la buena, y una columna con DNI acaba en un dashboard compartido con toda la empresa.',
      en: 'Nothing breaks today. In six months there are two tables called "employees", nobody knows which one is right, and a column with national IDs ends up in a dashboard shared company-wide.',
    },
    failure: 'latent',
    controls: ['silver', 'gold', 'dashboard', 'ml'],
    evidence: [
      ev.tfm({ es: 'Catálogo de tablas, linaje y etiquetas PII en Dataplex', en: 'Table catalogue, lineage and PII tags in Dataplex' }),
    ],
    x: C[2], y: 476, w: C[3] + W - C[2], h: 48,
  },
  {
    id: 'iac',
    layer: 'cross',
    label: { es: 'Infraestructura como código', en: 'Infrastructure as code' },
    tool: { es: 'Terraform · CI/CD', en: 'Terraform · CI/CD' },
    tools: ['Terraform', 'GitHub Actions', 'Cloud Build', 'Docker'],
    desc: {
      es: 'Buckets, datasets, colas, servicios y permisos definidos en ficheros versionados. Un "terraform apply" levanta el entorno entero; un pull request lo cambia con revisión. Es la diferencia entre un proyecto y una demo.',
      en: 'Buckets, datasets, queues, services and permissions defined in versioned files. One "terraform apply" brings up the whole environment; a pull request changes it under review. The difference between a project and a demo.',
    },
    ifRemoved: {
      es: 'Todo sigue funcionando hasta que alguien toca algo a mano en la consola. Entonces nadie sabe recrear el entorno, cada despliegue es distinto y el "funciona en mi máquina" vuelve a ser la norma.',
      en: 'Everything keeps working until someone changes something by hand in the console. Then nobody can recreate the environment, every deployment is different, and "works on my machine" is the norm again.',
    },
    failure: 'latent',
    controls: ['ing_batch', 'ing_stream', 'lake', 'silver', 'quality', 'gold', 'dashboard', 'ml', 'api'],
    evidence: [
      ev.cloudrisk({ es: 'Doce módulos Terraform y despliegue con un solo apply', en: 'Twelve Terraform modules and a single-apply deployment' }),
      ev.tfm({ es: 'Entornos y CI/CD en Terraform para todo el proyecto', en: 'Environments and CI/CD in Terraform for the whole project' }),
      ev.hub({ es: 'Tres servicios en Cloud Run desplegados con GitHub Actions', en: 'Three Cloud Run services deployed with GitHub Actions' }),
    ],
    x: C[0], y: 544, w: C[2] + W - C[0], h: 48,
  },
  {
    id: 'monitoring',
    layer: 'cross',
    label: { es: 'Monitorización y alertas', en: 'Monitoring and alerts' },
    tool: { es: 'Cloud Logging · alertas · runbooks', en: 'Cloud Logging · alerts · runbooks' },
    tools: ['Cloud Logging', 'Grafana', 'Telegram', 'Runbooks'],
    desc: {
      es: 'Saber que algo ha fallado antes de que lo diga un usuario. Logs centralizados, una alerta cuando una carga no llega y un runbook con los pasos para arreglarlo a las tres de la mañana.',
      en: 'Knowing something failed before a user says so. Centralised logs, an alert when a load does not arrive and a runbook with the steps to fix it at three in the morning.',
    },
    ifRemoved: {
      es: 'Los fallos siguen ocurriendo, solo que ahora los descubre negocio. La carga de las seis falló el martes y te enteras el jueves, en una reunión, por el tono de voz.',
      en: 'Failures still happen, only now business discovers them. The six o\'clock load failed on Tuesday and you find out on Thursday, in a meeting, from the tone of voice.',
    },
    failure: 'latent',
    controls: ['ing_batch', 'ing_stream', 'silver', 'quality', 'gold'],
    evidence: [
      ev.air({ es: 'Alertas por Telegram y dashboards de Grafana', en: 'Telegram alerts and Grafana dashboards' }),
      ev.tfm({ es: 'Runbook del pipeline de ML y estimación de costes', en: 'ML pipeline runbook and cost estimate' }),
      ev.hotel({ es: 'Registro de intentos de acceso y bloqueo por IP', en: 'Login attempt log and IP lockout' }),
    ],
    x: C[3], y: 544, w: C[4] + W - C[3], h: 48,
  },
];

/* Flujo de datos ------------------------------------------------------ */
export const edges: Edge[] = [
  { from: 'src_db', to: 'ing_batch' },
  { from: 'src_api', to: 'ing_batch' },
  { from: 'src_files', to: 'ing_batch' },
  { from: 'src_events', to: 'ing_stream' },
  { from: 'ing_batch', to: 'lake' },
  { from: 'ing_stream', to: 'lake' },
  { from: 'lake', to: 'silver' },
  { from: 'silver', to: 'quality' },
  { from: 'quality', to: 'gold' },
  { from: 'gold', to: 'dashboard' },
  { from: 'gold', to: 'ml' },
  { from: 'gold', to: 'api' },
];

export const canvas = { width: C[4] + W + 24, height: 612 };
