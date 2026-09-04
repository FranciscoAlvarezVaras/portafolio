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
    company: 'Freelance',
    role: { es: 'Consultor de datos, marketing y administración', en: 'Data, marketing and operations consultant' },
    period: { es: 'Mar 2025 – Sep 2025', en: 'Mar 2025 – Sep 2025' },
    bullets: {
      es: [
        'Asesoría a pequeñas empresas en analítica de datos y estrategia digital.',
        'Diseño de procesos internos y seguimiento de resultados con cuadros de mando.',
      ],
      en: [
        'Advised small businesses on data analytics and digital strategy.',
        'Designed internal processes and tracked results with dashboards.',
      ],
    },
    tags: ['Analítica', 'Procesos', 'Dashboards'],
  },
  {
    company: 'GrowBarato',
    role: { es: 'Analista de datos · SEO & CRO', en: 'Data Analyst · SEO & CRO' },
    period: { es: 'Abr 2023 – Oct 2024', en: 'Apr 2023 – Oct 2024' },
    bullets: {
      es: [
        'Análisis de datos de e-commerce con Python y la API de Google Search Console.',
        'Diseño de tests A/B y mejoras que subieron el tráfico orgánico un 14,3 %.',
        'Automatización de informes y dashboards de KPIs para dirección.',
      ],
      en: [
        'E-commerce data analysis with Python and the Google Search Console API.',
        'Designed A/B tests and improvements that grew organic traffic by 14.3%.',
        'Automated reporting and built KPI dashboards for management.',
      ],
    },
    tags: ['Python', 'Search Console API', 'A/B testing', 'KPIs'],
  },
  {
    company: 'RANKTOP',
    role: { es: 'Analista de datos · SEO/SEM', en: 'Data Analyst · SEO/SEM' },
    period: { es: 'Jun 2022 – Dic 2022', en: 'Jun 2022 – Dec 2022' },
    bullets: {
      es: [
        'Informes de rendimiento con Google Analytics, Search Console y SEMrush para cinco cuentas.',
        'Optimización on-page y análisis de métricas de posicionamiento.',
      ],
      en: [
        'Performance reporting with Google Analytics, Search Console and SEMrush for five accounts.',
        'On-page optimisation and ranking metrics analysis.',
      ],
    },
    tags: ['Google Analytics', 'SEMrush', 'Reporting'],
  },
  {
    company: 'Neurocatching',
    role: { es: 'Investigación de consumidor · Neuromarketing', en: 'Consumer research · Neuromarketing' },
    period: { es: 'Feb 2022 – Jul 2022', en: 'Feb 2022 – Jul 2022' },
    bullets: {
      es: [
        'Análisis biométrico con eye-tracking y facial coding para traducir comportamiento en decisiones de SEO y UX.',
      ],
      en: ['Biometric analysis with eye-tracking and facial coding, translated into SEO and UX decisions.'],
    },
    tags: ['Eye-tracking', 'UX research'],
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
