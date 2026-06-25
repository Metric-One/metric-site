# CLAUDE.md — metric-site

> Standalone marketing / portfolio site for **METRICS / AdMetrics Pro**.
> Static, public, no backend. Source of truth for anyone (human or AI)
> working in this repo.

## Narrative pivot

This repo was **split out of the AdMetrics dashboard monorepo**. The
marketing surface used to live at `frontend/src/portals/marketing/` inside
that app; it now stands alone so it can deploy independently to its own
`.vercel.app` URL. The dashboard app, the productivity app (`metric-planner`),
and this marketing site are three separate repos.

**What this repo IS:** the public marketing surface — landing, platforms,
features, pricing, docs, solutions (DTC / agency), and the download center.
**What it is NOT:** no API, no auth, no database, no live data. Every number
on the page is static fixture content.

## Hard rules (do not break)

1. **Stay static.** No `fetch`/axios, no react-query, no auth, no backend
   calls. Marketing data lives in `src/data/*` only.
2. **Cross-repo links are env-driven.** Links into the dashboard app
   ("Start free", "Log in", "Open live demo") go through `appHref()` in
   `src/lib/links.js`, resolved from **`VITE_APP_URL`** (dev default
   `http://localhost:5173`). Internal marketing routes use the router.
   Never hardcode a dashboard domain.
3. **Design system is a copy.** Tokens (`src/index.css` `:root`/`.dark`),
   `tailwind.config.js`, and the primitives in `src/components/ui/` are
   copied from the dashboard repo and kept in sync **manually**. A shared
   `@metrics/ui` package is a later roadmap item — don't add it yet.
4. **Pure JS/JSX, Tailwind utilities, no secrets in the repo.** Only
   `.env.example` is committed.

## Stack

Vite 6 · React 18 · Tailwind 3 (token-driven CSS vars, dark/light) ·
Framer Motion · React Router 6 · Recharts (static chart) · i18next (10
languages, RTL for ar/fa) · @number-flow/react · zustand (theme) ·
lucide-react · clsx.

## Run / build / deploy

```bash
pnpm install
cp .env.example .env          # set VITE_APP_URL
pnpm dev                      # http://localhost:5174
pnpm build                    # → dist/  (must be 0 errors)
pnpm preview
```

Deploy: static Vite build → Vercel. Set `VITE_APP_URL` to the dashboard's
production URL in the Vercel project's environment variables.

## Routes

`/` · `/platforms` · `/features` · `/solutions/dtc` · `/solutions/agency` ·
`/pricing` · `/docs` · `/download` — all under `MarketingLayout` (sticky nav
+ footer); catch-all `*` → `/`.

## Map

- `src/pages/` — the 8 marketing pages + `MarketingLayout`
- `src/components/` — `MarketingNav`, `MarketingFooter`, static `TrendChart`
- `src/components/ui/` — copied primitives (Button, Surface, Logo, Marquee,
  ThemeToggle, LanguageMenu, LiveSparkline, MeshBackground, Spinner)
- `src/data/` — static fixtures (`marketing.fixtures.js`, `trend.js`)
- `src/lib/links.js` — the `VITE_APP_URL` cross-repo link contract
- `src/i18n/` — 10 nav-only locale files (RTL for ar/fa)
