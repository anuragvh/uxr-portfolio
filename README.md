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

The GitHub Pages workflow builds with an empty `NEXT_PUBLIC_BASE_PATH` so the site and its assets load from the root of a custom domain. For a project site served from `/<repo-name>`, set `NEXT_PUBLIC_BASE_PATH` to that path at build time instead.
