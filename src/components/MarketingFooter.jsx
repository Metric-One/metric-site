import { Link } from 'react-router-dom'
import { Logo } from '@/components/ui'
import { appHref } from '@/lib/links'

// Only TRUE-today content: brand, real in-repo route links, the real cross-repo
// appHref() links into the dashboard app, and copyright. No unverified claims
// (no certs, no connector counts, no security assertions) — see STRICT BUILD
// RULE in CLAUDE.md. Real footer content arrives with founder input.
const cols = [
  { title: 'Product', links: [['Planner', '/planner'], ['Services', '/services']] }
]

export default function MarketingFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold">{col.title}</p>
              <ul className="mt-3 space-y-2 text-sm text-fg-muted">
                {col.links.map(([label, to]) => <li key={label}><Link to={to} className="transition hover:text-fg">{label}</Link></li>)}
              </ul>
            </div>
          ))}
          <div>
            <p className="text-sm font-semibold">Account</p>
            <ul className="mt-3 space-y-2 text-sm text-fg-muted">
              <li><a href={appHref('/login')} className="transition hover:text-fg">Log in</a></li>
              <li><a href={appHref('/register')} className="transition hover:text-fg">Start free</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-line pt-6 text-2xs text-fg-subtle">
          <p>© 2026 Metric One · All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
