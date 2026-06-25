import { motion } from 'framer-motion'
import { useToken } from '@/lib/useToken'

const pts = [16, 22, 18, 27, 23, 34, 29, 41, 35, 47, 44, 58, 53, 66]

export function LiveSparkline({ className }) {
  const profit = useToken('--profit')
  const w = 360
  const h = 96
  const n = pts.length
  const max = Math.max(...pts)
  const min = Math.min(...pts)
  const x = (i) => (i / (n - 1)) * w
  const y = (v) => h - ((v - min) / (max - min)) * (h - 12) - 6
  const line = pts.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ')
  const area = `${line} L${w} ${h} L0 ${h} Z`

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={className} preserveAspectRatio="none">
      <defs>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={profit} stopOpacity="0.34" />
          <stop offset="100%" stopColor={profit} stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path d={area} fill="url(#sparkFill)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }} />
      <motion.path
        d={line}
        fill="none"
        stroke={profit}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ filter: 'drop-shadow(0 0 6px rgba(0,255,135,0.4))' }}
      />
      <motion.circle cx={x(n - 1)} cy={y(pts[n - 1])} r="4" fill={profit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} style={{ filter: 'drop-shadow(0 0 8px rgba(0,255,135,0.7))' }}>
        <animate attributeName="r" values="4;6.5;4" dur="2.2s" repeatCount="indefinite" />
      </motion.circle>
    </svg>
  )
}
