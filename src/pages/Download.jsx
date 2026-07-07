import { useSeo } from '@/lib/seo'

// Shell only — download targets for Capacitor/Tauri builds that don't exist yet
// (and are explicitly out of V1, PWA-only per Part 2) stripped, along with the
// "signed & notarized" claim. Real download center arrives when builds ship
// (see STRICT BUILD RULE in CLAUDE.md).
export default function Download() {
  useSeo({ title: 'Download · Metric One' })
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-5 text-center">
      <h1 className="font-display text-4xl font-bold tracking-tight">Download</h1>
      <p className="mt-4 font-mono text-sm uppercase tracking-[0.18em] text-fg-subtle">Coming soon</p>
    </main>
  )
}
