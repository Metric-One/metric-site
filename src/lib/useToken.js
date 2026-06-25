import { useThemeStore } from '@/stores/themeStore'

// Reads a CSS custom property, re-evaluated whenever the theme changes so
// SVG/canvas consumers (Recharts) stay in sync with light/dark tokens.
export function useToken(name) {
  const theme = useThemeStore((s) => s.theme)
  void theme
  if (typeof document === 'undefined') return ''
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim()
}
