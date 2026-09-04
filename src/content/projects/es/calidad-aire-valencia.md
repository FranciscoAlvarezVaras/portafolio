---
title: Monitor de calidad del aire en Valencia
summary: Ingerir en tiempo real las estaciones de calidad del aire de Valencia, transformar los datos con dbt y avisar cuando se superan los umbrales.
result: Reconocido como top team del máster. Pipeline completo en Docker con dbt cada cinco minutos, dashboards en Grafana y alertas por Telegram.
role: Segundo contribuidor del equipo. Ingesta, modelos de transformación en dbt e integración de los servicios en Docker Compose.
period: Ene 2026
team: Equipo de 5 · Data Project 1
category: engineering
stack: [PostgreSQL, dbt, FastAPI, Docker Compose, Grafana, Python, Telegram Bot API]
featured: true
order: 3
---

## Contexto

Primer proyecto en equipo del máster, al cerrar el bloque de tratamiento del dato. El caso: construir un sistema de monitorización de la calidad del aire de Valencia que sirviera tanto para consultar el estado actual como para analizar el histórico, con un equipo de cinco personas y dos semanas de plazo.

## Problema

Los datos de las estaciones llegan de forma continua y con lecturas que a veces faltan o vienen fuera de rango. Había que separar claramente tres cosas: recibir y guardar el dato crudo, transformarlo en tablas limpias y agregadas, y consumirlo desde dashboards y alertas. Y todo tenía que levantarse en cualquier ordenador con un solo comando.

## Qué hice yo

- Parte de la **ingesta** de lecturas hacia PostgreSQL y su carga histórica.
- **Modelos dbt** que transforman las lecturas crudas en tablas intermedias y marts listos para visualizar, ejecutados cada cinco minutos.
- **Integración** de los servicios en Docker Compose: base de datos, API, transformaciones, Grafana y bot de alertas, con variables de entorno y claves de API generadas por script.

## Arquitectura

Estaciones → ingesta en Python → PostgreSQL → dbt (staging, intermediate, marts) → Grafana para dashboards y un bot de Telegram para alertas. Una API en FastAPI expone el estado actual y las alertas activas, protegida con claves de API.

## Resultado

Un sistema que se levanta con `docker compose up`, transforma en continuo y avisa cuando un contaminante supera el umbral. El tribunal lo reconoció como el mejor proyecto de la promoción.

> El código del repositorio está en proceso de publicación.

## Lo que me llevo

dbt cambió mi manera de escribir SQL: modelos pequeños, con nombre, con test y con documentación al lado. Es el mismo patrón que después apliqué con Dataform en el TFM.
