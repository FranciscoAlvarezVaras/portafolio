---
title: Analítica SEO y experimentación en un e-commerce
summary: Medir qué cambios en la web de un e-commerce mueven de verdad el tráfico orgánico, y automatizar el reporting que dirección recibía a mano.
result: Un 14,3 % más de tráfico orgánico atribuible a los experimentos, e informes de KPIs que se generaban solos cada semana.
role: Analista de datos SEO y CRO en GrowBarato, responsable único de la analítica durante año y medio.
period: Abr 2023 – Oct 2024
team: GrowBarato SL
category: analytics
stack: [Python, pandas, Google Search Console API, Google Analytics, SQL, Looker Studio, A/B testing]
featured: true
order: 4
---

## Contexto

GrowBarato es un e-commerce con miles de productos y un catálogo que cambia cada semana. El tráfico orgánico era el canal principal de ventas, pero las decisiones sobre qué páginas mejorar se tomaban por intuición, y los informes para dirección se montaban a mano copiando datos de Search Console y Analytics.

## Problema

La interfaz de Google Search Console limita las filas y el histórico, así que las preguntas importantes, como qué categorías pierden posiciones o qué cambios funcionaron, no se podían responder con lo que se veía en pantalla. Y sin una forma de medir, cada mejora era un acto de fe.

## Qué hice yo

- **Extracción automatizada.** Scripts en Python que descargaban a diario, a través de la API de Search Console, las consultas, páginas y dispositivos, y los guardaban en tablas propias con histórico completo.
- **Diseño de experimentos.** Definí tests A/B y comparaciones antes y después sobre plantillas y grupos de páginas, midiendo el efecto sobre clics, impresiones y posición media frente a páginas de control.
- **Priorización con datos.** Cruce de rendimiento orgánico con conversión para decidir qué categorías tocar primero.
- **Reporting.** Dashboards de KPIs y un informe semanal automatizado que sustituyó al copiar y pegar.

## Resultado

Un 14,3 % más de tráfico orgánico atribuible a los cambios medidos, y una forma de trabajar en la que cada propuesta llegaba con su cifra. Los datos y el código son propiedad de la empresa, por eso esta ficha no enlaza a un repositorio.

## Lo que me llevo

Aquí descubrí que lo que me gustaba no era optimizar páginas, sino construir la infraestructura que las mide. Es el proyecto que me llevó al máster.
