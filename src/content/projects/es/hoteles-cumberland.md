---
title: Web y motor de reservas de Hoteles Cumberland
summary: Sustituir la web de una cadena de cuatro hoteles por una plataforma propia con reservas, panel de administración, CRM de huéspedes y correos automáticos.
result: En producción desde agosto de 2026. Motor de reservas propio, panel de administración con seguridad reforzada y suite de tests automatizados.
role: Proyecto completo en solitario, de la propuesta al despliegue, incluido el manual de edición para que el cliente mantenga el sitio sin programar.
period: Jul – Sep 2026
team: En solitario · cliente real
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

## Contexto

Hoteles Cumberland es una cadena con cuatro sedes en Venezuela: Caracas, Chacao, Coro y Maracaibo. Trabajé allí como auditor interno junior al principio de mi carrera, así que conocía el negocio por dentro. Su web antigua redirigía las reservas a una plataforma externa, tenía las tildes rotas por un problema de codificación y no existía ningún panel: cualquier cambio de texto pasaba por tocar el código.

## Problema

Hacía falta un producto completo, no una página bonita: que un huésped reservara en cuatro pasos, que el personal viera y confirmara reservas sin programar, que los correos a cada departamento salieran solos y que todo aguantara el spam y los intentos de acceso no autorizados que recibe cualquier formulario público.

## Qué hice yo

- **Sitio público.** Inicio con hero cinematográfico por sede, páginas de cada hotel, catálogo de habitaciones, galería y contacto con correos por departamento.
- **Motor de reservas.** Asistente de cuatro pasos: sede, fechas con calendario visual, habitación con foto y precio, datos del huésped. Cada solicitud genera correos al hotel y al cliente.
- **Panel de administración.** Reservas con cambio de estado, bandeja de mensajes, gestión de habitaciones y precios, notas por huésped a modo de CRM y una vista de seguridad con intentos de acceso e IPs bloqueadas.
- **Seguridad.** Límite de envíos por IP, defensa CSRF, comprobación de origen, cabeceras CSP y HSTS, bloqueo por intentos fallidos, comparación de contraseñas en tiempo constante y neutralización de HTML en los correos. Todo cubierto por tests con Vitest.
- **SEO técnico.** Robots, sitemap, metadatos y datos estructurados por sede.
- **Entrega.** Manual de edición en el README para que el cliente cambie teléfonos, fotos y textos sin conocer el código, y un white paper para los socios con el estado, la arquitectura y la hoja de ruta.

## Arquitectura

Next.js 16 con App Router y TypeScript, Prisma sobre PostgreSQL en Supabase, correos con Resend y despliegue continuo en Vercel a cada push. El contenido editable vive en ficheros de datos separados de la lógica; las habitaciones y reservas viven en la base de datos y se editan desde el panel.

## Resultado

Una plataforma en producción que reemplaza a un proveedor externo, con panel, CRM y seguridad, entregada con documentación para que sobreviva sin mí.

## Lo que me llevo

Un panel de administración es un pipeline de datos con interfaz: las mismas preguntas de modelo, validación y trazabilidad que en un warehouse, con un usuario delante.
