import { motion } from 'framer-motion'
import { useSeo } from '@/lib/seo'
import { Surface } from '@/components/ui'
import { stagger, item, viewportOnce, ease } from '@/lib/motion'

// Shell only. Tier NAMES (Free / Pro / Max) are locked per Part 1; exact prices
// and per-tier feature lists are NOT founder-approved yet — do not invent them
// here (see STRICT BUILD RULE in CLAUDE.md).
const tiers = ['Free', 'Pro', 'Max']

export default function Pricing() {
  useSeo({ title: 'Pricing · Metric One' })
  return (
    <main className="mx-auto max-w-6xl px-5 py-16 text-center sm:py-24">
      <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }} className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        Pricing
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mt-4 font-mono text-sm uppercase tracking-[0.18em] text-fg-subtle">
        Coming at launch
      </motion.p>
      <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={viewportOnce} className="mt-12 grid gap-5 lg:grid-cols-3">
        {tiers.map((name) => (
          <motion.div key={name} variants={item}>
            <Surface className="flex h-full flex-col items-center justify-center p-10">
              <p className="font-display text-2xl font-semibold tracking-tight">{name}</p>
              <p className="mt-2 text-sm text-fg-subtle">Details soon</p>
            </Surface>
          </motion.div>
        ))}
      </motion.div>
    </main>
  )
}
