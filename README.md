# metric-site

The standalone **METRICS / AdMetrics Pro** marketing site. Static, no backend,
no auth — every number is hardcoded fixture content. Decoupled from the
AdMetrics dashboard monorepo; deploys independently to its own `.vercel.app`.

## Stack

Vite 6 · React 18 (pure JS/JSX) · Tailwind 3 (token-driven CSS vars) ·
Framer Motion · React Router 6 · Recharts (static chart) · i18next (10 langs,
RTL for ar/fa) · @number-flow/react · zustand (theme) · lucide-react · clsx.

No `@tanstack/react-query`, `axios`, auth, or live API — by design.

## Cross-repo links

Marketing CTAs that point at the dashboard ("Start free", "Log in",
"Open live demo") are env-driven via **`VITE_APP_URL`**:

```bash
cp .env.example .env     # VITE_APP_URL=http://localhost:5173 (dev default)
```

In production set `VITE_APP_URL` to the dashboard's `.vercel.app` URL.
Internal marketing routes (`/platforms`, `/features`, `/pricing`, …) use the
in-app router. (The dashboard app will later carry its own `VITE_SITE_URL`
back to this site — that's the app's concern, not this repo's.)

## Run

```bash
pnpm install
pnpm dev        # http://localhost:5174
pnpm build      # → dist/  (must be 0 errors)
pnpm preview
```

## Routes

`/` · `/platforms` · `/features` · `/solutions/dtc` · `/solutions/agency` ·
`/pricing` · `/docs` · `/download` — all wrapped by `MarketingLayout`
(sticky nav + footer). Catch-all `*` → `/`.

## Notes

- Design tokens (`src/index.css` `:root` light / `.dark`) and the UI
  primitives under `src/components/ui/` are **copies** of the dashboard's,
  kept in sync manually for now (a shared `@metrics/ui` package is a later
  roadmap item).
- Download buttons are placeholders until real signed binaries exist.
