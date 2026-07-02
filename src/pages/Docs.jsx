import { motion } from 'framer-motion'
import { useSeo } from '@/lib/seo'
import { ArrowUpRight } from 'lucide-react'
import { Surface } from '@/components/ui'
import { stagger, item, viewportOnce, ease } from '@/lib/motion'

const docs = [
  { title: 'Quickstart', body: 'From signup to your first connected platform in 60 seconds.' },
  { title: 'Net-Profit Engine', body: 'How we compute revenue − COGS − fees − shipping − refunds − ad spend.' },
  { title: 'AI Growth Officer', body: 'BYOK setup, tool calls, custom prompts, Confirm & Execute.' },
  { title: 'Mobile & Desktop packaging', body: 'Capacitor (iOS/Android) and Tauri (mac/Win) build notes.' },
  { title: 'Roles & Permissions', body: 'All 8 roles, their scopes, and the multi-tenant isolation that enforces them.' },
  { title: 'REST & Webhooks', body: 'Public API endpoints, webhook signatures, rate limits.' }
]

export default function Docs() {
  useSeo({ title: 'Docs · Metric One' })
  return (
    <main className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xs font-medium uppercase tracking-[0.18em] text-primary">Docs</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }} className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        Documentation
      </motion.h1>
      <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={viewportOnce} className="mt-10 grid gap-4 sm:grid-cols-2">
        {docs.map((d) => (
          <motion.div key={d.title} variants={item}>
            <Surface hover className="group flex items-start justify-between gap-4 p-5">
              <div>
                <h3 className="text-base font-semibold">{d.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{d.body}</p>
              </div>
              <ArrowUpRight size={18} className="mt-0.5 shrink-0 text-fg-subtle transition group-hover:text-primary" />
            </Surface>
          </motion.div>
        ))}
      </motion.div>
    </main>
  )
}
