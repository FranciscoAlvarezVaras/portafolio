---
title: EDEM Student Hub · campus virtual con agente de IA
summary: Plataforma para estudiantes con backend en FastAPI, agente conversacional sobre Gemini con acceso a los datos académicos y despliegue automatizado en Cloud Run.
result: Tres servicios en Cloud Run desplegados con Terraform y GitHub Actions. Agente con 34 herramientas sobre 24 tablas en Cloud SQL y búsqueda vectorial en Vertex AI.
role: Backend y arquitectura.
period: May 2026
team: Equipo de 6 · Data Project 3
category: engineering
stack: [FastAPI, JWT, Google ADK, Gemini 2.5 Flash, Cloud SQL, Vertex AI Vector Search, Firestore, Terraform, GitHub Actions, React]
image: /img/projects/studenthub-arquitectura.png
imageAlt: Arquitectura de EDEM Student Hub en Google Cloud
links:
  repo: https://github.com/celiiasarrio/DataIAProject_3
featured: false
order: 7
---

## Contexto

Tercer proyecto en equipo del máster, centrado en productos de datos con IA generativa. El caso: un campus virtual para EDEM en el que un estudiante consulta horarios, notas, entregas y avisos, y puede preguntarle a un asistente en lenguaje natural.

## Problema

Un agente conversacional es tan bueno como los datos a los que puede acceder y las herramientas que tiene para consultarlos. Había que diseñar un modelo relacional completo del campus, exponerlo con una API autenticada y darle al agente herramientas seguras para leerlo, con memoria de sesión y búsqueda semántica sobre documentos.

## Qué hice yo

- **Backend.** API en FastAPI con autenticación JWT, datos académicos, subida de ficheros y conexión a Cloud SQL.
- **Arquitectura.** Diseño de los tres servicios, frontend, backend y agente, y de cómo se comunican y se despliegan.

## Arquitectura

Frontend en React con Vite, backend en FastAPI y un servicio de agente construido con Google ADK y Gemini 2.5 Flash con 34 herramientas. Cloud SQL con PostgreSQL y 24 tablas como fuente de verdad, Vertex AI Vector Search para búsqueda semántica y Firestore para la memoria de sesión. Terraform levanta la infraestructura y GitHub Actions despliega los tres servicios a Cloud Run en cada push a main.

## Resultado

Un campus funcional con asistente, defendido ante el tribunal en mayo de 2026.
