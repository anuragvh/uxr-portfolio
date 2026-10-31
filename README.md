# UX Research Portfolio

Personal portfolio built with Next.js, React, and Tailwind CSS. The production build is exported as a static site for GitHub Pages.

## Local development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build

```bash
npm run lint
npm run build
```

The static site is generated in `out/`.

## GitHub Pages

Production builds use `/uxr-portfolio` as the base path. Set `NEXT_PUBLIC_BASE_PATH` at build time to override it when deploying under a different path or a custom domain.
