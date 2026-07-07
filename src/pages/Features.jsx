import { useSeo } from '@/lib/seo'

// Shell only — the 8 feature claims (AES-256, 8 RBAC roles, CAPI, etc.) were
// invented and unapproved; stripped. Real copy arrives page-by-page (see
// STRICT BUILD RULE in CLAUDE.md).
export default function Features() {
  useSeo({ title: 'Features · Metric One' })
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-5 text-center">
      <h1 className="font-display text-4xl font-bold tracking-tight">Features</h1>
      <p className="mt-4 font-mono text-sm uppercase tracking-[0.18em] text-fg-subtle">Coming soon</p>
    </main>
  )
}
