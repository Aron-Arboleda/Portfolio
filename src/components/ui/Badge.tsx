import { type HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

type BadgeProps = HTMLAttributes<HTMLSpanElement>

export function Badge({ className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-button border border-border px-2.5 py-0.5 font-mono text-xs font-medium uppercase tracking-wide text-accent',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
