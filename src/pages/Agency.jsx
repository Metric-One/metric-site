import { useSeo } from '@/lib/seo'

// Shell only — invented specifics (8 roles, white-label, volume pricing, weekly
// digests) stripped. Real copy arrives page-by-page (see STRICT BUILD RULE).
export default function Agency() {
  useSeo({ title: 'Agencies · Metric One' })
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-5 text-center">
      <h1 className="font-display text-4xl font-bold tracking-tight">Agencies</h1>
      <p className="mt-4 font-mono text-sm uppercase tracking-[0.18em] text-fg-subtle">Coming soon</p>
    </main>
  )
}
