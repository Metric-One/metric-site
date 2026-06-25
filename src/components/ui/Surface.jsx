import { cn } from '@/lib/cn'

export function Surface({ as: Tag = 'div', glass = true, hover = false, gradient = false, live = false, className, ...props }) {
  return (
    <Tag
      className={cn(glass ? 'glass' : 'card', hover && 'card-hover', gradient && 'gborder', live && 'gborder gborder-live', className)}
      {...props}
    />
  )
}
