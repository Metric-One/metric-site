import { cn } from '@/lib/cn'

// Growth Bars mark + Metric One wordmark — locked in the Signal v1.0 brand system.
export function Logo({ className, withWord = true }) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-on-primary shadow-[var(--glow)]">
        <svg width="18" height="18" viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <rect x="6" y="34" width="10" height="22" rx="3" fill="rgba(255,255,255,0.6)" />
          <rect x="22" y="22" width="10" height="34" rx="3" fill="rgba(255,255,255,0.8)" />
          <rect x="38" y="10" width="10" height="46" rx="3" fill="#fff" />
          <circle cx="56" cy="14" r="5.5" fill="rgba(255,255,255,0.65)" />
        </svg>
      </span>
      {withWord && (
        <span className="font-display text-lg font-bold tracking-tight">
          Metric<span className="text-primary">One</span>
        </span>
      )}
    </span>
  )
}
