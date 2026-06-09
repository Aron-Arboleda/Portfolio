import { type HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  hover?: boolean
}

export function Card({ hover = false, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-card border-2 border-border bg-surface-elevated p-6 ink-shadow',
        hover &&
          'motion-safe:transition-[box-shadow,transform,border-color] motion-safe:duration-300 motion-safe:hover:-translate-x-0.5 motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-accent',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
