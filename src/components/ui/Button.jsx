import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import { Spinner } from './Spinner.jsx'

const variants = {
  primary: 'bg-primary text-on-primary hover:brightness-110 shadow-[var(--glow)]',
  ghost: 'border border-line bg-transparent text-fg hover:bg-surface-2',
  subtle: 'bg-surface-2 text-fg hover:brightness-105',
  danger: 'bg-loss text-white hover:brightness-110'
}
const sizes = { sm: 'h-9 px-3.5 text-sm', md: 'h-11 px-5 text-sm', lg: 'h-12 px-6 text-base' }

export function buttonClasses(variant = 'primary', size = 'md', extra) {
  return cn(
    'inline-flex select-none items-center justify-center gap-2 rounded-xl font-medium transition focus-ring disabled:pointer-events-none disabled:opacity-50',
    variants[variant],
    sizes[size],
    extra
  )
}

export const Button = forwardRef(function Button(
  { variant = 'primary', size = 'md', loading = false, disabled, className, children, ...props },
  ref
) {
  return (
    <motion.button
      ref={ref}
      whileTap={{ scale: 0.97 }}
      disabled={loading || disabled}
      className={buttonClasses(variant, size, className)}
      {...props}
    >
      {loading && <Spinner className="h-4 w-4" />}
      {children}
    </motion.button>
  )
})
