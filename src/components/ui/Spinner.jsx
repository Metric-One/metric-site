import { cn } from '@/lib/cn'

export function Spinner({ className }) {
  return <span aria-hidden="true" className={cn('inline-block animate-spin rounded-full border-2 border-current border-t-transparent', className || 'h-4 w-4')} />
}
