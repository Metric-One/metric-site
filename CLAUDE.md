# CLAUDE.md — metric-site

> Single source of truth for this repo. Part 1–4 below are the locked company-wide
> brain (2026-07-05 master build cycle) — **do not alter their facts.** Everything
> after "Repo scope note" is this repo's own technical reality, verified against
> the actual code on 2026-07-05, not carried over from old claims.

---

## PART 1 — COMPANY BRAIN (locked)

ECOSYSTEM: Metric One (metric.one) — AI growth engine, three surfaces:
1. Dashboard — connects international ad platforms + e-commerce + global
   marketplaces, normalizes all data into one interface including true net
   profit. Serves both individual brands AND agencies/companies (multi-client).
2. AI Growth Officer — analysis + growth recommendations on the user's real
   connected data, OR the company's own default AI analysis when nothing is
   connected (BYOK via Anthropic/OpenAI/Gemini API keys, rule-based fallback
   otherwise — this fallback already exists, do not rebuild it).
3. AI Planner — personal AND agentic planners in one system, more
   customizable than Notion; 10-question onboarding builds a tailored plan;
   fully editable by user or AI.
Plus B2B services: custom dashboards, planners, automation builds.
Pricing (v0, not final): Free / Pro ~$20 / Max ~$100.

FOUNDER: Mani Alizadeh — Head of Growth (never "Founder" in public copy).
Istanbul, Türkiye. 10 years sales & marketing (7yr traditional + 3yr digital).
Computer Engineering, Nişantaşı University. Builds everything with AI agents.

BRAND — Signal v1.0 (locked): Electric #2F6BFF · Deep #1E50E0 · Ink #0A0E17 ·
Navy #0B1B3A · Tint #EAF1FF · Paper #FFFFFF. Profit #4DA3FF / Loss #16337A,
always paired with ▲▼ glyphs — color is never the only signal. Space Grotesk
(display) / IBM Plex Sans (body) / IBM Plex Mono (data). Dark theme = brand
Navy/Ink, never pure OLED black. Mascot: Safir, anthropomorphic lion in a
Signal-navy suit.

STACK (locked, flag any deviation instead of silently allowing it):
Pure JS+JSX — NO TypeScript. Vite, React 18, Tailwind, Recharts, Framer
Motion, Zustand. Express 5, Prisma, Postgres 16, Redis 7. Targets: Web/PWA,
Capacitor (iOS/Android), Tauri (macOS/Windows — no Linux).
Architecture principle: read-only-first — all write/publish/automation
flags default FALSE until explicitly approved by the founder.
Supabase is explicitly rejected — do not suggest it, do not migrate to it.

GTM: zero content publishing before V1. LinkedIn (personal + company) goes
live only after V1 ships. YouTube + Instagram follow after that. This repo's
work has no dependency on content/marketing timing — build regardless.

## PART 2 — V1 SCOPE (locked for this cycle, target ship date 2026-07-31)

CONNECTORS — tiered, only Tier 1 blocks V1:
- Tier 1 (V1, build now): Shopify, WooCommerce, Meta Ads, Google Ads, Stripe
- Tier 2 (fast-follow, weeks 1-2 post-V1, but START Amazon's SP-API approval
  application NOW since it has a long lead time): Amazon (US region first),
  TikTok Ads, PayPal
- Tier 3 (later, regional): Trendyol, Hepsiburada
- NOT building: any Alibaba-style B2B sourcing connector — not a fit for
  this product (no standard storefront-analytics API). If the founder meant
  a specific different marketplace, that needs confirming before any code.

EXPLICITLY OUT OF V1 (defer to post-launch hardening cycles):
- Support portal / Socket.io live agent desk — use a simple contact form
  for V1 instead
- Native mobile/desktop shells (Capacitor/Tauri) — PWA covers V1
- Full CI/CD pipelines, CDN/caching layer, load balancing/scaling, full
  disaster-recovery — see Part 3, these are phase-2 hardening

DASHBOARD MUST BE FUNCTIONALLY COMPLETE FOR V1 — meaning: the 5 currently-
placeholder pages (Orders, Products & COGS, Ad Spend, Attribution, Cohorts)
need real logic wired to the Tier-1 connectors' data, not just UI shells.
Multi-tenant agency view (one login, multiple client accounts) must work
end to end, not just be modeled in the schema.

## PART 3 — 13-LAYER PRODUCTION FRAMEWORK (phased — V1-blocking vs.
harden-after, per the 2-month post-launch improvement cadence)

V1-BLOCKING (must be real before launch):
1. Frontend foundation — no TS creep, Tailwind-only styling, clean build
2. API & backend logic — thin routes/controllers, business logic in services
3. Database & storage — schema matches real feature set, migrations clean
4. Authentication & permissions — already solid (JWT rotation, RBAC) —
   verify multi-tenant client boundary is enforced at the query level, not
   just the middleware level (known gap per last audit)
5. Hosting & deployment — confirm the actual deploy path works end to end
   for this repo (Vercel for frontend-only repos; VPS for anything needing
   a persistent backend/DB/Redis — Vercel serverless cannot run this)
6. Basic security — secrets encrypted at rest, rate-limited login, CSRF,
   input sanitization before anything reaches an AI context (verify
   dompurify/equivalent is actually installed, not assumed)
7. Error tracking & logs — at minimum server-side error logging that
   survives a restart; a paid APM tool is NOT required for V1

HARDEN AFTER V1 (roadmap for the first 2-month post-launch cycle):
8. Cloud & compute scaling
9. Rate limiting refinement (beyond basic login/API throttling)
10. Full CI/CD (build/lint/test/deploy automated per the human-gated
    pipeline described in Part 4)
11. Caching & CDN
12. Load balancing & horizontal scaling
13. Full availability & disaster-recovery planning

## PART 4 — AUTOMATION LOOP (start scaffolding now, human-gated — no
auto-merge, no auto-deploy, ever, without explicit approval)

Design (don't build the full pipeline today — just confirm feasibility and
propose the shape): Claude Code prepares a branch + PR with a clear diff and
a plain-English summary of what changed and why. A human (Mani) reviews and
clicks merge. A separate, equally human-gated step handles deploy — nothing
auto-deploys on merge. Review this repo's current CI setup (if any) and
report what's needed to support this safely, but do not wire it live yet.

---

## Repo scope note — what Parts 2/3 actually mean for `metric-site`

**This repo is not the Dashboard surface.** It is the static, public **umbrella
marketing + founder portfolio site**, decoupled from the actual product apps:

- The Tier-1 connectors, the 5 placeholder dashboard pages, the multi-tenant
  agency view, and the Express/Prisma/Postgres/Redis backend in Part 2/3 all
  belong to the separate dashboard app repo (found on disk as `metrics`,
  self-identified internally as **`metric-App` / "AdMetrics"** — it already has
  a `backend/`, Prisma schema, and docker-compose Postgres/Redis). **None of
  that scope is buildable in `metric-site`** — this repo has zero backend,
  zero API calls, zero auth, by explicit design (see Technical guardrails
  below). Do not add connector logic, Prisma, Express, or a database here.
- Layers 2, 3, 6 (API/backend, database, most of basic security) in Part 3 are
  **N/A for this repo** — there is no server to secure or a DB to migrate.
  Layer 1 (frontend foundation), the frontend half of Layer 5 (hosting —
  Vercel static deploy), and Layer 7 (nothing to log server-side; browser
  error visibility is the ceiling) are the only V1-blocking layers this repo
  can own.
- What this repo *does* owe the 2026-07-31 V1 date: a public site that
  accurately represents the Metric One ecosystem (Part 1) instead of the
  legacy single-product AdMetrics marketing copy it currently still carries,
  plus a working, honest link out to the real Dashboard app once that ships.
  Per the GTM note in Part 1, this is not gated on content/marketing
  timing — it should be kept truthful regardless of launch date.
- **Two concrete Part-1 conflicts introduced by this cycle's lock, to raise
  with the founder, not silently resolve:**
  1. Part 1 pricing is `Free / Pro ~$20 / Max ~$100` (v0). The live
     `src/pages/Pricing.jsx` shows fabricated tiers (`$49 / $199 / Custom`)
     that predate this lock and were never framed as founder-approved.
  2. Part 1 never names a product "AdMetrics" or "AdMetrics Pro" — it
     describes the Dashboard as one of three surfaces of one brand, **Metric
     One**. This repo's code, README, and CTAs ("Explore AdMetrics") still use
     the pre-pivot "AdMetrics Pro" product name throughout. Whether that name
     survives under the Metric One umbrella, or is retired in favor of just
     "Dashboard," is a founder call — ask before touching any of it.

---

## Site identity (repo-specific, narrows Part 1 to this surface)

- **What this site is:** the public home of the Metric One company and the
  founder's portfolio — not a generic SaaS landing page. It tells the Metric
  One story and showcases the products (Dashboard, AI Planner) built under
  that name; it does not host any product's live functionality itself.
- **Founder:** Mani Alizadeh (see Part 1 for title/bio facts — never call him
  "Founder" in public copy). Exact bio wording, career narrative, and company
  values copy for the About/Career page: **ask founder**, not yet written.
- Voice, taglines, and any copy not already shipped in `src/pages/Home.jsx`:
  **ask founder.** This repo's STRICT BUILD RULE (below) is unchanged by this
  cycle's lock and takes precedence over inventing anything not covered by
  Part 1–4 or an explicit founder answer.

> ### ⛔ STRICT BUILD RULE — unchanged, still binding
> Build **page-by-page, option-by-option.** Never guess or hallucinate copy,
> content, features, names, numbers, screenshots, or design. Before coding any
> section or component, ask the founder for the exact details and wait for the
> answer. "Ask founder" / "TBD" is a hard stop — do not invent a placeholder
> and ship it. **This rule was violated before this audit** for the legacy
> pages listed below; see "Verified module status."

---

## Verified module / page status (2026-07-05 — checked against actual code, not old CLAUDE.md claims)

| Route | File | Real state | Old CLAUDE.md said |
|---|---|---|---|
| `/` | `Home.jsx` | **Real, shipped.** Already rebuilt for the dual-surface Metric One story (hero, "every channel" section, planner teaser, services strip). Ahead of what the old doc described as still-TBD. | "to be built, ask founder" |
| `/planner` | `Planner.jsx` | Honest "Coming soon" shell, correctly commented as waiting on founder content. | **Not mentioned at all** in the old doc's page inventory |
| `/services` | `Services.jsx` | Honest "Coming soon" shell. | **Not mentioned at all** |
| `/learn` | `Learn.jsx` | Honest "Coming soon" shell. | **Not mentioned at all** |
| `/platforms` | `Platforms.jsx` | **Not a placeholder.** Fully written page: fabricated connector list/status via `marketing.fixtures.js`, "12 connectors at launch" claim. | "kept as empty shell / minimal placeholder" |
| `/features` | `Features.jsx` | **Not a placeholder.** Full 8-item feature grid with specific, invented claims (AES-256-GCM, 8 RBAC roles, react-grid-layout, etc.) | "kept as empty shell / minimal placeholder" |
| `/solutions/dtc` | `Dtc.jsx` | **Not a placeholder.** Full page with invented specifics (iyzico, Klaviyo, 60-day LTV). | "kept as empty shell / minimal placeholder" |
| `/solutions/agency` | `Agency.jsx` | **Not a placeholder.** Full page, invented specifics (8 roles, white-label, volume pricing). | "kept as empty shell / minimal placeholder" |
| `/pricing` | `Pricing.jsx` | **Not a placeholder**, and **conflicts with the new locked Part 1 pricing** (see Repo scope note above). | "kept as empty shell / minimal placeholder" |
| `/docs` | `Docs.jsx` | **Not a placeholder.** Full doc index with invented section list (REST/webhooks, roles, mobile packaging). | "kept as empty shell / minimal placeholder" |
| `/download` | `Download.jsx` | **Not a placeholder.** Full OS-detect download page for Capacitor/Tauri builds that don't exist yet and are explicitly out of V1 (Part 2). | "kept as empty shell / minimal placeholder" |
| About/Career | — | **Does not exist** — no file, no route. | "to be added" — this one was accurate |

**Bottom line:** the single biggest gap between the old CLAUDE.md and reality
is that it described 7 legacy pages as inert placeholders when they are
fully-written pages full of unapproved, invented numbers — a direct violation
of this repo's own STRICT BUILD RULE. Fixing that (not building new pages) is
the actual priority, see the day-by-day plan.

**Nav/IA reality:** `MarketingNav.jsx` still lists all 7 legacy pages plus
Services/Learn as primary nav items, with no About/Career link. The nav has
not been updated to reflect the "dual-product portfolio" repositioning the old
CLAUDE.md already claimed had happened — visually and structurally this is
still the pre-pivot AdMetrics marketing site.

**Everything else checked out true:**
- Pure JS/JSX, zero `.ts`/`.tsx` files. ✅
- Zero backend calls — no axios/fetch/react-query/auth in the dependency tree
  or source. ✅
- `pnpm build` (`vite build`, run directly via `node_modules/.bin/vite` since
  `pnpm` isn't on this machine's PATH) completes with **0 errors**, 2004
  modules transformed. ✅
- Cross-repo link contract (`src/lib/links.js`, `appHref()`, `VITE_APP_URL`,
  default `http://localhost:5173`) is real and correctly used everywhere a
  dashboard link appears. ✅
- Signal v1.0 tokens are fully implemented in `src/index.css` (`:root`/`.dark`)
  exactly matching Part 1's locked hex values, and mapped through
  `tailwind.config.js`. No hardcoded hex found in components spot-checked. ✅
- i18n is genuinely nav-only — all 10 locale files under `src/i18n/locales/`
  contain only `nav.*` keys (confirmed on `en.json`), not full page copy. ✅
- `.env.local` (has a live Vercel OIDC token) is correctly gitignored and was
  never committed; only `.env.example` is tracked. ✅
- Git: clean working tree, remote `github.com/Metric-One/metric-site`, 5
  commits, real standalone history (not merely a local scratch copy). ✅

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
5. **No connectors, no backend, no DB, ever, in this repo** — that scope
   belongs to `metric-App` (the `metrics` repo). If a task looks like it needs
   any of that, it's in the wrong repo — say so instead of building it here.

## Stack (verified against `package.json`, 2026-07-05)

Vite 6.4 · React 18.3 · Tailwind 3.4 (token-driven CSS vars, dark/light) ·
Framer Motion 11 · React Router 6.28 · Recharts 2.15 (static chart only) ·
i18next 24 / react-i18next 15 (10 languages, RTL for ar/fa) ·
@number-flow/react · zustand 5 (theme only) · lucide-react · clsx.
Node >=20 required by `package.json` `engines`. No Express/Prisma/Postgres/
Redis here — those are Part 1's ecosystem-wide stack, owned by `metric-App`.

## Run / build / deploy

```bash
pnpm install                         # or: npm install (pnpm not on PATH on this machine as of 2026-07-05)
cp .env.example .env                 # set VITE_APP_URL
pnpm dev                             # http://localhost:5174
pnpm build                           # → dist/  (verified 0 errors, 2026-07-05)
pnpm preview
```

Deploy: static Vite build → Vercel (`vercel.json` present, SPA rewrite
configured, `.vercel` project link already present locally). Set
`VITE_APP_URL` in the Vercel project env to `metric-App`'s production URL.

## Map (current files)

- `src/pages/` — `Home.jsx` (real), `Planner.jsx`/`Services.jsx`/`Learn.jsx`
  (honest shells), `Platforms.jsx`/`Features.jsx`/`Dtc.jsx`/`Agency.jsx`/
  `Pricing.jsx`/`Docs.jsx`/`Download.jsx` (legacy, fully written, unapproved —
  see Verified module status), `MarketingLayout.jsx`. **No About/Career page
  yet.**
- `src/components/` — `MarketingNav.jsx` (still lists all legacy routes,
  no About/Career), `MarketingFooter.jsx`, static `TrendChart.jsx`.
- `src/components/ui/` — copied primitives (Button, Surface, Logo, Marquee,
  ThemeToggle, LanguageMenu, LiveSparkline, MeshBackground, Spinner).
- `src/data/` — static fixtures (`marketing.fixtures.js`, `trend.js`) backing
  the legacy pages' invented numbers.
- `src/lib/` — `links.js` (cross-repo contract), `seo.js` (`useSeo` hook,
  used per-page), `motion.js`, `cn.js`, `format.js`, `useToken.js`.
- `src/platform/detect.js` — OS detection backing `Download.jsx`.
- `src/i18n/` — 10 nav-only locale files (RTL for ar/fa).
- `docs/screenshots/` — 3 before/after theme screenshots (README reference).

---

## Signal v1.0 — locked brand tokens (2026-07-02, re-confirmed 2026-07-05)

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

**Mascot:** Safir (Part 1) — anthropomorphic lion, Signal-navy suit. **Not yet
implemented anywhere in this repo** — no asset, no reference in code. Flag as
a gap, not a claim; ask founder before adding it anywhere.

**Rules:** all colors flow through the CSS variables in `src/index.css`
(`:root`/`.dark`) mapped in `tailwind.config.js`. **No hardcoded hex in
components** (spot-checked, holds true). Source of truth: the founder's
MetricOne Brand System (Signal v1.0) document (`../brand-tokens.md` and
`../MetricOne Brand System.html` one level up from this repo, outside git).
