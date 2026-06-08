# Aron Arboleda — Portfolio

Personal portfolio site for Aron Rez D. Arboleda: projects, journey timeline, experience, and contact. Built with React, TypeScript, Tailwind CSS v4, and Vite.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Other commands

| Command | Description |
| ------- | ----------- |
| `npm run build` | Type-check, generate sitemap/robots, production build |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |
| `npm run verify:images` | List missing image assets (fails if any missing) |
| `npm run verify:images:warn` | List missing images without failing |

## Environment variables

Copy `.env.example` to `.env` if needed. The only variable is optional:

- **`VITE_SITE_URL`** — Canonical site URL for sitemap generation. On Vercel, the build auto-detects `VERCEL_PROJECT_PRODUCTION_URL`; you usually do not need to set this.

## Image assets

Project screenshots and profile photo go in `public/images/`. See [public/images/README.md](public/images/README.md) for the full checklist and file naming.

## Deploy to Vercel

1. Push this repo to GitHub.
2. In [Vercel](https://vercel.com), **Add New Project** and import the repository.
3. Framework preset: **Vite** (auto-detected).
4. Confirm build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Deploy. Pushes to `main` trigger production deployments automatically.

SPA routing is handled by [`vercel.json`](vercel.json). The `prebuild` step generates `sitemap.xml` and `robots.txt` with your production URL.

### After first deploy

Smoke-test the live `*.vercel.app` URL:

- All routes: `/`, `/about`, `/journey`, `/projects`, `/experience`, `/contact`
- All 11 project pages under `/projects/:slug`
- `/robots.txt` and `/sitemap.xml` use your production domain
- Deep links (e.g. `/projects/u-heal`) load directly without 404

## Tech stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4
- React Router v7
- Framer Motion
- Deployed on Vercel
