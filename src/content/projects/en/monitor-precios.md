---
title: Supermarket price monitor
summary: Track Mercadona and Dia prices every day, compare a common basket across stores and see which products go up and which go down.
result: A daily pipeline running on a Raspberry Pi, with price history, a cross-store basket comparison and a trends dashboard.
role: "Full design and build of the pivot, from spec to dashboard: data model, scrapers, product matching, SQL views, CronJob and visualisation."
period: Jun 2026
team: With Miguel Moratilla, cloud lecturer on the master's
category: analytics
stack: [Python, PostgreSQL, SQL, Kubernetes, Docker, Plotly Dash, rapidfuzz, Claude API]
featured: true
order: 2
---

## Context

The starting point was a repository from my cloud lecturer that processed Mercadona receipts with OCR and loaded them into ClickHouse on Kubernetes. I proposed a pivot: instead of reading receipts, query the public catalogues of several supermarkets every day and build a price history that can be compared across stores.

## Problem

Comparing supermarket prices looks trivial until you try. The same olive oil goes by three different names, comes in different sizes and changes identifier. Without a notion of a "canonical product" all you have are price lists that cannot be joined.

## What I did

- **Spec and plan.** Wrote the design document for the monitor and a phased implementation plan before touching code.
- **Data model.** Five PostgreSQL tables: supermarkets, per-store products with a stable id, price snapshots with one row per product, store and day, a canonical basket, and mappings between each canonical product and its equivalent in each store.
- **Scrapers.** One client per store behind a common interface that yields normalised snapshots: Mercadona through its public JSON API and Dia through its catalogue and search endpoints, with robust pagination and per-run limits.
- **Product matching.** Name normalisation, fuzzy matching with rapidfuzz and, when confidence is low, a Claude call that decides and returns a score. Results land in a reviewable table and are never applied blindly.
- **Analysis views.** Four SQL views built for Metabase or any BI tool: change versus the previous snapshot, biggest risers and fallers over 30 days, basket comparison across stores and price over time per product.
- **Operations.** A Kubernetes CronJob at six in the morning on a Raspberry Pi 4, with a ConfigMap and database backups.
- **Dashboard.** A Plotly Dash app with KPIs, trend, store comparison and a table of the 100 most popular products against a hand-maintained reference price based on national statistics.
- **Documented next step.** A deployment spec for AWS on a single EC2 instance with Terraform.

## Architecture

Public catalogues → daily Python snapshot → PostgreSQL → SQL report views → dashboard. Every piece can be replaced without touching the others: adding Carrefour means writing one more client that honours the same interface.

## Outcome

A price history that grows on its own every day, a basket of staples comparable across stores and a dashboard that answers the question everyone asks at the till: did this go up?

## What I take with me

Real analytics work starts in the data model. The SQL views were the fastest part to write precisely because the tables already answered the questions.
