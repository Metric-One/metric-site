import { motion } from 'framer-motion'
import { TrendingUp, Bot, Network, LayoutGrid, Users, Bell, Globe, Lock } from 'lucide-react'
import { Surface } from '@/components/ui'
import { stagger, item, viewportOnce, ease } from '@/lib/motion'

const features = [
  { icon: TrendingUp, title: 'True Net Profit', body: 'Per-SKU, per-channel, per-day P&L with COGS, fees, shipping, refunds and ad spend auto-deducted.' },
  { icon: Bot, title: 'AI Growth Officer', body: 'Event-triggered insights, BYOK chat, predictive LTV/churn, autonomous budget shifting.' },
  { icon: Network, title: 'Server-Side CAPI', body: 'Reliable Meta/Google/TikTok conversion tracking that survives iOS 17, ad blockers and cookie loss.' },
  { icon: LayoutGrid, title: 'Draggable Dashboards', body: 'react-grid-layout, server-persisted, per-role. Build the view you actually use.' },
  { icon: Users, title: 'Agency Multi-Tenant', body: 'Switch clients in a tap, white-label the portal, role-based access across 8 tiers.' },
  { icon: Bell, title: 'Smart Alerts', body: 'Anomaly-aware thresholds. CPM spikes, stockouts, churn risks — before they cost money.' },
  { icon: Globe, title: 'Global i18n', body: 'EN · ES · ZH · PT · FR · DE · RU · TR · AR · FA out of the box. Currency at hourly mid-market rates.' },
  { icon: Lock, title: 'Bank-Grade Security', body: 'AES-256-GCM at rest, SSL pinning, JWT rotation with reuse detection, strict CSP, audit logs.' }
]

export default function Features() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }} className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        Built for operators who measure in <span className="text-primary">profit</span>.
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mt-3 max-w-xl text-fg-muted">
        Every feature exists because we needed it ourselves. No bloat, no demos that don’t ship.
      </motion.p>
      <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={viewportOnce} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <motion.div key={f.title} variants={item}>
            <Surface hover gradient className="h-full p-5">
              <span className="grid h-11 w-11 place-items-center rounded-xl icon-grad"><f.icon size={20} /></span>
              <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{f.body}</p>
            </Surface>
          </motion.div>
        ))}
      </motion.div>
    </main>
  )
}
