import { ComposedChart, Area, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { Surface } from '@/components/ui'
import { useToken } from '@/lib/useToken'
import { trend } from '@/data/trend'
import { money, moneyCompact } from '@/lib/format'

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div className="glass px-3 py-2 text-xs">
      <p className="mb-1 font-medium text-fg-subtle">{label}</p>
      {payload.map((p) => (
        <p key={p.dataKey} className="flex items-center justify-between gap-5 tnum">
          <span className="capitalize text-fg-muted">{p.dataKey === 'profit' ? 'net profit' : p.dataKey}</span>
          <span className="font-medium" style={{ color: p.color || p.stroke }}>{money(p.value)}</span>
        </p>
      ))}
    </div>
  )
}

function Pill({ children }) {
  return <span className="rounded-full border border-line bg-surface-2 px-2.5 py-1 text-2xs font-medium text-fg-muted">{children}</span>
}

export default function TrendChart() {
  const roas = useToken('--roas')
  const profit = useToken('--profit')
  const subtle = useToken('--fg-subtle')
  const line = useToken('--line')
  const series = trend.map((d) => ({ ...d, x: `D${d.day}` }))

  return (
    <Surface className="p-4 sm:p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold">Revenue · Spend · Net Profit</h2>
          <p className="text-sm text-fg-muted">Last 30 days</p>
        </div>
        <div className="flex items-center gap-2"><Pill>All channels</Pill><Pill>USD</Pill></div>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={series} margin={{ left: -12, right: 4, top: 4, bottom: 0 }}>
            <defs>
              <linearGradient id="gRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={roas} stopOpacity={0.32} />
                <stop offset="100%" stopColor={roas} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke={line} />
            <XAxis dataKey="x" tickLine={false} axisLine={false} tick={{ fill: subtle, fontSize: 11 }} minTickGap={24} />
            <YAxis tickLine={false} axisLine={false} tick={{ fill: subtle, fontSize: 11 }} tickFormatter={(v) => moneyCompact(v)} width={52} />
            <Tooltip content={<ChartTooltip />} cursor={{ stroke: line }} />
            <Area type="monotone" dataKey="revenue" stroke={roas} strokeWidth={2} fill="url(#gRevenue)" />
            <Line type="monotone" dataKey="profit" stroke={profit} strokeWidth={2.5} dot={false} />
            <Line type="monotone" dataKey="spend" stroke={subtle} strokeWidth={1.8} strokeDasharray="5 4" dot={false} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-4 text-2xs text-fg-muted">
        <span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full" style={{ background: roas }} /> Revenue</span>
        <span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full" style={{ background: profit }} /> Net Profit</span>
        <span className="flex items-center gap-1.5"><i className="h-0.5 w-3" style={{ background: subtle }} /> Spend</span>
      </div>
    </Surface>
  )
}
