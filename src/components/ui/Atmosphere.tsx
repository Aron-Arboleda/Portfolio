import { type ReactNode } from 'react'
import { cn } from '@/lib/cn'

type AtmosphereProps = {
  children: ReactNode
  className?: string
}

export function Atmosphere({ children, className }: AtmosphereProps) {
  return (
    <div
      className={cn(
        'halftone-bg atmosphere-mesh relative overflow-hidden',
        className,
      )}
    >
      {children}
    </div>
  )
}
