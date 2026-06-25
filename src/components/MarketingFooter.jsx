import { Link } from 'react-router-dom'
import { Logo } from '@/components/ui'

const cols = [
  { title: 'Product', links: [['Features', '/features'], ['Pricing', '/pricing'], ['Platforms', '/platforms'], ['Download', '/download'], ['Docs', '/docs']] },
  { title: 'Platforms', links: [['Shopify', '/platforms'], ['Amazon', '/platforms'], ['Meta Ads', '/platforms'], ['Google Ads', '/platforms'], ['40+ more', '/platforms']] },
  { title: 'Company', links: [['About', '#'], ['Customers', '#'], ['Careers', '#'], ['Blog', '#'], ['Contact', '#']] },
  { title: 'Security', links: [['SOC 2 Type II', '#'], ['GDPR & KVKK', '#'], ['AES-256 at rest', '#'], ['SSL Pinning', '#'], ['Status', '#']] }
]

export default function MarketingFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-3 max-w-xs text-sm text-fg-muted">True net-profit analytics &amp; AI Growth Officer for modern commerce brands.</p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold">{col.title}</p>
              <ul className="mt-3 space-y-2 text-sm text-fg-muted">
                {col.links.map(([label, to]) => <li key={label}><Link to={to} className="transition hover:text-fg">{label}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-2xs text-fg-subtle sm:flex-row">
          <p>© 2026 METRICS · All rights reserved.</p>
          <p>Made for operators, not dashboards.</p>
        </div>
      </div>
    </footer>
  )
}
