import { type HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  hover?: boolean
}

export function Card({ hover = false, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-card border border-border bg-surface-elevated p-6',
        hover &&
          'motion-safe:transition-[box-shadow,transform] motion-safe:duration-300 motion-safe:hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
