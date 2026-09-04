---
title: Predicción de rotación de empleados en Google Cloud
summary: Anticipar qué empleados de una consultora tecnológica están en riesgo de irse, a partir de 24 meses de registros de RRHH y de mensajes de Slack.
result: Pipeline reproducible en GCP que procesa datos nuevos sin intervención manual, con dashboard de retención en Looker Studio y modelo interpretable en Vertex AI.
role: Ingesta de fuentes externas de mercado laboral, normalización de la capa bronze, catálogo de KPIs de retención y vistas gold que alimentan el dashboard.
period: Jun – Jul 2026
team: Equipo de 5 · Trabajo Fin de Máster con Quantia Ingeniería y Consultoría
category: analytics
stack: [BigQuery, Dataform, Cloud Storage, Vertex AI, Looker Studio, Terraform, Dataplex, Python, SQL]
image: /img/projects/tfm-arquitectura.png
imageAlt: Arquitectura del pipeline en Google Cloud, de la ingesta al dashboard y al modelo
links:
  repo: https://github.com/carlos959358/-tfm-quantia-edem
featured: true
order: 1
---

## Contexto

Quantia es una consultora de ingeniería cuyo activo principal es el talento técnico. Su sistema de evaluaciones anuales llegaba tarde: detectaba el riesgo de salida cuando el empleado ya tenía un pie fuera. Nos entregaron dos ficheros con 24 meses de historia de 130 empleados, un Excel con los registros mensuales de RRHH y un CSV con los mensajes del canal corporativo de Slack, y una pregunta de negocio:

> ¿Podemos anticipar qué empleados están en riesgo de abandonar la empresa antes de que sea demasiado tarde?

El reto tenía cuatro bloques: ingeniería de datos, visualización, análisis de texto y modelo predictivo. Y un hito final que marcaba la diferencia entre un ejercicio y una solución: al terminar, Quantia entregaría datos de un periodo posterior y el pipeline debía procesarlos y generar predicciones nuevas **sin que nadie tocara nada**.

## Problema

Los datos numéricos de RRHH cuentan qué pasó, pero no por qué. La señal emocional está en el texto, y el texto llega desordenado, con jerga y con nombres propios. Además, el contexto externo importa: no es lo mismo que un empleado esté descontento cuando el mercado paga lo mismo que cuando la competencia ofrece un 20 % más.

Para responder con rigor hacía falta un data lake por capas, con calidad y gobierno, y no un notebook.

## Qué hice yo

- **Fuentes externas de mercado laboral.** Diseñé e implementé la ingesta de Eurostat y de la API de Adzuna para comparar los salarios internos con los de mercado por rol, y dejé un módulo de analítica local para explorar esas series antes de subirlas.
- **Capa bronze.** Renombré la capa raw a bronze y normalicé los nombres y tipos de todas las columnas de entrada para que el resto del equipo trabajara sobre un esquema estable.
- **Catálogo de KPIs.** Escribí el documento de diseño del análisis exploratorio y del catálogo de indicadores de RRHH: definición técnica, interpretación de negocio y umbral accionable de cada uno.
- **Vistas gold para el dashboard.** Construí las vistas de la capa gold que alimentan el centro de mando de retención en Looker Studio, y la guía para conectarlas y mantenerlas.
- **Integración.** Revisé e integré las ramas de migración del bloque de machine learning al repositorio principal.

## Arquitectura

Landing en Cloud Storage, transformaciones en BigQuery con Dataform siguiendo el patrón bronze, silver y gold, aserciones de calidad en cada capa y etiquetas de datos personales en las columnas sensibles. Sobre gold se sirven el dashboard de Looker Studio y los modelos de Vertex AI: análisis de sentimiento y temas sobre Slack, y un modelo de rotación con explicabilidad para que un manager entienda por qué un empleado aparece marcado. Toda la infraestructura está en Terraform, separada por entornos, y el catálogo vive en Dataplex.

![Capas bronze, silver y gold del data lake](/img/projects/tfm-medallion.png)

## Resultado

Un pipeline que procesa el dataset del periodo siguiente de principio a fin sin intervención manual, un dashboard con KPIs propios y umbrales, y un modelo evaluado contra criterios de aceptación fijados de antemano por el equipo. Defendido ante tribunal en julio de 2026.

## Lo que me llevo

Que la capa gold es un contrato con negocio, no una tabla más. Cuando cada KPI tiene dueño, fórmula y umbral escritos, las reuniones dejan de discutir cifras y pasan a discutir decisiones.
