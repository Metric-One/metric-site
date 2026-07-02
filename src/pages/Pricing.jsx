import { motion } from 'framer-motion'
import { useSeo } from '@/lib/seo'
import { Check } from 'lucide-react'
import { Surface, buttonClasses } from '@/components/ui'
import { stagger, item, viewportOnce, ease } from '@/lib/motion'
import { appHref } from '@/lib/links'

const tiers = [
  { name: 'Starter', price: '$49', cadence: '/mo', blurb: 'For solo operators connecting their first 3 channels.', cta: 'Start free', features: ['3 integrations', '1 dashboard', 'Daily sync', 'Email alerts'] },
  { name: 'Brand', price: '$199', cadence: '/mo', blurb: 'For brands running paid across multiple channels.', cta: 'Start free', featured: true, features: ['Unlimited integrations', 'AI Growth Officer', 'Hourly sync', 'Server-side CAPI', '5 seats'] },
  { name: 'Agency', price: 'Custom', cadence: '', blurb: 'Multi-tenant, white-labeled, with priority SLAs.', cta: 'Talk to sales', features: ['Unlimited clients', 'White-label portal', 'RBAC 8 roles', 'SAML SSO', 'Dedicated CSM'] }
]

export default function Pricing() {
  useSeo({ title: 'Pricing · Metric One' })
  return (
    <main className="mx-auto max-w-6xl px-5 py-16 text-center sm:py-24">
      <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }} className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        Pricing that <span className="text-primary">scales with profit</span>.
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mt-3 text-fg-muted">
        14-day free trial on every plan. No card. Cancel anytime.
      </motion.p>
      <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={viewportOnce} className="mt-12 grid gap-5 text-left lg:grid-cols-3">
        {tiers.map((t) => (
          <motion.div key={t.name} variants={item}>
            <Surface live={t.featured} className="flex h-full flex-col p-6">
              <p className="text-sm font-medium text-fg-muted">{t.name}</p>
              <p className="mt-2 font-display text-4xl font-semibold tracking-tight">
                {t.price}<span className="text-base font-normal text-fg-subtle">{t.cadence}</span>
              </p>
              <p className="mt-2 text-sm text-fg-muted">{t.blurb}</p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm"><Check size={16} className="shrink-0 text-primary" /> {f}</li>
                ))}
              </ul>
              <a href={appHref('/register')} className={buttonClasses(t.featured ? 'primary' : 'ghost', 'md', 'mt-6 w-full')}>{t.cta}</a>
            </Surface>
          </motion.div>
        ))}
      </motion.div>
    </main>
  )
}
