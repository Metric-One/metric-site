import { useSeo } from '@/lib/seo'

// Shell only — connector list, counts and statuses removed (they were invented,
// not founder-approved). Real copy arrives page-by-page (see STRICT BUILD RULE).
export default function Platforms() {
  useSeo({ title: 'Platforms · Metric One' })
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-5 text-center">
      <h1 className="font-display text-4xl font-bold tracking-tight">Platforms</h1>
      <p className="mt-4 font-mono text-sm uppercase tracking-[0.18em] text-fg-subtle">Coming soon</p>
    </main>
  )
}
