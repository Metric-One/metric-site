import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import NumberFlow from '@number-flow/react'
import { ArrowRight, BarChart3, Bot, Plug, Layers, ShieldCheck, Building2, Zap, Globe, Sparkles, Laptop, Monitor, Smartphone, Terminal, Download as DownloadIcon } from 'lucide-react'
import { getDownloadTarget } from '@/platform/detect'
import { Surface, Marquee, LiveSparkline, Button, buttonClasses } from '@/components/ui'
import { stagger, item, viewportOnce, ease } from '@/lib/motion'
import { moneyFormat, numberLocale } from '@/lib/format'
import { platforms } from '@/data/marketing.fixtures'
import { appHref } from '@/lib/links'
import { cn } from '@/lib/cn'

const TrendChart = lazy(() => import('@/components/TrendChart.jsx'))

const features = [
  { icon: BarChart3, title: 'True Net Profit Engine', body: 'COGS, exact Stripe/PayPal fees, marketplace commissions, shipping and refunds — deducted automatically for real margin per channel.' },
  { icon: Bot, title: 'AI Growth Officer', body: 'Reads your live data, explains why profit moved, and proposes the next move. It only acts on your explicit Confirm & Execute.' },
  { icon: Plug, title: '12 connectors, built for 40+', body: 'Shopify, Amazon, Meta, Google, TikTok, Stripe, PayPal, iyzico, Trendyol, Hepsiburada, Etsy, WooCommerce — one model.' },
  { icon: Layers, title: 'Cross-Channel Attribution', body: 'MTA + MMM deduplicate overlapping Meta and Google conversions to reveal each channel’s true contribution.' },
  { icon: ShieldCheck, title: 'Bank-Grade Security', body: 'AES-256-GCM for every secret, JWT rotation with reuse detection, SSL pinning, and strict multi-tenant isolation.' },
  { icon: Building2, title: 'Agency-Ready', body: 'One agency, many clients — strict isolation, per-client white-label, and role-based access across every workspace.' }
]

const heroCells = [
  { label: 'Net Profit', value: 284910, cls: 'text-profit', money: true, note: 'after COGS, fees, shipping' },
  { label: 'Gross Revenue', value: 816990, cls: 'text-fg', money: true, note: 'across 12 channels' },
  { label: 'Blended ROAS', value: 4.62, cls: 'text-roas', suffix: '×', note: 'all paid sources' },
  { label: 'Predicted Churn', value: 3.2, cls: 'text-ai', suffix: '%', note: 'next 30 days' }
]

const cgoBullets = [
  'Cross-platform budget shifting',
  '60-day LTV & churn prediction per cohort',
  'Anomaly alerts before they cost money'
]

const dlTargets = [
  { os: 'macOS', key: 'macos', sub: '.dmg', icon: Laptop },
  { os: 'Windows', key: 'windows', sub: '.exe', icon: Monitor },
  { os: 'Linux', key: 'linux', sub: '.AppImage', icon: Terminal, disabled: true },
  { os: 'iOS', key: 'ios', sub: 'App Store', icon: Smartphone },
  { os: 'Android', key: 'android', sub: 'Play Store', icon: Smartphone }
]
const osLabel = { macos: 'macOS', windows: 'Windows', ios: 'iOS', android: 'Android', web: 'your browser' }

export default function Home() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const yPreview = useTransform(scrollY, [0, 600], [0, reduce ? 0 : -56])
  const yOrbit = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 60])
  const detected = getDownloadTarget().os
  const detectedLabel = osLabel[detected] || 'your device'

  return (
    <main className="mx-auto max-w-6xl px-5">
      <section className="relative">
        <motion.div style={{ y: yOrbit }} className="pointer-events-none absolute right-[6%] top-24 hidden lg:block" aria-hidden="true">
          <div className="relative h-44 w-44 rounded-full border border-line" style={{ animation: reduce ? 'none' : 'spinSlow 20s linear infinite' }}>
            <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-primary" style={{ boxShadow: '0 0 14px var(--primary)' }} />
            <span className="absolute bottom-2 right-3 h-2 w-2 rounded-full bg-ai" style={{ boxShadow: '0 0 12px var(--ai)' }} />
          </div>
        </motion.div>

        <motion.div variants={stagger} initial="initial" animate="animate" className="flex flex-col items-center pb-14 pt-20 text-center sm:pt-28">
          <motion.span variants={item} className="glass mb-6 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-fg-muted">
            <Sparkles size={13} className="text-primary" />
            New · AI Chief Growth Officer · BYOK · Cross-platform budget shifting
          </motion.span>
          <motion.h1 variants={item} className="max-w-3xl font-display text-5xl font-semibold leading-[1.03] tracking-tight sm:text-7xl">
            Know your <span className="text-primary" style={{ textShadow: 'var(--glow)' }}>true net profit</span>.
            <br />Not just revenue.
          </motion.h1>
          <motion.p variants={item} className="mt-5 max-w-xl text-lg text-fg-muted">
            AdMetrics Pro unifies 40+ commerce, ad and logistics platforms — then auto-deducts COGS, gateway fees and shipping so you see what actually hits the bank. An AI Growth Officer turns that data into moves.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a href={appHref('/register')} className={buttonClasses('primary', 'lg')}>Open live demo <ArrowRight size={18} /></a>
            <Link to="/platforms" className={buttonClasses('ghost', 'lg')}>See all 40+ integrations</Link>
          </motion.div>
          <motion.div variants={item} className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-2xs text-fg-subtle">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck size={13} className="text-profit" /> SOC 2 · GDPR · KVKK</span>
            <span className="inline-flex items-center gap-1.5"><Zap size={13} className="text-primary" /> 60-second connect</span>
            <span className="inline-flex items-center gap-1.5"><Globe size={13} /> Web · iOS · Android · macOS · Windows</span>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: yPreview }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewportOnce} transition={{ duration: 0.7, ease }}>
          <Surface live className="p-2">
            <div className="rounded-xl bg-surface-2 p-5 sm:p-6">
              <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-2xs uppercase tracking-wide text-fg-subtle">Net profit · live</p>
                  <p className="mt-1 font-display text-3xl font-semibold text-profit tnum">
                    <NumberFlow value={284910} locales={numberLocale()} format={moneyFormat('USD')} />
                  </p>
                </div>
                <div className="h-16 w-40 sm:w-56"><LiveSparkline className="h-full w-full" /></div>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-line pt-5 sm:grid-cols-4">
                {heroCells.map((c) => (
                  <div key={c.label}>
                    <p className="text-2xs uppercase tracking-wide text-fg-subtle">{c.label}</p>
                    <p className={`mt-1 font-display text-xl font-semibold tnum ${c.cls}`}>
                      {c.money
                        ? <NumberFlow value={c.value} locales={numberLocale()} format={moneyFormat('USD')} />
                        : <><NumberFlow value={c.value} locales={numberLocale()} format={{ maximumFractionDigits: 2 }} />{c.suffix}</>}
                    </p>
                    <p className="mt-0.5 text-2xs text-fg-subtle">{c.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </Surface>
        </motion.div>
      </section>

      <section className="py-14">
        <p className="mb-5 text-center text-2xs uppercase tracking-[0.18em] text-fg-subtle">Connects every channel you sell and advertise on</p>
        <Marquee items={platforms} />
      </section>

      <section className="py-10">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.5, ease }}>
          <Suspense fallback={<Surface className="h-80 animate-pulse" />}><TrendChart /></Suspense>
        </motion.div>
      </section>

      <section className="py-16">
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.5, ease }} className="max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Everything an operator needs to grow profit, not just revenue.
        </motion.h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.5, ease, delay: (i % 3) * 0.06 }}>
              <Surface hover gradient className="h-full p-5">
                <span className="grid h-10 w-10 place-items-center rounded-xl icon-grad"><f.icon size={20} /></span>
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{f.body}</p>
              </Surface>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="grid items-center gap-8 py-16 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.5, ease }}>
          <p className="text-2xs font-medium uppercase tracking-[0.18em] text-primary">AI Chief Growth Officer</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">An operator that never sleeps.</h2>
          <ul className="mt-6 space-y-3">
            {cgoBullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-fg-muted">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-surface-2 text-primary"><Sparkles size={14} /></span>{b}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.5, ease }}>
          <Surface live className="p-5">
            <p className="mb-4 flex items-center gap-2 text-2xs text-fg-subtle"><i className="h-1.5 w-1.5 rounded-full bg-profit" /> Live CGO thread · synced with last 24h data</p>
            <div className="space-y-3">
              <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-surface-2 px-4 py-2.5 text-sm">Why did profit drop yesterday?</div>
              <div className="max-w-[90%] rounded-2xl rounded-bl-sm border border-line bg-surface px-4 py-3 text-sm text-fg-muted">
                Net profit fell 8% — Meta CPM spiked +31% on Lookalike-3% (−$1,420) and Amazon SKU-412 was out of stock for 4h (−$1,800). I can pause the fatiguing set and shift budget to Google Shopping.
                <div className="mt-3 flex gap-2">
                  <Button size="sm">Approve &amp; Pause</Button>
                  <Button size="sm" variant="ghost">Show details</Button>
                </div>
              </div>
            </div>
          </Surface>
        </motion.div>
      </section>

      <section className="grid items-center gap-8 py-16 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.5, ease }}>
          <p className="text-2xs font-medium uppercase tracking-[0.18em] text-primary">Download center</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">We detected {detectedLabel}.</h2>
          <p className="mt-3 max-w-md text-fg-muted">One account, five surfaces. Install the desktop or mobile app, or run the web PWA from any browser.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button variant="primary" size="lg"><DownloadIcon size={18} /> Download for {detectedLabel}</Button>
            <Link to="/download" className={buttonClasses('ghost', 'lg')}>All platforms</Link>
          </div>
          <p className="mt-4 text-2xs text-fg-subtle">SSL-pinned · AES-256-GCM at rest · Auto-update via Tauri updater.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.5, ease }} className="grid grid-cols-2 gap-3">
          {dlTargets.map((d) => (
            <Surface key={d.os} hover={!d.disabled} className={cn('flex items-center gap-3 p-4', d.disabled && 'opacity-50')}>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl icon-grad"><d.icon size={18} /></span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{d.os}{d.key === detected && <span className="ml-1.5 text-2xs text-primary">· detected</span>}</p>
                <p className="truncate text-2xs text-fg-subtle">{d.disabled ? 'Not supported' : d.sub}</p>
              </div>
            </Surface>
          ))}
        </motion.div>
      </section>

      <section className="pb-20">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.5, ease }}
          className="band-grad flex flex-col items-center gap-4 rounded-3xl px-8 py-14 text-center sm:px-16 sm:py-20">
          <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">Stop guessing what’s profitable.</h2>
          <p className="max-w-md text-white/85">14-day free trial. No card. Connect your first platform in 60 seconds.</p>
          <a href={appHref('/register')} className="mt-2 inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-base font-medium text-primary transition hover:brightness-95 focus-ring">
            Start free <ArrowRight size={18} />
          </a>
        </motion.div>
      </section>
    </main>
  )
}
