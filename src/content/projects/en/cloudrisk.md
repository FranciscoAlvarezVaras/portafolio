---
title: CloudRISK · serverless pipeline for a geolocated game
summary: A Risk over the 87 neighbourhoods of Valencia where troops come from each player's real steps, built as a 100% serverless streaming pipeline on Google Cloud.
result: The full architecture deploys with a single terraform apply. Estimated cost under €3 a month with ten games a day.
role: FastAPI backend, walker as a Cloud Run Job, Terraform infrastructure, CI/CD and bot simulator. Top contributor to the team repository.
period: Apr 2026
team: Team of 5 · Data Project 2
category: engineering
stack: [Pub/Sub, Dataflow, Apache Beam, Firestore, BigQuery, Cloud Run, Cloud Scheduler, Terraform, FastAPI, React, MapLibre]
image: /img/projects/cloudrisk-arquitectura.jpg
imageAlt: CloudRISK serverless architecture on Google Cloud
links:
  repo: https://github.com/alvarogimenezc/DATA-PROJECT-2-EDEM
featured: true
order: 5
---

## Context

Second team project of the master's, in the serverless processing module. The brief was strict: no virtual machines or clusters, everything managed by Google, and the entire infrastructure as a Terraform project deployable with one command.

We chose a use case with genuinely continuous ingestion: a territory-conquest game over the real map of Valencia where armies are not given away, they are earned by walking.

## Problem

Every player emits GPS positions and steps in real time, and they must be turned into troops by applying rules that cannot wait until tomorrow: a speed radar that discards car trips, a cap of 30,000 steps a day and a maximum of 50 armies per day. On top of that, the city's weather and air quality change the conversion rate at every moment.

## What I did

- **Backend.** A FastAPI service on Cloud Run reading game state from Firestore and BigQuery and exposing player actions: attack, fortify, query the map.
- **Walker.** A movement generator as a Cloud Run Job triggered by Cloud Scheduler, publishing events to Pub/Sub.
- **Infrastructure.** Twelve Terraform files bringing up Pub/Sub, Dataflow, Firestore, BigQuery, Cloud Run, Secret Manager and Artifact Registry with one apply, plus the fixes needed for destroy to work too.
- **CI/CD and demo.** A Cloud Build pipeline, a bot simulator to fill the map during presentations and a smoke test in continuous integration.
- **Documentation.** Rewrote the deployment README and kept a log of the fifty most common GCP and Terraform errors we hit, so the next team does not repeat them.

## Architecture

The walker, a weather ingestor and an air-quality ingestor publish to three Pub/Sub topics. An Apache Beam pipeline on Dataflow, with per-player state, validates every event, applies the multipliers and writes the result to Firestore for operational state and to BigQuery for history. The React frontend with MapLibre draws the 3D map through the backend.

## Outcome

A playable game in the browser with data flowing end to end, everything scaling to zero when nobody plays. And a way of working I repeated afterwards: bring the architecture up locally with emulators and Docker Compose first, and only then deploy to the cloud.

## What I take with me

Terraform is not an infrastructure tool, it is a communication tool. When the whole environment lives in reviewable files, five people can touch it without breaking each other's work.
