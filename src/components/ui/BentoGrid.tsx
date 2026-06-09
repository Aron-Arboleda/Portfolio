import { type ReactNode } from 'react'
import { cn } from '@/lib/cn'

type BentoGridProps = {
  children: ReactNode
  className?: string
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        'grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6',
        className,
      )}
    >
      {children}
    </div>
  )
}

type BentoCellProps = {
  children: ReactNode
  span?: 1 | 2
  className?: string
}

export function BentoCell({ children, span = 1, className }: BentoCellProps) {
  return (
    <div
      className={cn(
        span === 2 && 'sm:col-span-2 lg:col-span-2',
        className,
      )}
    >
      {children}
    </div>
  )
}
