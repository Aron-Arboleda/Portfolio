# Content editing guide

How to fill in portfolio content after launch. All copy lives in `src/data/` — no component changes needed for narratives.

## Quick wins

1. **Profile photo (About)** — `public/images/profile/aron-portrait.webp` (800×800 WebP)
2. **Home hero photo** — `public/images/profile/aron-hero.webp` (600×800 or 3:4 portrait WebP)
3. **LinkedIn URL** — `src/data/profile.ts` → `socials` LinkedIn `href`
4. **Resume PDF** — `public/Aron_Arboleda_Resume.pdf` (linked via `profile.resumeUrl`)
5. **Featured project heroes** — `u-heal`, `liquefact`, `draft2dimen-v2` (see [public/images/README.md](public/images/README.md))

## Per-project editing

Edit `src/data/projects/<slug>.ts` for each project:

| Field | What to write |
| ----- | ------------- |
| `overview` | 2–3 paragraphs: problem → approach → outcome |
| `contribution` | What you specifically built or owned |
| `challenges` | Replace `PLACEHOLDER_CHALLENGES` with real bullet strings |
| `learnings` | Replace `PLACEHOLDER_LEARNINGS` with real bullet strings |
| `results` | Optional metrics, awards, or impact (string) |
| `techStackDetails` | Optional per-tech notes (see `u-heal.ts` as example) |
| `images` | Add WebP files under `public/images/projects/<slug>/` |

When `challenges` and `learnings` no longer contain `Add your reflections here.`, the project detail page automatically shows your bullets instead of the edit-hint card.

## Suggested priority

1. **u-heal** — thesis flagship
2. **liquefact** — featured freelance / GIS
3. **draft2dimen-v2** — featured desktop
4. **liwanag-at-dunong** — NGO web
5. **rebyu** — full-stack web
6. Remaining projects as time allows

## Verify images

```bash
npm run verify:images        # fails if any expected file is missing
npm run verify:images:warn   # lists missing files without failing
```

## Integrations (already wired)

| Feature | Config |
| ------- | ------ |
| Contact form | `VITE_WEB3FORMS_ACCESS_KEY` in Vercel env (or `.env` locally) |
| Analytics | `@vercel/analytics` + enable Web Analytics in Vercel dashboard |
| Resume download | `profile.resumeUrl` in `src/data/profile.ts` |
