---
title: EDEM Student Hub · virtual campus with an AI agent
summary: A student platform with a FastAPI backend, a conversational agent on Gemini with access to academic data and automated deployment to Cloud Run.
result: Three Cloud Run services deployed with Terraform and GitHub Actions. An agent with 34 tools over 24 Cloud SQL tables and vector search on Vertex AI.
role: Backend and architecture.
period: May 2026
team: Team of 6 · Data Project 3
category: engineering
stack: [FastAPI, JWT, Google ADK, Gemini 2.5 Flash, Cloud SQL, Vertex AI Vector Search, Firestore, Terraform, GitHub Actions, React]
image: /img/projects/studenthub-arquitectura.png
imageAlt: EDEM Student Hub architecture on Google Cloud
links:
  repo: https://github.com/celiiasarrio/DataIAProject_3
featured: false
order: 7
---

## Context

Third team project of the master's, focused on data products with generative AI. The case: a virtual campus for EDEM where a student checks timetables, grades, assignments and notices, and can ask an assistant in natural language.

## Problem

A conversational agent is only as good as the data it can reach and the tools it has to query it. We had to design a complete relational model of the campus, expose it through an authenticated API and give the agent safe tools to read it, with session memory and semantic search over documents.

## What I did

- **Backend.** A FastAPI service with JWT authentication, academic data, file uploads and a Cloud SQL connection.
- **Architecture.** Design of the three services, frontend, backend and agent, and of how they talk to each other and get deployed.

## Architecture

A React frontend with Vite, a FastAPI backend and an agent service built with Google ADK and Gemini 2.5 Flash with 34 tools. Cloud SQL with PostgreSQL and 24 tables as the source of truth, Vertex AI Vector Search for semantic search and Firestore for session memory. Terraform brings up the infrastructure and GitHub Actions deploys the three services to Cloud Run on every push to main.

## Outcome

A working campus with an assistant, defended before the panel in May 2026.
