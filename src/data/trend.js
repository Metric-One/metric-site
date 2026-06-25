// Static 30-day revenue/profit/spend series for the marketing TrendChart.
// No live API — this is fixture content only.
export const trend = Array.from({ length: 30 }, (_, i) => {
  const base = 4200 + Math.round(900 * Math.sin(i / 3.2) + i * 95)
  const revenue = base + 1800
  const profit = Math.round(base * 0.41)
  const spend = Math.round(revenue * 0.19)
  return { day: i + 1, revenue, profit, spend }
})
