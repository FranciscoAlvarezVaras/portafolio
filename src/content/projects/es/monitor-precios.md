---
title: Monitor de precios de supermercados
summary: Seguir cada día los precios de Mercadona y Dia, comparar una cesta común entre tiendas y ver qué productos suben y cuáles bajan.
result: Pipeline diario funcionando en una Raspberry Pi, con histórico de precios, cesta comparada entre tiendas y dashboard de tendencias.
role: "Diseño y construcción completa del pivote, de la especificación al dashboard: modelo de datos, scrapers, matching de productos, vistas SQL, CronJob y visualización."
period: Jun 2026
team: Con Miguel Moratilla, profesor de cloud del máster
category: analytics
stack: [Python, PostgreSQL, SQL, Kubernetes, Docker, Plotly Dash, rapidfuzz, Claude API]
featured: true
order: 2
---

## Contexto

El punto de partida era un repositorio de mi profesor de cloud que procesaba tickets de Mercadona con OCR y los cargaba en ClickHouse sobre Kubernetes. Propuse un pivote: en vez de leer tickets, consultar cada día los catálogos públicos de varios supermercados y construir un histórico de precios comparable entre tiendas.

## Problema

Comparar precios entre supermercados parece trivial hasta que lo intentas. El mismo aceite se llama de tres maneras distintas, viene en formatos diferentes y cambia de identificador. Sin una noción de "producto canónico" solo tienes listas de precios que no se pueden cruzar.

## Qué hice yo

- **Especificación y plan.** Escribí el documento de diseño del monitor y el plan de implementación por fases antes de tocar código.
- **Modelo de datos.** Cinco tablas en PostgreSQL: supermercados, productos por tienda con identificador estable, snapshots de precio con una fila por producto, tienda y día, cesta canónica y mapeos entre cada producto canónico y su equivalente en cada tienda.
- **Scrapers.** Un cliente por tienda con una interfaz común que devuelve snapshots normalizados: Mercadona a través de su API JSON pública y Dia a través de sus endpoints de catálogo y búsqueda, con paginación robusta y límites por ejecución.
- **Matching de productos.** Normalización de nombres, emparejamiento difuso con rapidfuzz y, cuando la confianza es baja, una llamada a Claude que decide y devuelve una puntuación. Los resultados quedan en una tabla revisable, nunca se aplican a ciegas.
- **Vistas de análisis.** Cuatro vistas SQL pensadas para Metabase o cualquier BI: variación frente al snapshot anterior, mayores subidas y bajadas en 30 días, comparación de la cesta entre tiendas y evolución temporal por producto.
- **Operación.** CronJob de Kubernetes a las seis de la mañana en una Raspberry Pi 4, con ConfigMap y copias de seguridad de la base de datos.
- **Dashboard.** Aplicación Plotly Dash con KPIs, tendencia, comparación entre tiendas y una tabla de los 100 productos más populares con un precio de referencia mantenido a mano a partir de datos del INE.
- **Siguiente paso documentado.** Especificación de despliegue en AWS sobre una única instancia EC2 con Terraform.

## Arquitectura

Catálogos públicos → snapshot diario en Python → PostgreSQL → vistas SQL de informe → dashboard. Cada pieza se puede sustituir sin tocar las demás: añadir Carrefour es escribir un cliente nuevo que cumpla la misma interfaz.

## Resultado

Un histórico de precios que crece solo cada día, una cesta de productos básicos comparable entre tiendas y un dashboard que responde a la pregunta que cualquiera se hace en el supermercado: ¿esto ha subido?

## Lo que me llevo

Que el trabajo de analítica de verdad empieza en el modelo de datos. Las vistas SQL fueron lo más rápido de escribir precisamente porque las tablas ya respondían a las preguntas.
