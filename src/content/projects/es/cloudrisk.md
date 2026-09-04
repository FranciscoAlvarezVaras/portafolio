---
title: CloudRISK · pipeline serverless para un juego geolocalizado
summary: Un Risk sobre los 87 barrios de Valencia donde las tropas salen de los pasos reales de cada jugador, construido como pipeline streaming 100 % serverless en Google Cloud.
result: Arquitectura completa desplegada con un solo terraform apply. Coste estimado por debajo de 3 € al mes con diez partidas diarias.
role: Backend en FastAPI, walker como Cloud Run Job, infraestructura en Terraform, CI/CD y simulador de bots. Mayor contribuidor del repositorio del equipo.
period: Abr 2026
team: Equipo de 5 · Data Project 2
category: engineering
stack: [Pub/Sub, Dataflow, Apache Beam, Firestore, BigQuery, Cloud Run, Cloud Scheduler, Terraform, FastAPI, React, MapLibre]
image: /img/projects/cloudrisk-arquitectura.jpg
imageAlt: Arquitectura serverless de CloudRISK en Google Cloud
links:
  repo: https://github.com/alvarogimenezc/DATA-PROJECT-2-EDEM
featured: true
order: 5
---

## Contexto

Segundo proyecto en equipo del máster, en el módulo de procesamiento serverless. La consigna era estricta: nada de máquinas virtuales ni clústeres, todo gestionado por Google, y la infraestructura entera como proyecto de Terraform desplegable con un único comando.

Elegimos un caso de uso con ingesta continua de verdad: un juego de conquista de territorios sobre el mapa real de Valencia en el que los ejércitos no se regalan, se ganan caminando.

## Problema

Cada jugador emite posiciones GPS y pasos en tiempo real, y hay que convertirlos en tropas aplicando reglas que no pueden esperar al día siguiente: un radar de velocidad que descarta trayectos en coche, un tope de 30.000 pasos diarios y un máximo de 50 ejércitos por día. Además, el clima y la calidad del aire de la ciudad modifican la conversión en cada momento.

## Qué hice yo

- **Backend.** API en FastAPI sobre Cloud Run que lee el estado de la partida en Firestore y en BigQuery, y expone las acciones de los jugadores: atacar, fortificar, consultar el mapa.
- **Walker.** Generador de movimientos como Cloud Run Job disparado por Cloud Scheduler, publicando eventos en Pub/Sub.
- **Infraestructura.** Doce ficheros de Terraform que levantan Pub/Sub, Dataflow, Firestore, BigQuery, Cloud Run, Secret Manager y Artifact Registry con un solo apply, y los arreglos necesarios para que el destroy también funcione.
- **CI/CD y demo.** Pipeline de Cloud Build, simulador de bots para llenar el mapa en las presentaciones y un test de humo en la integración continua.
- **Documentación.** Reescritura del README de despliegue y una bitácora de los cincuenta errores más comunes de GCP y Terraform que nos encontramos, para que el siguiente equipo no los repita.

## Arquitectura

Walker, ingestor de clima e ingestor de calidad del aire publican en tres topics de Pub/Sub. Un pipeline de Apache Beam en Dataflow, con estado por jugador, valida cada evento, aplica los multiplicadores y escribe el resultado en Firestore para el estado operativo y en BigQuery para el histórico. El frontend en React con MapLibre pinta el mapa en 3D a través del backend.

## Resultado

Una partida jugable en el navegador con datos que fluyen de punta a punta, todo escalando a cero cuando nadie juega. Y una manera de trabajar que repetí después: primero levantar la arquitectura en local con emuladores y Docker Compose, y solo entonces desplegar en la nube.

## Lo que me llevo

Terraform no es una herramienta de infraestructura, es una herramienta de comunicación. Cuando el entorno entero está en ficheros revisables, cinco personas pueden tocarlo sin romperse las cosas unas a otras.
