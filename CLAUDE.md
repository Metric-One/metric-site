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

## Verified module / page status (updated 2026-07-07, after Day 1 + Day 2 truth-cleanup)

Day 1 (branch `chore/home-v2`, commit `532d931`) stripped the 7 legacy pages of
all invented claims and rebuilt this doc. Day 2 (branch `chore/footer-nav-truth`)
stripped the footer, applied the new nav, and deleted the orphaned fabricated
data files. The repo now carries **zero unapproved factual claims in any
rendered surface.**

| Route | File | Real state now | Was (pre-cleanup) |
|---|---|---|---|
| `/` | `Home.jsx` | **Real, shipped. Untouched** by the cleanup (already correct). Dual-surface Metric One story. Uses the product name "AdMetrics" in one CTA — a naming question, not a fabrication (see "Open, awaiting founder"). | same |
| `/planner` | `Planner.jsx` | Honest "Coming soon" shell. In primary nav (active teaser). | shell (unchanged) |
| `/services` | `Services.jsx` | Honest "Coming soon" shell. In primary nav. | shell (unchanged) |
| `/learn` | `Learn.jsx` | Honest "Coming soon" shell. Reachable by URL; not in nav. | shell (unchanged) |
| `/platforms` | `Platforms.jsx` | **Honest "Coming soon" shell.** Fabricated connector list/status + "12 connectors" claim removed. | full page, invented connector data |
| `/features` | `Features.jsx` | **Honest "Coming soon" shell.** 8 invented feature claims (AES-256, 8 RBAC roles, CAPI, etc.) removed. | full page, invented claims |
| `/solutions/dtc` | `Dtc.jsx` | **Honest "Coming soon" shell.** iyzico/Klaviyo/60-day-LTV specifics removed. | full page, invented specifics |
| `/solutions/agency` | `Agency.jsx` | **Honest "Coming soon" shell.** 8-roles/white-label/volume-pricing specifics removed. | full page, invented specifics |
| `/pricing` | `Pricing.jsx` | **Honest shell** showing only the locked tier NAMES (Free / Pro / Max) + "Coming at launch". No prices, no feature lists (not founder-approved). Fabricated `$49/$199/Custom` tiers removed. | full page, fabricated tiers conflicting with Part 1 |
| `/docs` | `Docs.jsx` | **Honest "Coming soon" shell.** Invented doc index removed. | full page, invented index |
| `/download` | `Download.jsx` | **Honest "Coming soon" shell.** Fake Capacitor/Tauri download targets + "signed & notarized" claim removed (builds don't exist; PWA-only per Part 2). | full page, fake download targets |
| About/Career | — | **Still does not exist** — no file, no route. Needs founder bio copy first. | did not exist |

**Chrome (site-wide) status:**
- `MarketingNav.jsx` — **cleaned (Day 2).** Primary nav is now `Planner · Services` + Log in + Start free. The 7 stripped routes + Learn left the top bar (still reachable by URL). Added `nav.planner`/`nav.services` keys to all 10 locale files.
- `MarketingFooter.jsx` — **cleaned (Day 2).** Removed the fabricated "SOC 2 Type II / GDPR & KVKK / AES-256 at rest / SSL Pinning" security column, the "40+ more"/Amazon connector column, the dead `#` links (About/Customers/Careers/Blog/Contact/Status), and the unverified "True net-profit analytics & AI Growth Officer…" tagline. Kept: logo, real route links (Planner/Services), real `appHref()` account links, copyright (rebranded METRICS → Metric One).

**Deleted (Day 2) — orphaned files that held the last fabricated data:**
- `src/data/marketing.fixtures.js` — fake connector list + live/syncing statuses. Orphaned once `Platforms.jsx` was stripped.
- `src/components/TrendChart.jsx` + `src/data/trend.js` — an invented 30-day revenue/profit/spend series. Already unrendered (no page imported TrendChart).
- `src/platform/detect.js` — **kept.** Orphaned (only `Download.jsx` used it) but contains no factual claims, just OS-detection logic. Left for reuse; delete if it's still unused when the real download page lands.

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

## Map (current files, as of Day 2 cleanup)

- `src/pages/` — `Home.jsx` (real), and honest "Coming soon" shells for
  `Planner`/`Services`/`Learn`/`Platforms`/`Features`/`Dtc`/`Agency`/`Pricing`/
  `Docs`/`Download`, plus `MarketingLayout.jsx`. **No About/Career page yet.**
- `src/components/` — `MarketingNav.jsx` (primary nav = Planner · Services),
  `MarketingFooter.jsx` (claim-free). `TrendChart.jsx` **deleted** (Day 2).
- `src/components/ui/` — copied primitives (Button, Surface, Logo, Marquee,
  ThemeToggle, LanguageMenu, LiveSparkline, MeshBackground, Spinner). Note:
  `Marquee`/`LiveSparkline` are exported but not currently rendered by any page.
- `src/data/` — **empty of marketing fixtures now.** `marketing.fixtures.js`
  and `trend.js` were deleted in Day 2 (held fabricated connector/revenue data).
- `src/lib/` — `links.js` (cross-repo contract), `seo.js` (`useSeo` hook,
  used per-page), `motion.js`, `cn.js`, `format.js`, `useToken.js`.
- `src/platform/detect.js` — OS-detection helper, now orphaned (its only user,
  `Download.jsx`, was stripped). No claims; kept for reuse.
- `src/i18n/` — 10 nav-only locale files (RTL for ar/fa), each with the full
  nav key set incl. `planner`/`services`.
- `docs/screenshots/` — 3 before/after theme screenshots (README reference).

## Open, awaiting founder content (do NOT invent any of this)

Everything below is a real gap that is **blocked on founder-provided content** —
per the STRICT BUILD RULE, leave as honest shells until the founder supplies the
words/numbers/assets:

1. **About / Career page** — does not exist. Needs founder bio, the Metric One
   build-journey narrative, and company values. No route until copy exists.
2. **Real pricing** — `Pricing.jsx` shows only tier names. Needs founder-approved
   per-tier prices (Part 1 v0: Free / Pro ~$20 / Max ~$100, "not final") and the
   per-tier feature lists.
3. **Platforms page** — needs the real, founder-confirmed connector list and
   which are actually live vs. planned (Tier 1/2/3 per Part 2), no invented
   statuses or counts.
4. **Features / DTC / Agency pages** — need real, verifiable capability copy
   (no unproven certs, role counts, or vendor-integration claims).
5. **Docs** — needs real documentation, or should stay a shell / link out.
6. **Download** — stays a shell until real PWA install guidance (and any future
   Capacitor/Tauri builds, which are out of V1) exist.
7. **Services & Planner & Learn copy** — the shells the Home CTAs point to need
   real founder copy.
8. **Product naming decision** — Home.jsx + `links.js` still say "AdMetrics".
   Part 1 only uses "Metric One" (Dashboard as a surface). Whether "AdMetrics"
   survives is a founder call; Home was deliberately left untouched pending it.
9. **Mascot (Safir)** — no asset in-repo. Ask before adding anywhere.
10. **Footer** — currently minimal/honest; real footer IA (legal pages,
    social, contact) awaits founder input.

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
