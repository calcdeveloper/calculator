# CalcPilot - Advanced All-in-One Calculator Platform

CalcPilot is a highly scalable, SEO-optimized, mobile-first calculator platform designed to host 500+ calculators across finance, health, math, engineering, construction, education, and everyday utilities.

## Tech Stack

* **Framework:** Next.js App Router
* **Rendering:** Static Site Generation with `output: "export"`
* **Styling:** Tailwind CSS
* **Interactivity:** Client-side React islands for calculators and search

## Key Features

* Static HTML pages for categories and calculator routes.
* SEO metadata, sitemap, and robots output for crawler discovery.
* Reusable calculator registry with formula logic separated from page generation.
* High-traffic friendly deployment through static hosting/CDN.

## Setup Instructions

```bash
cd next-calculators
npm install
npm run dev
```

## Static Production Build

```bash
cd next-calculators
npm run build
```

The generated static site is written to `next-calculators/out/`.
