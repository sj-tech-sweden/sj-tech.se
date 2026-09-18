# SJ-Tech

[![Netlify Status](https://api.netlify.com/api/v1/badges/d3fb45b1-d5c6-427f-994f-709b34a2f551/deploy-status)](https://app.netlify.com/projects/sj-tech/deploys)

Corporate website for [SJ-Tech](https://sj-tech.se) — specialist services in IT networking, live video production, and event technology for conferences, trade shows, and temporary installations.

## Tech Stack

- [Astro](https://astro.build) v7 — static site generation
- [Tailwind CSS](https://tailwindcss.com) v4 — styling
- Deployed on [Netlify](https://netlify.com)

## Project Structure

```text
src/
├── assets/          # Images (hero, gallery, logo)
├── components/
│   ├── ContactSection.astro   # Netlify Forms contact form
│   ├── Footer.astro
│   ├── Header.astro
│   ├── ProductCard.astro
│   └── ServiceCard.astro
├── data/
│   └── products.ts            # Product data
├── layouts/
│   └── Layout.astro           # Base HTML layout
├── pages/
│   ├── index.astro            # Homepage
│   ├── contact.astro          # Contact page
│   ├── success.astro          # Form submission success page
│   └── products/
│       └── index.astro        # Products page
└── styles/
    └── global.css             # Tailwind config & custom theme
```

## Development

```sh
npm install
npm run dev          # Start dev server at localhost:4321
npm run build        # Build production output to dist/
npm run preview      # Preview the production build locally
```

## Deployment

The site is deployed on Netlify. Pushing to `main` triggers an automatic build and deploy.

### Netlify Forms

The contact form uses [Netlify Forms](https://docs.netlify.com/forms/setup/). No backend code is needed — Netlify intercepts the form POST at build time. Form submissions can be managed in the Netlify dashboard under **Forms**.

### Custom Domain

Configured in the Netlify dashboard. The site is live at [sj-tech.se](https://sj-tech.se).
