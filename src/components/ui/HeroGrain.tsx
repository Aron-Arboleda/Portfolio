import { Atmosphere } from '@/components/ui/Atmosphere'
import { type ReactNode } from 'react'
import { cn } from '@/lib/cn'

type HeroGrainProps = {
  children: ReactNode
  className?: string
}

/** @deprecated Use Atmosphere — kept for import compatibility */
export function HeroGrain({ children, className }: HeroGrainProps) {
  return <Atmosphere className={cn(className)}>{children}</Atmosphere>
}
