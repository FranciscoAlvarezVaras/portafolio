import type { Lang } from '../i18n/ui';

type L<T = string> = Record<Lang, T>;

export const contact = {
  email: 'francisco92varas@gmail.com',
  linkedin: 'https://www.linkedin.com/in/frankalvarezv/',
  github: 'https://github.com/FranciscoAlvarezVaras',
  githubUser: 'FranciscoAlvarezVaras',
  siteRepo: 'https://github.com/FranciscoAlvarezVaras/portafolio',
};

/* ------------------------------------------------------------------ */
/* Experiencia                                                          */
/* ------------------------------------------------------------------ */
export interface Job {
  company: string;
  role: L;
  period: L;
  bullets: L<string[]>;
  tags: string[];
}

export const jobs: Job[] = [
  {
    company: 'Hoteles Cumberland · freelance',
    role: { es: 'Desarrollador web freelance', en: 'Freelance web developer' },
    period: { es: 'Jul 2026 – Sep 2026', en: 'Jul 2026 – Sep 2026' },
    bullets: {
      es: [
        'Web y motor de reservas para una cadena de cuatro hoteles, de la propuesta al despliegue. En producción desde agosto de 2026.',
        'Panel de administración, CRM de huéspedes, correos automáticos y suite de tests.',
      ],
      en: [
        'Website and booking engine for a four-hotel chain, from proposal to deployment. In production since August 2026.',
        'Admin panel, guest CRM, automated emails and a test suite.',
      ],
    },
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    company: 'Elite Sports 17 S.L.',
    role: { es: 'Marketing Specialist', en: 'Marketing Specialist' },
    period: { es: 'May 2024 – Ago 2025', en: 'May 2024 – Aug 2025' },
    bullets: {
      es: ['Análisis de datos de marketing con BigQuery y Looker Studio.'],
      en: ['Marketing data analysis with BigQuery and Looker Studio.'],
    },
    tags: ['BigQuery', 'Looker Studio'],
  },
  {
    company: 'Grow Barato',
    role: { es: 'SEO Specialist · CRO Specialist', en: 'SEO Specialist · CRO Specialist' },
    period: { es: 'Abr 2023 – May 2024', en: 'Apr 2023 – May 2024' },
    bullets: {
      es: [
        'Posicionamiento orgánico (SEO) y optimización de la conversión (CRO) del e-commerce.',
        'Análisis de datos con BigQuery y Looker Studio.',
      ],
      en: [
        'Organic search (SEO) and conversion rate optimisation (CRO) for the e-commerce site.',
        'Data analysis with BigQuery and Looker Studio.',
      ],
    },
    tags: ['SEO', 'CRO', 'BigQuery', 'Looker Studio'],
  },
  {
    company: 'RANKTOP',
    role: { es: 'SEO/SEM Marketing Assistant', en: 'SEO/SEM Marketing Assistant' },
    period: { es: 'Jun 2022 – Dic 2022', en: 'Jun 2022 – Dec 2022' },
    bullets: {
      es: [
        'Auditorías SEO y estrategias de contenido adaptadas a cada cliente.',
        'Gestión de campañas SEM y análisis de métricas de rendimiento (ROI, CPC, CTR).',
      ],
      en: [
        'SEO audits and content strategies tailored to each client.',
        'SEM campaign management and performance metrics analysis (ROI, CPC, CTR).',
      ],
    },
    tags: ['SEO', 'SEM', 'ROI · CPC · CTR'],
  },
  {
    company: 'Neurocatching',
    role: { es: 'Prácticas en neuromarketing', en: 'Neuromarketing internship' },
    period: { es: 'Feb 2022 – Jul 2022', en: 'Feb 2022 – Jul 2022' },
    bullets: {
      es: ['Apoyo al análisis CRO con datos de eye-tracking y facial coding para optimizar las ventas de clientes.'],
      en: ['Supported CRO analysis using eye-tracking and facial coding data to improve client sales.'],
    },
    tags: ['Eye-tracking', 'CRO'],
  },
];

export const earlierCareer: L<string[]> = {
  es: [
    'Altaplast C.A. · Coordinador de marketing; asistente administrativo y de contabilidad',
    'Porvenir · Especialista en investigación de mercados',
    'British American Tobacco · Marketing',
    'Hoteles Cumberland · Auditor interno junior',
  ],
  en: [
    'Altaplast C.A. · Marketing coordinator; administrative and accounting assistant',
    'Porvenir · Market research specialist',
    'British American Tobacco · Marketing',
    'Hoteles Cumberland · Junior internal auditor',
  ],
};

/* ------------------------------------------------------------------ */
/* Stack                                                                */
/* ------------------------------------------------------------------ */
export interface StackGroup {
  name: L;
  items: string[];
}

export const stack: StackGroup[] = [
  {
    name: { es: 'SQL y modelado', en: 'SQL and modelling' },
    items: ['PostgreSQL', 'BigQuery', 'dbt', 'Dataform', 'Modelo dimensional', 'Window functions', 'MongoDB'],
  },
  {
    name: { es: 'Pipelines y cloud', en: 'Pipelines and cloud' },
    items: ['Python', 'Airflow', 'Pub/Sub', 'Dataflow · Apache Beam', 'Cloud Run', 'Kafka', 'PySpark', 'Terraform', 'Docker', 'GitHub Actions'],
  },
  {
    name: { es: 'Visualización', en: 'Visualisation' },
    items: ['Looker Studio', 'Power BI', 'Plotly Dash', 'Grafana', 'Tableau', 'Metabase'],
  },
  {
    name: { es: 'Herramientas', en: 'Tooling' },
    items: ['Git', 'Linux', 'FastAPI', 'APIs REST', 'Claude API', 'Vertex AI'],
  },
];

/* ------------------------------------------------------------------ */
/* Formación                                                            */
/* ------------------------------------------------------------------ */
export interface Degree {
  school: string;
  title: L;
  period: string;
  note?: L;
}

export const education: Degree[] = [
  {
    school: 'EDEM Escuela de Empresarios',
    title: { es: 'Máster en Big Data & Cloud', en: "Master's in Big Data & Cloud" },
    period: '2025 – 2026',
    note: { es: 'GCP, AWS, Azure, dbt, Kafka, PySpark, Terraform. TFM con Quantia.', en: 'GCP, AWS, Azure, dbt, Kafka, PySpark, Terraform. Thesis with Quantia.' },
  },
  {
    school: '4Geeks Academy',
    title: { es: 'Bootcamp Data Science & Machine Learning', en: 'Data Science & Machine Learning bootcamp' },
    period: '2026',
  },
  {
    school: 'UNIR',
    title: { es: 'Máster en Neuromarketing', en: "Master's in Neuromarketing" },
    period: '2020 – 2021',
  },
  {
    school: 'Universidad Nueva Esparta',
    title: { es: 'Grado en Administración de Empresas', en: 'BSc in Business Administration' },
    period: '2015 – 2019',
  },
];

export const certifications: L<string[]> = {
  es: ['Google Cloud Associate Cloud Engineer (en preparación)'],
  en: ['Google Cloud Associate Cloud Engineer (in preparation)'],
};

/* ------------------------------------------------------------------ */
/* Bloque del máster                                                    */
/* ------------------------------------------------------------------ */
export interface Milestone {
  when: string;
  title: L;
  desc: L;
  /** slug de la ficha de proyecto, si existe */
  project?: string;
  tags: string[];
}

export const milestones: Milestone[] = [
  {
    when: '2026 · Q1',
    title: { es: 'Data Project 1 · Calidad del aire en Valencia', en: 'Data Project 1 · Air quality in Valencia' },
    desc: {
      es: 'Ingesta en tiempo real, transformaciones con dbt cada cinco minutos, alertas por Telegram y dashboards en Grafana. Equipo reconocido como top team del máster.',
      en: 'Real-time ingestion, dbt transformations every five minutes, Telegram alerts and Grafana dashboards. Recognised as the top team of the cohort.',
    },
    project: 'calidad-aire-valencia',
    tags: ['PostgreSQL', 'dbt', 'FastAPI', 'Grafana', 'Docker'],
  },
  {
    when: '2026 · Q2',
    title: { es: 'Data Project 2 · CloudRISK, pipeline serverless en GCP', en: 'Data Project 2 · CloudRISK, serverless pipeline on GCP' },
    desc: {
      es: 'Juego geolocalizado sobre los 87 barrios de Valencia montado como pipeline streaming. Llevé backend, Terraform y CI/CD.',
      en: 'Geolocated game over the 87 neighbourhoods of Valencia built as a streaming pipeline. I owned backend, Terraform and CI/CD.',
    },
    project: 'cloudrisk',
    tags: ['Pub/Sub', 'Dataflow', 'Firestore', 'BigQuery', 'Terraform'],
  },
  {
    when: '2026 · Q2',
    title: { es: 'Data Project 3 · EDEM Student Hub', en: 'Data Project 3 · EDEM Student Hub' },
    desc: {
      es: 'Campus virtual con agente conversacional sobre Google ADK y Gemini, Cloud SQL y Vertex AI Vector Search, desplegado en Cloud Run con Terraform y GitHub Actions. Backend y arquitectura.',
      en: 'Virtual campus with a conversational agent on Google ADK and Gemini, Cloud SQL and Vertex AI Vector Search, deployed to Cloud Run with Terraform and GitHub Actions. Backend and architecture.',
    },
    project: 'edem-student-hub',
    tags: ['FastAPI', 'Gemini', 'Cloud SQL', 'Vertex AI', 'GitHub Actions'],
  },
  {
    when: '2026 · Q2',
    title: { es: 'Hackathon GFT', en: 'GFT Hackathon' },
    desc: {
      es: 'Un día, equipos asignados, reto 100 % Google Cloud automatizado con IA generativa y cero líneas de código manual. Metodología ágil y presentación final.',
      en: 'One day, assigned teams, a 100% Google Cloud challenge automated with generative AI and zero lines of manual code. Agile method and final pitch.',
    },
    tags: ['GCP', 'GenAI', 'Agile'],
  },
  {
    when: '2026 · May',
    title: { es: 'Experiencia internacional · Google, Londres', en: 'International experience · Google, London' },
    desc: {
      es: 'Tres días en el campus de Google en King\'s Cross con el equipo del máster: producto, ingeniería y cultura de datos vistas desde dentro.',
      en: "Three days at Google's King's Cross campus with the master's cohort: product, engineering and data culture from the inside.",
    },
    tags: ['Google', 'Cloud'],
  },
  {
    when: '2026 · Q3',
    title: { es: 'TFM · Predicción de rotación de empleados para Quantia', en: 'Thesis · Employee churn prediction for Quantia' },
    desc: {
      es: 'Data lake por capas en BigQuery con Dataform, NLP sobre Slack y modelo interpretable en Vertex AI, con dashboard de retención en Looker Studio. Defendido en julio de 2026.',
      en: 'Layered data lake in BigQuery with Dataform, NLP on Slack messages and an interpretable model on Vertex AI, with a retention dashboard in Looker Studio. Defended in July 2026.',
    },
    project: 'tfm-quantia',
    tags: ['BigQuery', 'Dataform', 'Vertex AI', 'Looker Studio', 'Terraform'],
  },
];

export interface PracticeRepo {
  name: L;
  tech: string;
  url?: string;
  desc: L;
}

/** Repos de práctica. Sin `url` = todavía privado (se enseña sin enlace). */
export const practice: PracticeRepo[] = [
  {
    name: { es: 'SQL y NoSQL', en: 'SQL and NoSQL' },
    tech: 'PostgreSQL · MongoDB',
    url: 'https://github.com/FranciscoAlvarezVaras/SQL_PRACTICE',
    desc: { es: '13 guías y unos 140 ejercicios resueltos en notebooks sobre Docker.', en: '13 guides and about 140 solved exercises in notebooks on Docker.' },
  },
  {
    name: { es: 'Python', en: 'Python' },
    tech: 'Python · Jupyter',
    desc: { es: '13 guías de básico a IA con 169 ejercicios.', en: '13 guides from basics to AI with 169 exercises.' },
  },
  {
    name: { es: 'PySpark', en: 'PySpark' },
    tech: 'Spark SQL · optimización',
    desc: { es: 'Notebooks de Spark SQL y rendimiento, con ejercicio evaluable.', en: 'Spark SQL and performance notebooks, with a graded exercise.' },
  },
  {
    name: { es: 'Kafka', en: 'Kafka' },
    tech: 'Kafka · KSQL · Kafka Connect',
    desc: { es: 'Productores, consumidores y streaming con KSQL.', en: 'Producers, consumers and streaming with KSQL.' },
  },
  {
    name: { es: 'dbt', en: 'dbt' },
    tech: 'dbt · modelado',
    desc: { es: 'Modelos, tests y documentación sobre PostgreSQL.', en: 'Models, tests and docs on PostgreSQL.' },
  },
  {
    name: { es: 'Airflow', en: 'Airflow' },
    tech: 'Airflow · DAGs',
    desc: { es: 'DAGs de orquestación con operadores y sensores.', en: 'Orchestration DAGs with operators and sensors.' },
  },
  {
    name: { es: 'Terraform', en: 'Terraform' },
    tech: 'Terraform · GCP',
    desc: { es: 'Módulos, estado remoto, Cloud Run y Pub/Sub como código.', en: 'Modules, remote state, Cloud Run and Pub/Sub as code.' },
  },
  {
    name: { es: 'Serverless en GCP', en: 'Serverless on GCP' },
    tech: 'Cloud Run · Functions · Dataflow',
    desc: { es: 'Procesamiento serverless y streaming con Apache Beam.', en: 'Serverless processing and streaming with Apache Beam.' },
  },
  {
    name: { es: 'APIs', en: 'APIs' },
    tech: 'FastAPI · requests',
    desc: { es: 'Consumo y publicación de APIs REST.', en: 'Consuming and publishing REST APIs.' },
  },
  {
    name: { es: 'Gobierno y calidad del dato', en: 'Data governance and quality' },
    tech: 'ydata-profiling · reglas',
    desc: { es: 'Perfilado, limpieza y reglas de calidad sobre datos reales.', en: 'Profiling, cleaning and quality rules on real data.' },
  },
  {
    name: { es: 'AWS y Azure', en: 'AWS and Azure' },
    tech: 'S3 · Glue · Data Factory',
    desc: { es: 'Almacenamiento y procesamiento end-to-end en las otras dos nubes.', en: 'End-to-end storage and processing on the other two clouds.' },
  },
  {
    name: { es: 'Snowflake', en: 'Snowflake' },
    tech: 'Snowflake · SQL',
    desc: { es: 'Warehouse en la nube: carga, roles y consultas.', en: 'Cloud warehouse: loading, roles and queries.' },
  },
];
