---
title: Website and booking engine for Hoteles Cumberland
summary: Replace the website of a four-hotel chain with an in-house platform with bookings, an admin panel, a guest CRM and automated emails.
result: In production since August 2026. An in-house booking engine, a hardened admin panel and an automated test suite.
role: Solo end-to-end project, from proposal to deployment, including an editing manual so the client can maintain the site without coding.
period: Jul – Sep 2026
team: Solo · real client
category: product
stack: [Next.js 16, TypeScript, Tailwind CSS 4, Prisma 7, PostgreSQL, Supabase, Resend, Vercel, Vitest, Zod]
image: /img/projects/cumberland-cover.jpg
imageAlt: Hoteles Cumberland
links:
  live: https://hotel-web-rosy-one.vercel.app
  repo: https://github.com/FranciscoAlvarezVaras/hotel-web
featured: true
order: 6
---

## Context

Hoteles Cumberland is a chain with four hotels in Venezuela: Caracas, Chacao, Coro and Maracaibo. I worked there as a junior internal auditor early in my career, so I knew the business from the inside. Their old website sent bookings to an external platform, had broken accents due to an encoding bug and had no admin panel at all: every text change meant editing code.

## Problem

They needed a complete product, not a pretty page: a guest booking in four steps, staff viewing and confirming bookings without coding, emails to each department going out on their own, and everything withstanding the spam and unauthorised login attempts any public form receives.

## What I did

- **Public site.** Home with a cinematic hero per hotel, a page for each property, a room catalogue, a gallery and a contact form with per-department emails.
- **Booking engine.** A four-step wizard: hotel, dates with a visual calendar, room with photo and price, guest details. Each request triggers emails to the hotel and to the guest.
- **Admin panel.** Bookings with status changes, a message inbox, room and price management, per-guest notes as a lightweight CRM and a security view with login attempts and blocked IPs.
- **Security.** Per-IP rate limiting, CSRF defence, origin checks, CSP and HSTS headers, lockout after failed attempts, constant-time password comparison and HTML escaping in emails. All covered by Vitest tests.
- **Technical SEO.** Robots, sitemap, metadata and structured data per hotel.
- **Handover.** An editing manual in the README so the client can change phones, photos and copy without touching code, and a white paper for the partners covering status, architecture and roadmap.

## Architecture

Next.js 16 with the App Router and TypeScript, Prisma on PostgreSQL at Supabase, emails through Resend and continuous deployment to Vercel on every push. Editable content lives in data files separate from logic; rooms and bookings live in the database and are edited from the panel.

## Outcome

A production platform that replaces an external vendor, with panel, CRM and security, delivered with documentation so it survives without me.

## What I take with me

An admin panel is a data pipeline with a user interface: the same questions about modelling, validation and traceability as in a warehouse, with a person in front of it.
