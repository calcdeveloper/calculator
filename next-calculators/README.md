# CalcPilot

CalcPilot is a static-exported Next.js calculator platform. The production build is optimized for search crawling and high-traffic hosting by generating pages as static HTML at build time.

## Rendering Model

- **Primary rendering:** SSG/static export.
- **Runtime SSR:** Not used.
- **CSR:** Used only for interactive islands such as calculator inputs, search, navbar menu state, charts, and feedback UI.

The static export is enforced in `next.config.mjs`:

```js
output: "export"
```

Routes are also guarded with `dynamic = "force-static"` and dynamic routes use `generateStaticParams()` with `dynamicParams = false`.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Static Production Build

```bash
npm run build
```

The generated static site is written to `out/`.

## SEO Files

The app generates static SEO assets:

- `/sitemap.xml`
- `/robots.txt`

Set the public site URL before production builds if your domain is different from the default:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com npm run build
```

Deploy the `out/` directory to any static host or CDN.
