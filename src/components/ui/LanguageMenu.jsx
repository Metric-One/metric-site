import { useState, useRef, useEffect } from 'react'
import { Globe, Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { SUPPORTED, RTL, setLanguage } from '@/i18n'
import { cn } from '@/lib/cn'

export function LanguageMenu({ className }) {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function onDoc(e) { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    function onKey(e) { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  function pick(code) {
    setLanguage(code)
    setOpen(false)
  }

  return (
    <div ref={ref} className={cn('relative', className)}>
      <button onClick={() => setOpen((o) => !o)} aria-label="Change language"
        aria-haspopup="menu" aria-expanded={open}
        className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface-2 text-fg-muted transition hover:text-fg focus-ring">
        <Globe size={18} />
      </button>
      {open && (
        <div role="menu" className="glass absolute right-0 z-50 mt-2 max-h-80 w-44 overflow-auto p-1.5">
          {SUPPORTED.map((l) => (
            <button key={l.code} onClick={() => pick(l.code)} dir={RTL.includes(l.code) ? 'rtl' : 'ltr'}
              role="menuitemradio" aria-checked={i18n.language === l.code} lang={l.code}
              className={cn('flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition hover:bg-surface-2', i18n.language === l.code ? 'text-fg' : 'text-fg-muted')}>
              {l.label}{i18n.language === l.code && <Check size={15} className="text-primary" aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
