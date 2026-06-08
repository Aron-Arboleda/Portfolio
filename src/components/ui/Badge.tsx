import { type HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

type BadgeProps = HTMLAttributes<HTMLSpanElement>

export function Badge({ className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-accent-muted px-2.5 py-0.5 text-xs font-medium text-accent',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
