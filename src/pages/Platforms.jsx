import { motion } from 'framer-motion'
import { Surface } from '@/components/ui'
import { stagger, item, viewportOnce, ease } from '@/lib/motion'
import { platformGroups } from '@/data/marketing.fixtures'
import { cn } from '@/lib/cn'

const tone = { connected: 'text-profit', syncing: 'text-roas', available: 'text-fg-subtle' }
const dot = { connected: 'bg-profit', syncing: 'bg-roas animate-pulse', available: 'bg-fg-subtle' }
const label = { connected: 'Live', syncing: 'Syncing', available: 'Available' }

export default function Platforms() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }} className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        Connect every channel you <span className="text-primary">sell and advertise</span> on.
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mt-3 max-w-xl text-fg-muted">
        12 connectors at launch, normalized into one model — built to scale to 40+.
      </motion.p>

      <div className="mt-12 space-y-10">
        {platformGroups.map((g) => (
          <div key={g.category}>
            <p className="mb-4 text-2xs font-medium uppercase tracking-[0.18em] text-fg-subtle">{g.category}</p>
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={viewportOnce} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((it) => (
                <motion.div key={it.name} variants={item}>
                  <Surface hover className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl icon-grad text-sm font-semibold">{it.name[0]}</span>
                      <p className="font-medium">{it.name}</p>
                    </div>
                    <span className={cn('flex items-center gap-1.5 text-2xs font-medium uppercase tracking-wide', tone[it.status])}>
                      <i className={cn('h-1.5 w-1.5 rounded-full', dot[it.status])} /> {label[it.status]}
                    </span>
                  </Surface>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </main>
  )
}
