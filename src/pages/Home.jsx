import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ArrowRight, BarChart3, User, Building2, CalendarRange, Wrench } from 'lucide-react'
import { buttonClasses } from '@/components/ui'
import { stagger, item, viewportOnce, ease } from '@/lib/motion'
import { useSeo } from '@/lib/seo'
import { appHref } from '@/lib/links'
import { cn } from '@/lib/cn'

const personas = [
  { icon: User, body: 'For individuals and brands: your entire business in one live view.' },
  { icon: Building2, body: 'For agencies and companies: manage every client’s growth from one panel, powered by an AI Growth Officer that knows their data.' }
]

function Section({ children, className }) {
  return (
    <motion.section variants={stagger} initial="initial" whileInView="animate" viewport={viewportOnce} className={cn('mx-auto max-w-6xl px-5', className)}>
      {children}
    </motion.section>
  )
}

export default function Home() {
  useSeo({
    title: 'Metric One — Measure what moves growth.',
    description: 'An AI growth engine for people, brands, and agencies — one dashboard for every channel, an AI Growth Officer on your real data, and a planner that adapts to you.'
  })
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const yGlow = useTransform(scrollY, [0, 500], [0, reduce ? 0 : -40])

  return (
    <main className="overflow-x-clip">
      {/* HERO */}
      <section className="relative">
        <motion.div aria-hidden style={{ y: yGlow }} className="pointer-events-none absolute inset-x-0 top-[-18%] mx-auto h-[460px] max-w-4xl rounded-full blur-[120px]" >
          <div className="h-full w-full rounded-full bg-primary opacity-15" />
        </motion.div>
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 pb-24 pt-24 text-center sm:pt-32">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease } }}
            className="font-mono text-sm uppercase tracking-[0.22em] text-primary">
            Metric One
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.08, ease } }}
            className="mt-5 max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            Measure what moves growth.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.16, ease } }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
            An AI growth engine for people, brands, and agencies — one dashboard for every channel, an AI Growth Officer on your real data, and a planner that adapts to you. Built as one ecosystem.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.24, ease } }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href={appHref()} className={cn(buttonClasses('primary', 'lg'), 'group')}>
              Explore AdMetrics <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link to="/planner" className={buttonClasses('ghost', 'lg')}>Meet the Planner</Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION A — every channel */}
      <Section className="pb-24">
        <motion.div variants={item} className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl icon-grad"><BarChart3 size={20} /></span>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Every channel. One number that matters.</h2>
        </motion.div>
        <motion.p variants={item} className="mt-5 max-w-3xl text-base leading-relaxed text-fg-muted">
          Connect your ad platforms (Meta, Google Ads and more), your stores (Shopify, WooCommerce, Amazon, Etsy, WordPress or custom-coded sites), and global marketplaces. Metric One normalizes every source into a single interface and surfaces true growth — not just revenue.
        </motion.p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {personas.map((p) => (
            <motion.div key={p.body} variants={item} className="card card-hover gborder p-7">
              <span className="grid h-11 w-11 place-items-center rounded-xl icon-grad"><p.icon size={20} /></span>
              <p className="mt-5 text-base leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SECTION B — planner */}
      <Section className="pb-24">
        <motion.div variants={item} className="card gborder gborder-live relative overflow-hidden p-8 sm:p-12">
          <div aria-hidden className="pointer-events-none absolute right-[-10%] top-[-40%] h-72 w-72 rounded-full blur-[90px]">
            <div className="h-full w-full rounded-full bg-primary opacity-10" />
          </div>
          <div className="relative flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl icon-grad"><CalendarRange size={20} /></span>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">One planner. Every kind of growth.</h2>
          </div>
          <p className="relative mt-5 max-w-3xl text-base leading-relaxed text-fg-muted">
            Personal planners and agentic planners for teams — together in one system, more powerful and more customizable than the planning tools you know. Answer 10 questions at first entry, and Metric One builds your planner around you — whether you’re a person or an agency.
          </p>
          <Link to="/planner" className={cn(buttonClasses('primary', 'md'), 'group relative mt-8')}>
            Join the waitlist <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </Section>

      {/* SECTION C — services strip */}
      <Section className="pb-28">
        <motion.div variants={item} className="card card-hover flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl icon-grad"><Wrench size={20} /></span>
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight">We also build custom.</h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-fg-muted">
                Custom growth dashboards, planners, and automation systems for companies and agencies.
              </p>
            </div>
          </div>
          <Link to="/services" className={cn(buttonClasses('ghost', 'md'), 'group shrink-0')}>
            See services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </Section>
    </main>
  )
}
