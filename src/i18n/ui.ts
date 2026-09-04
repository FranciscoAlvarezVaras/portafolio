export type Lang = 'es' | 'en';
export const LANGS: Lang[] = ['es', 'en'];
export const DEFAULT_LANG: Lang = 'es';

export function isLang(x: string | undefined): x is Lang {
  return x === 'es' || x === 'en';
}

/** Rutas por idioma: páginas del sitio y anclas de sección dentro de ellas. */
export const routes = {
  es: {
    home: '/es/',
    pipeline: '/es/pipeline/',
    projects: '/es/proyectos/',
    master: '/es/master/',
    about: '/es/sobre-mi/',
    contact: '/es/sobre-mi/#contacto',
    anchors: {
      pipeline: 'pipeline',
      projects: 'proyectos',
      master: 'master',
      experience: 'experiencia',
      stack: 'stack',
      education: 'formacion',
      contact: 'contacto',
    },
  },
  en: {
    home: '/en/',
    pipeline: '/en/pipeline/',
    projects: '/en/projects/',
    master: '/en/masters/',
    about: '/en/about/',
    contact: '/en/about/#contact',
    anchors: {
      pipeline: 'pipeline',
      projects: 'projects',
      master: 'masters',
      experience: 'experience',
      stack: 'stack',
      education: 'education',
      contact: 'contact',
    },
  },
} as const;

export type PageKey = 'home' | 'pipeline' | 'projects' | 'master' | 'about';

export function projectUrl(lang: Lang, slug: string) {
  return `${routes[lang].projects}${slug}/`;
}

export function otherLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es';
}

export const ui = {
  es: {
    'meta.title': 'Francisco Álvarez Varas · Analytics Engineer',
    'meta.description':
      'Analytics Engineer y Data Analyst en Valencia. Modelado de datos con SQL y dbt, pipelines en Google Cloud y dashboards que la gente de negocio usa de verdad.',
    'meta.pipeline': 'Cómo trabajo · pipeline end-to-end interactivo',
    'meta.projects': 'Proyectos · casos de analítica e ingeniería de datos',
    'meta.master': 'Máster Big Data & Cloud · EDEM 2025-2026',
    'meta.about': 'Sobre mí · experiencia, stack y formación',

    'nav.home': 'Inicio',
    'nav.pipeline': 'Cómo trabajo',
    'nav.projects': 'Proyectos',
    'nav.master': 'Máster',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Hablemos',
    'nav.lang': 'English',
    'nav.langShort': 'EN',
    'nav.menu': 'Menú',

    'hero.kicker': 'Analytics Engineer · Data Analyst',
    'hero.name': 'Francisco Álvarez Varas',
    'hero.pitch':
      'Convierto datos dispersos en modelos, métricas y dashboards que la gente de negocio usa de verdad. Tres años de analítica con Python y SQL, y un máster en Big Data & Cloud construyendo pipelines en Google Cloud.',
    'hero.location': 'Valencia · remoto',
    'hero.status': 'Disponible para incorporación',
    'hero.cta.projects': 'Ver proyectos',
    'hero.cta.cv': 'Descargar CV',
    'hero.cta.linkedin': 'LinkedIn',
    'hero.fact1.k': '3+ años',
    'hero.fact1.v': 'en analítica de datos y negocio',
    'hero.fact2.k': '7 proyectos',
    'hero.fact2.v': 'end-to-end, de la fuente al dashboard',
    'hero.fact3.k': 'GCP · BigQuery · dbt',
    'hero.fact3.v': 'stack principal, con Terraform y CI/CD',

    'home.pipeline.kicker': 'Cómo trabajo',
    'home.pipeline.title': 'Así construyo un pipeline de datos',
    'home.pipeline.intro':
      'De las fuentes al dashboard, con calidad, orquestación e infraestructura como código. En la versión interactiva puedes quitar cualquier pieza y ver qué se rompe aguas abajo.',
    'home.pipeline.cta': 'Explorar el pipeline interactivo',
    'home.pipeline.badge': 'Interactivo',
    'home.projects.cta': 'Ver los 7 proyectos',
    'home.master.kicker': 'Máster Big Data & Cloud · EDEM',
    'home.master.title': 'Un año construyendo, de Docker a Vertex AI',
    'home.master.intro': 'Tres Data Projects en equipo, un hackathon, un TFM con empresa real y prácticas en cada módulo.',
    'home.master.cta': 'Ver el recorrido del máster',
    'home.master.s1.k': '3',
    'home.master.s1.v': 'Data Projects en equipo',
    'home.master.s2.k': '1',
    'home.master.s2.v': 'TFM con empresa real',
    'home.master.s3.k': '12',
    'home.master.s3.v': 'módulos con práctica',

    'pipeline.kicker': 'Cómo trabajo',
    'pipeline.title': 'Un pipeline de datos end-to-end, pieza a pieza',
    'pipeline.intro':
      'Esta es la arquitectura que aplico en mis proyectos: de las fuentes al dashboard, con calidad, orquestación e infraestructura como código. Pulsa una pieza para ver qué hace y dónde la he construido. Y quítala para ver qué se rompe aguas abajo.',
    'pipeline.hint': 'Pulsa una pieza · Quítala con el botón del panel',
    'pipeline.scenarios': 'Prueba un escenario',
    'pipeline.variant.label': 'Elige la versión',
    'pipeline.howto.title': 'Cómo leer el diagrama',
    'pipeline.howto.1': 'Los datos fluyen de izquierda a derecha, de las fuentes al consumo. Las etiquetas de las flechas dicen en qué formato o con qué condición pasan.',
    'pipeline.howto.2': 'Las barras de arriba y de abajo no mueven datos: orquestan, protegen y vigilan a las piezas que conectan.',
    'pipeline.howto.3': 'Pulsa una pieza para leer qué hace, con qué servicio y en qué proyecto la construí. Quítala para ver qué se rompe aguas abajo.',
    'pipeline.layers.title': 'Las capas, una a una',
    'pipeline.layers.intro': 'Qué es cada etapa, por qué existe, con qué servicios se monta y dónde la he construido.',
    'pipeline.layers.what': 'Qué es',
    'pipeline.layers.why': 'Por qué existe',
    'pipeline.layers.services': 'Servicios',
    'pipeline.layers.mine': 'Dónde lo he hecho',
    'pipeline.story.title': 'El recorrido de un dato',
    'pipeline.story.intro': 'Sigue un solo cambio de principio a fin. Cada paso ilumina su pieza en el diagrama.',
    'pipeline.story.cta': 'Ver en el diagrama',
    'pipeline.tour': 'Recorrido guiado',
    'pipeline.tourStop': 'Parar el recorrido',
    'pipeline.remove': 'Quitar esta pieza',
    'pipeline.restore': 'Devolver la pieza',
    'pipeline.restoreAll': 'Restaurar todo',
    'pipeline.tools': 'Herramientas',
    'pipeline.evidence': 'Dónde lo he hecho',
    'pipeline.whatBreaks': 'Qué pasa si falta',
    'pipeline.affected': 'Piezas afectadas',
    'pipeline.removedCount': 'piezas quitadas',
    'pipeline.legend.stale': 'Sin datos o desactualizado',
    'pipeline.legend.partial': 'Datos incompletos',
    'pipeline.legend.dirty': 'Datos no fiables',
    'pipeline.legend.risk': 'Riesgo latente',
    'pipeline.legend.removed': 'Pieza quitada',
    'pipeline.status.stale': 'sin datos',
    'pipeline.status.partial': 'incompleto',
    'pipeline.status.dirty': 'no fiable',
    'pipeline.status.risk': 'riesgo',
    'pipeline.status.removed': 'quitada',
    'pipeline.healthy': 'Todo el pipeline está en pie. Quita una pieza para ver su efecto.',
    'pipeline.noscript': 'El diagrama es interactivo con JavaScript activado. Sin él, esta es la vista estática.',
    'pipeline.svgLabel': 'Diagrama de un pipeline de datos end-to-end',

    'projects.kicker': 'Proyectos',
    'projects.title': 'Casos, no solo repositorios',
    'projects.intro':
      'Cada ficha cuenta el contexto, el problema, lo que hice yo y el resultado. Con enlaces al código y a las demos cuando existen.',
    'projects.featured.kicker': 'Proyectos destacados',
    'projects.featured.title': 'Tres casos para empezar',
    'projects.filter': 'Filtrar por tipo',
    'projects.all': 'Todos',
    'projects.count': 'proyectos',
    'projects.viewCase': 'Ver el caso',
    'projects.role': 'Mi rol',
    'projects.result': 'Resultado',
    'projects.stack': 'Stack',
    'projects.period': 'Periodo',
    'projects.team': 'Equipo',
    'projects.links': 'Enlaces',
    'projects.link.repo': 'Código',
    'projects.link.live': 'Web en producción',
    'projects.link.dashboard': 'Dashboard',
    'projects.link.docs': 'Documentación',
    'projects.back': 'Volver a proyectos',
    'projects.more': 'Más proyectos',
    'projects.category.analytics': 'Analítica',
    'projects.category.engineering': 'Ingeniería de datos',
    'projects.category.product': 'Producto',

    'master.kicker': 'Máster Big Data & Cloud · EDEM 2025-2026',
    'master.title': 'Un año construyendo, de Docker a Vertex AI',
    'master.intro':
      'Tres Data Projects en equipo, un hackathon, un TFM con empresa real y prácticas en cada módulo. Esto es el recorrido completo, con el código que puedo enseñar.',
    'master.milestones': 'Hitos',
    'master.practice': 'Prácticas por módulo',
    'master.practice.intro': 'Repositorios de ejercicios, uno por tecnología. Los que aún son privados se abrirán en breve.',
    'master.private': 'privado',
    'master.viewRepo': 'Ver repo',

    'about.kicker': 'Sobre mí',
    'about.title': 'De optimizar páginas a medir el negocio',
    'about.intro':
      'Empecé en SEO técnico pensando que mi trabajo era hacer que Google entendiera mis páginas. Acabé escribiendo pipelines en Python para extraer datos de la API de Search Console, modelando experimentos y publicando dashboards. Esa transición, de optimizar páginas a diseñar la infraestructura que las mide, es lo que me llevó al máster en Big Data & Cloud. Antes de los datos hubo ocho años de marketing, investigación de mercados y auditoría, y de ahí viene el criterio de negocio que aplico a cada modelo.',

    'experience.kicker': 'Experiencia',
    'experience.title': 'Puestos de datos',
    'experience.before': 'Antes de los datos',
    'experience.before.intro':
      'Ocho años en marketing, investigación de mercados y administración en manufactura, hotelería, consumo masivo y servicios financieros. De ahí viene el criterio de negocio que aplico a los datos.',

    'stack.kicker': 'Stack',
    'stack.title': 'Lo que uso cada semana',

    'education.kicker': 'Formación',
    'education.title': 'Negocio primero, datos después',
    'education.certs': 'En curso',

    'contact.kicker': 'Contacto',
    'contact.title': '¿Hablamos?',
    'contact.intro':
      'Busco un puesto de Analytics Engineer o Data Analyst en Valencia o en remoto. Escríbeme y te respondo el mismo día.',
    'contact.email': 'Escribir un email',
    'contact.cv': 'Descargar CV (PDF)',

    'footer.built': 'Hecho con Astro y desplegado en Vercel. Código abierto en',
    'footer.rights': 'Francisco Álvarez Varas',

    'cv.file': '/cv/Francisco_Alvarez_Varas_CV_ES.pdf',
  },
  en: {
    'meta.title': 'Francisco Álvarez Varas · Analytics Engineer',
    'meta.description':
      'Analytics Engineer and Data Analyst based in Valencia, Spain. Data modelling with SQL and dbt, pipelines on Google Cloud and dashboards business people actually use.',
    'meta.pipeline': 'How I work · interactive end-to-end pipeline',
    'meta.projects': 'Projects · analytics and data engineering case studies',
    'meta.master': "Master's in Big Data & Cloud · EDEM 2025-2026",
    'meta.about': 'About · experience, stack and education',

    'nav.home': 'Home',
    'nav.pipeline': 'How I work',
    'nav.projects': 'Projects',
    'nav.master': "Master's",
    'nav.about': 'About',
    'nav.contact': "Let's talk",
    'nav.lang': 'Español',
    'nav.langShort': 'ES',
    'nav.menu': 'Menu',

    'hero.kicker': 'Analytics Engineer · Data Analyst',
    'hero.name': 'Francisco Álvarez Varas',
    'hero.pitch':
      "I turn scattered data into models, metrics and dashboards that business people actually use. Three years of analytics with Python and SQL, plus a Big Data & Cloud master's building pipelines on Google Cloud.",
    'hero.location': 'Valencia, Spain · remote',
    'hero.status': 'Open to work',
    'hero.cta.projects': 'See projects',
    'hero.cta.cv': 'Download CV',
    'hero.cta.linkedin': 'LinkedIn',
    'hero.fact1.k': '3+ years',
    'hero.fact1.v': 'in data and business analytics',
    'hero.fact2.k': '7 projects',
    'hero.fact2.v': 'end-to-end, from source to dashboard',
    'hero.fact3.k': 'GCP · BigQuery · dbt',
    'hero.fact3.v': 'core stack, with Terraform and CI/CD',

    'home.pipeline.kicker': 'How I work',
    'home.pipeline.title': 'This is how I build a data pipeline',
    'home.pipeline.intro':
      'From sources to dashboard, with data quality, orchestration and infrastructure as code. In the interactive version you can remove any piece and watch what breaks downstream.',
    'home.pipeline.cta': 'Explore the interactive pipeline',
    'home.pipeline.badge': 'Interactive',
    'home.projects.cta': 'See all 7 projects',
    'home.master.kicker': "Master's in Big Data & Cloud · EDEM",
    'home.master.title': 'A year of building, from Docker to Vertex AI',
    'home.master.intro': 'Three team Data Projects, a hackathon, a thesis with a real company and hands-on practice in every module.',
    'home.master.cta': "See the master's journey",
    'home.master.s1.k': '3',
    'home.master.s1.v': 'team Data Projects',
    'home.master.s2.k': '1',
    'home.master.s2.v': 'thesis with a real company',
    'home.master.s3.k': '12',
    'home.master.s3.v': 'modules with practice',

    'pipeline.kicker': 'How I work',
    'pipeline.title': 'An end-to-end data pipeline, piece by piece',
    'pipeline.intro':
      'This is the architecture I apply in my projects: from sources to dashboard, with data quality, orchestration and infrastructure as code. Click a piece to see what it does and where I have built it. Then remove it to see what breaks downstream.',
    'pipeline.hint': 'Click a piece · Remove it from the panel',
    'pipeline.scenarios': 'Try a scenario',
    'pipeline.variant.label': 'Pick a version',
    'pipeline.howto.title': 'How to read the diagram',
    'pipeline.howto.1': 'Data flows left to right, from sources to consumption. The labels on the arrows say in which format or under which condition it passes.',
    'pipeline.howto.2': 'The bars at the top and bottom move no data: they orchestrate, protect and watch the pieces they connect.',
    'pipeline.howto.3': 'Click a piece to read what it does, with which service and in which project I built it. Remove it to see what breaks downstream.',
    'pipeline.layers.title': 'The layers, one by one',
    'pipeline.layers.intro': 'What each stage is, why it exists, which services build it and where I have built it.',
    'pipeline.layers.what': 'What it is',
    'pipeline.layers.why': 'Why it exists',
    'pipeline.layers.services': 'Services',
    'pipeline.layers.mine': 'Where I have done it',
    'pipeline.story.title': 'The journey of one record',
    'pipeline.story.intro': 'Follow a single change from start to finish. Each step lights up its piece in the diagram.',
    'pipeline.story.cta': 'Show in the diagram',
    'pipeline.tour': 'Guided tour',
    'pipeline.tourStop': 'Stop the tour',
    'pipeline.remove': 'Remove this piece',
    'pipeline.restore': 'Put the piece back',
    'pipeline.restoreAll': 'Restore everything',
    'pipeline.tools': 'Tools',
    'pipeline.evidence': 'Where I have built it',
    'pipeline.whatBreaks': 'What happens without it',
    'pipeline.affected': 'Affected pieces',
    'pipeline.removedCount': 'pieces removed',
    'pipeline.legend.stale': 'No data or stale',
    'pipeline.legend.partial': 'Incomplete data',
    'pipeline.legend.dirty': 'Unreliable data',
    'pipeline.legend.risk': 'Latent risk',
    'pipeline.legend.removed': 'Removed piece',
    'pipeline.status.stale': 'no data',
    'pipeline.status.partial': 'incomplete',
    'pipeline.status.dirty': 'unreliable',
    'pipeline.status.risk': 'at risk',
    'pipeline.status.removed': 'removed',
    'pipeline.healthy': 'The whole pipeline is up. Remove a piece to see its effect.',
    'pipeline.noscript': 'The diagram is interactive with JavaScript enabled. Without it, this is the static view.',
    'pipeline.svgLabel': 'Diagram of an end-to-end data pipeline',

    'projects.kicker': 'Projects',
    'projects.title': 'Case studies, not just repositories',
    'projects.intro':
      'Each case covers the context, the problem, what I did and the outcome. With links to code and demos where they exist.',
    'projects.featured.kicker': 'Selected projects',
    'projects.featured.title': 'Three cases to start with',
    'projects.filter': 'Filter by type',
    'projects.all': 'All',
    'projects.count': 'projects',
    'projects.viewCase': 'Read the case',
    'projects.role': 'My role',
    'projects.result': 'Outcome',
    'projects.stack': 'Stack',
    'projects.period': 'Period',
    'projects.team': 'Team',
    'projects.links': 'Links',
    'projects.link.repo': 'Code',
    'projects.link.live': 'Live site',
    'projects.link.dashboard': 'Dashboard',
    'projects.link.docs': 'Documentation',
    'projects.back': 'Back to projects',
    'projects.more': 'More projects',
    'projects.category.analytics': 'Analytics',
    'projects.category.engineering': 'Data engineering',
    'projects.category.product': 'Product',

    'master.kicker': "Master's in Big Data & Cloud · EDEM 2025-2026",
    'master.title': 'A year of building, from Docker to Vertex AI',
    'master.intro':
      "Three team Data Projects, a hackathon, a thesis with a real company and hands-on practice in every module. This is the full journey, with the code I can show.",
    'master.milestones': 'Milestones',
    'master.practice': 'Practice by module',
    'master.practice.intro': 'Exercise repositories, one per technology. The ones still private will open soon.',
    'master.private': 'private',
    'master.viewRepo': 'View repo',

    'about.kicker': 'About',
    'about.title': 'From optimising pages to measuring the business',
    'about.intro':
      "I started in technical SEO thinking my job was to make Google understand my pages. I ended up writing Python pipelines to pull data from the Search Console API, modelling experiments and publishing dashboards. That shift, from optimising pages to designing the infrastructure that measures them, is what took me to the master's in Big Data & Cloud. Before data there were eight years of marketing, market research and auditing, and that is where the business judgement I bring to every model comes from.",

    'experience.kicker': 'Experience',
    'experience.title': 'Data roles',
    'experience.before': 'Before data',
    'experience.before.intro':
      'Eight years in marketing, market research and administration across manufacturing, hospitality, consumer goods and financial services. That is where the business judgement I bring to data comes from.',

    'stack.kicker': 'Stack',
    'stack.title': 'What I use every week',

    'education.kicker': 'Education',
    'education.title': 'Business first, data second',
    'education.certs': 'In progress',

    'contact.kicker': 'Contact',
    'contact.title': "Let's talk",
    'contact.intro':
      "I'm looking for an Analytics Engineer or Data Analyst role in Valencia or remote. Drop me a line and I'll reply the same day.",
    'contact.email': 'Send an email',
    'contact.cv': 'Download CV (PDF)',

    'footer.built': 'Built with Astro and deployed on Vercel. Source code on',
    'footer.rights': 'Francisco Álvarez Varas',

    'cv.file': '/cv/Francisco_Alvarez_Varas_CV_EN.pdf',
  },
} as const;

export type UiKey = keyof (typeof ui)['es'];

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[DEFAULT_LANG][key];
  };
}
