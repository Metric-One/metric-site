import { motion } from 'framer-motion'
import { useSeo } from '@/lib/seo'
import { ArrowRight, Building2, Shield, Mail, Layers } from 'lucide-react'
import { Surface, buttonClasses } from '@/components/ui'
import { stagger, item, viewportOnce, ease } from '@/lib/motion'
import { appHref } from '@/lib/links'

const cards = [
  { icon: Building2, title: 'White-label', body: 'Your logo, colors and domain on every client workspace and PDF report.' },
  { icon: Shield, title: '8 roles, fine-grained', body: 'Owner, admin, analyst, marketer, finance, viewer, agency, support — least-privilege by default.' },
  { icon: Mail, title: 'Automated weekly digests', body: 'Branded net-profit summaries land in each client’s inbox every Monday.' },
  { icon: Layers, title: 'Volume pricing', body: 'From 5 client seats included, with strict per-client data isolation.' }
]

export default function Agency() {
  useSeo({ title: 'Agencies · Metric One' })
  return (
    <main className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xs font-medium uppercase tracking-[0.18em] text-primary">For agencies</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }} className="mt-2 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        Ten clients. One dashboard. <span className="text-primary">One source of truth.</span>
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mt-3 max-w-xl text-fg-muted">
        Switch clients in one click, white-label everything, assign role-based access, and ship automated weekly profit emails.
      </motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="mt-7">
        <a href={appHref('/register')} className={buttonClasses('primary', 'lg')}>Book a demo <ArrowRight size={18} /></a>
      </motion.div>

      <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={viewportOnce} className="mt-12 grid gap-4 sm:grid-cols-2">
        {cards.map((c) => (
          <motion.div key={c.title} variants={item}>
            <Surface hover gradient className="h-full p-5">
              <span className="grid h-10 w-10 place-items-center rounded-xl icon-grad"><c.icon size={18} /></span>
              <h3 className="mt-4 text-base font-semibold">{c.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{c.body}</p>
            </Surface>
          </motion.div>
        ))}
      </motion.div>
    </main>
  )
}
