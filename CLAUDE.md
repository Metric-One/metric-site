# CLAUDE.md — metric-site

> **Metric Company & Founder Portfolio.** The public home of the *Metric*
> company and the personal portfolio of its founder. Static, public, no
> backend. Source of truth for anyone (human or AI) working in this repo.

---

> ## ⛔ STRICT BUILD RULE — read before writing ANY code
>
> Build **page-by-page, option-by-option.** The AI must **NEVER guess or
> hallucinate** copy, content, features, names, numbers, screenshots, or
> design. **Before coding any section or component, ASK THE FOUNDER for the
> exact details** — the words, the data, the layout intent — and wait for the
> answer. Wherever this file says **"ask founder"** or **"TBD"**, that is a
> hard stop: do not invent a placeholder and ship it. One verified piece at a
> time.

---

## 1. Site identity

- **Name:** Metric Company & Founder Portfolio.
- **Owner / founder:** **Mani Alizadeh** — Marketer & Computer Science student.
- **This is NOT a generic SaaS landing page.** It is a founder-led **company
  site + portfolio**: it tells the story of the *Metric* company and its
  founder, and showcases the products built under the Metric name.
- Voice, taglines, bio wording, exact positioning: **ask founder.**

## 2. What the site showcases — TWO products (Home)

The **Home page is a showcase for both Metric products**, not a single-product
landing.

### AdMetrics Pro
- The dashboard + **marketing analytics** product (true net-profit analytics +
  AI Growth Officer). It has its own dashboard app and marketing surfaces in
  separate repos.
- Exact showcase copy, screenshots, and which features to highlight here:
  **ask founder.**

### Metric Planner  *(teaser / coming soon)*
- The productivity product. Teaser concept **as provided by the founder**:
  - **Combines the power of 5 famous planners** (Notion-style, etc.) into one.
  - A **5–10 question onboarding quiz** that **auto-generates tailored
    workspace templates** for the user's context: **Life / Work / Study /
    Agency.**
- Everything beyond this teaser — the 5 specific planners referenced, the exact
  quiz questions, the template contents, screenshots, and launch status:
  **ask founder.**

## 3. About / Career page

A founder section covering three things (specifics are the founder's to give —
do not invent any of them):
- **Founder background** — Mani Alizadeh's story (marketing + CS). **Ask founder.**
- **The Metric build journey** — how the Metric company and its products came
  to be. **Ask founder.**
- **Company values** — what Metric stands for. **Ask founder.**

## 4. Page plan & current state

**Target pages**
- **`/` Home** — dual-product showcase (AdMetrics Pro + Metric Planner teaser).
- **About / Career** — founder background + build journey + values. Route name
  TBD with founder (e.g. `/about` or `/founder`).
- **Deferred pages — kept as empty shells for now:** Pricing, Platforms, and
  the other legacy pages. Keep them as minimal placeholders; do **not** flesh
  them out until the founder prioritizes them and supplies content.

**Current state (legacy):** this repo was extracted from the AdMetrics
dashboard monorepo, so it still contains the old AdMetrics marketing pages
(`/platforms`, `/features`, `/solutions/dtc`, `/solutions/agency`, `/pricing`,
`/docs`, `/download`). These are **legacy**. They will be reworked into the new
structure **page-by-page, asking the founder first** (see the STRICT BUILD
RULE). Do not bulk-rewrite or auto-generate them.

## 5. Origin / narrative pivot

This repo started as the AdMetrics marketing site (split out of the dashboard
monorepo to deploy independently). It is now **repositioned** as the Metric
**company + founder portfolio** that showcases **both** products (AdMetrics Pro
and Metric Planner). The AdMetrics dashboard app and `metric-planner` remain
separate repos; this repo is the umbrella / marketing + portfolio surface.

---

## Technical guardrails (do not break)

1. **Stay static.** No `fetch`/axios, no react-query, no auth, no backend
   calls. All content lives in `src/data/*` (or future content files).
2. **Cross-repo links are env-driven.** Links into the dashboard app go through
   `appHref()` in `src/lib/links.js`, resolved from **`VITE_APP_URL`** (dev
   default `http://localhost:5173`). A future link into `metric-planner` should
   follow the same env pattern. Never hardcode a product domain.
3. **Design system is a copy.** Tokens (`src/index.css` `:root`/`.dark`),
   `tailwind.config.js`, and the `src/components/ui/` primitives are copied
   from the dashboard repo and kept in sync **manually** (a shared
   `@metrics/ui` package is a later roadmap item — don't add it yet).
4. **Pure JS/JSX, Tailwind utilities only, no secrets in the repo** (only
   `.env.example` is committed).

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

Deploy: static Vite build → Vercel (`vercel.json` present). Set `VITE_APP_URL`
in the Vercel project env to the AdMetrics dashboard's production URL.

## Map (current files)

- `src/pages/` — page components (currently the legacy marketing pages +
  `MarketingLayout`; Home to become the dual-product showcase, About/Career to
  be added).
- `src/components/` — `MarketingNav`, `MarketingFooter`, static `TrendChart`.
- `src/components/ui/` — copied primitives (Button, Surface, Logo, Marquee,
  ThemeToggle, LanguageMenu, LiveSparkline, MeshBackground, Spinner).
- `src/data/` — static fixtures (`marketing.fixtures.js`, `trend.js`).
- `src/lib/links.js` — the `VITE_APP_URL` cross-repo link contract.
- `src/i18n/` — 10 nav-only locale files (RTL for ar/fa).

---

## Signal v1.0 — locked brand tokens (2026-07-02)

**Palette (locked — never change):**
- Electric `#2F6BFF` (primary accent) · Deep `#1E50E0` · Ink `#0A0E17` ·
  Navy `#0B1B3A` · Tint `#EAF1FF` · Paper `#FFFFFF`
- **Semantic:** profit/positive `#4DA3FF`, loss/negative `#16337A` — always
  render with a `▲`/`▼` glyph **and** an explicit sign; **never color alone**.

**Themes:**
- **Dark:** bg navy `#0B1B3A`, elevated surface ink `#0A0E17`, accent electric.
- **Light:** paper/tint surfaces, ink text, accent electric.

**Typography (locked):** Space Grotesk (display) · IBM Plex Sans (body) ·
IBM Plex Mono (data/numbers). No other typefaces.

**Rules:** all colors flow through the CSS variables in `src/index.css`
(`:root`/`.dark`) mapped in `tailwind.config.js`. **No hardcoded hex in
components.** Source of truth: the founder's MetricOne Brand System (Signal
v1.0) document.
