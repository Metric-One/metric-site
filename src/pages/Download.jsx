import { motion } from 'framer-motion'
import { Laptop, Monitor, Smartphone, Globe, Download as DownloadIcon } from 'lucide-react'
import { Surface, Button } from '@/components/ui'
import { stagger, item, viewportOnce, ease } from '@/lib/motion'
import { getDownloadTarget } from '@/platform/detect'

const targets = [
  { os: 'macOS', key: 'macos', kind: 'Apple Silicon · Intel · .dmg', icon: Laptop, cta: 'Download .dmg' },
  { os: 'Windows', key: 'windows', kind: '.msi installer · x64', icon: Monitor, cta: 'Download .msi' },
  { os: 'iOS', key: 'ios', kind: 'iPhone & iPad', icon: Smartphone, cta: 'App Store' },
  { os: 'Android', key: 'android', kind: 'Phones & tablets', icon: Smartphone, cta: 'Google Play' },
  { os: 'Web (PWA)', key: 'web', kind: 'Install from any browser', icon: Globe, cta: 'Open web app' }
]

export default function Download() {
  const current = getDownloadTarget().os

  return (
    <main className="mx-auto max-w-5xl px-5 py-16 text-center sm:py-24">
      <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }} className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        METRICS, on <span className="text-primary">every surface</span>.
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mt-3 text-fg-muted">
        One account, five targets. We detected <span className="font-medium text-fg">{current}</span> — install anywhere.
      </motion.p>
      <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={viewportOnce} className="mt-12 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
        {targets.map((t) => {
          const active = t.key === current
          return (
            <motion.div key={t.os} variants={item}>
              <Surface hover gradient={active} className="flex h-full flex-col p-5">
                <span className="grid h-11 w-11 place-items-center rounded-xl icon-grad"><t.icon size={20} /></span>
                <h3 className="mt-4 flex items-center gap-2 text-base font-semibold">
                  {t.os}{active && <span className="rounded-full bg-surface-2 px-2 py-0.5 text-2xs font-medium text-primary">Your device</span>}
                </h3>
                <p className="mt-1 flex-1 text-sm text-fg-muted">{t.kind}</p>
                <Button variant={active ? 'primary' : 'ghost'} size="sm" className="mt-4 w-full"><DownloadIcon size={15} /> {t.cta}</Button>
              </Surface>
            </motion.div>
          )
        })}
      </motion.div>
      <p className="mt-8 text-2xs text-fg-subtle">Signed &amp; notarized builds · auto-update · <span className="text-fg-muted">already a user?</span> re-download from Settings.</p>
    </main>
  )
}
