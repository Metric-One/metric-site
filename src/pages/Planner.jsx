import { useSeo } from '@/lib/seo'

// Shell only — waitlist target for the Home CTAs. Content arrives from the
// founder (see STRICT BUILD RULE in CLAUDE.md).
export default function Planner() {
  useSeo({ title: 'Planner · Metric One' })
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-5 text-center">
      <h1 className="font-display text-4xl font-bold tracking-tight">One planner. Every kind of growth.</h1>
      <p className="mt-4 font-mono text-sm uppercase tracking-[0.18em] text-fg-subtle">Coming soon</p>
    </main>
  )
}
