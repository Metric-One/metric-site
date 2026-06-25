// Cross-repo link contract. Marketing CTAs that point at the AdMetrics
// dashboard are env-driven so the two repos deploy independently.
// VITE_APP_URL → dashboard origin (dev default: local Vite on :5173).
const raw = import.meta.env.VITE_APP_URL || 'http://localhost:5173'
export const appUrl = raw.replace(/\/+$/, '')
export const appHref = (path = '') => `${appUrl}${path}`
