import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { Surface, buttonClasses } from '@/components/ui'
import { stagger, item, viewportOnce, ease } from '@/lib/motion'
import { appHref } from '@/lib/links'

const points = [
  { title: 'Per-SKU contribution margin', body: 'See true margin per product after COGS, fees and shipping — not blended averages.' },
  { title: 'Apple Pay / iyzico fee tracking', body: 'Exact gateway fees per transaction, including local Turkish rails.' },
  { title: 'CAPI server-side conversions', body: 'Meta/Google/TikTok conversions that survive iOS 17 and ad blockers.' },
  { title: 'Stockout & refund alerts', body: 'Catch lost revenue from out-of-stocks and refund spikes before they hurt.' },
  { title: 'Cohort LTV by acquisition channel', body: '60-day LTV and churn per channel so you spend where it compounds.' },
  { title: 'Klaviyo flow revenue attribution', body: 'Attribute flow and campaign revenue back to net profit, not opens.' }
]

export default function Dtc() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xs font-medium uppercase tracking-[0.18em] text-primary">For DTC brands</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }} className="mt-2 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        Run your brand on <span className="text-primary">real profit</span>, not vanity revenue.
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mt-3 max-w-xl text-fg-muted">
        Connect Shopify, Meta, Google and Klaviyo and METRICS computes net profit per day — per SKU, per channel — automatically.
      </motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="mt-7 flex flex-col gap-3 sm:flex-row">
        <a href={appHref('/register')} className={buttonClasses('primary', 'lg')}>Start free <ArrowRight size={18} /></a>
        <Link to="/pricing" className={buttonClasses('ghost', 'lg')}>See pricing</Link>
      </motion.div>

      <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={viewportOnce} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {points.map((p) => (
          <motion.div key={p.title} variants={item}>
            <Surface hover gradient className="h-full p-5">
              <span className="grid h-10 w-10 place-items-center rounded-xl icon-grad"><Check size={18} /></span>
              <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{p.body}</p>
            </Surface>
          </motion.div>
        ))}
      </motion.div>
    </main>
  )
}
