import { type HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

type TagProps = HTMLAttributes<HTMLSpanElement>

export function Tag({ className, children, ...props }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-button border border-border-muted bg-surface-muted px-2 py-0.5 font-mono text-xs text-primary',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
