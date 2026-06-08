import { type ReactNode } from 'react'
import { cn } from '@/lib/cn'

type HeroGrainProps = {
  children: ReactNode
  className?: string
}

export function HeroGrain({ children, className }: HeroGrainProps) {
  return <div className={cn('grain-overlay', className)}>{children}</div>
}
