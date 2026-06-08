import { type HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

type TagProps = HTMLAttributes<HTMLSpanElement>

export function Tag({ className, children, ...props }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
