import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Logo, ThemeToggle, LanguageMenu, buttonClasses } from '@/components/ui'
import { appHref } from '@/lib/links'
import { cn } from '@/lib/cn'

// Only routes with real/intentional content sit in the primary nav. The
// stripped "Coming soon" routes (platforms, features, solutions/*, pricing,
// docs, download, learn) stay reachable by URL but leave the top bar until
// they carry founder-approved content (see STRICT BUILD RULE in CLAUDE.md).
const links = [
  { to: '/planner', key: 'nav.planner' },
  { to: '/services', key: 'nav.services' }
]

export default function MarketingNav() {
  const { t } = useTranslation()
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-blur backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Link to="/" className="rounded-lg focus-ring"><Logo /></Link>
        <nav className="hidden items-center gap-6 text-sm text-fg-muted md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => cn('transition hover:text-fg', isActive && 'text-fg')}>{t(l.key)}</NavLink>
          ))}
          <a href={appHref('/login')} className="transition hover:text-fg">{t('nav.login')}</a>
        </nav>
        <div className="flex items-center gap-2">
          <LanguageMenu />
          <ThemeToggle />
          <a href={appHref('/register')} className={buttonClasses('primary', 'sm')}>{t('nav.startFree')}</a>
        </div>
      </div>
    </header>
  )
}
