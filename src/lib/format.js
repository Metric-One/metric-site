const locale = () => (typeof document !== 'undefined' && document.documentElement.lang) || 'en'

export const money = (n, currency = 'USD', max = 0) =>
  new Intl.NumberFormat(locale(), { style: 'currency', currency, maximumFractionDigits: max }).format(n)

export const moneyCompact = (n, currency = 'USD') =>
  new Intl.NumberFormat(locale(), { style: 'currency', currency, notation: 'compact', maximumFractionDigits: 1 }).format(n)

export const num = (n) => new Intl.NumberFormat(locale()).format(n)

export const compact = (n) => new Intl.NumberFormat(locale(), { notation: 'compact', maximumFractionDigits: 1 }).format(n)

export const pct = (n) => `${n > 0 ? '+' : ''}${n.toFixed(1)}%`

export const moneyFormat = (currency = 'USD', max = 0) => ({ style: 'currency', currency, maximumFractionDigits: max })

export const numberLocale = () => locale()
