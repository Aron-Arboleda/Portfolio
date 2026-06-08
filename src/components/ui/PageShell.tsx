import { type ReactNode } from 'react'
import { cn } from '@/lib/cn'

type PageShellProps = {
  children: ReactNode
  className?: string
  variant?: 'default' | 'narrow' | 'full'
}

const widthClasses = {
  default: 'max-w-content',
  narrow: 'max-w-3xl',
  full: 'max-w-full',
} as const

export function PageShell({
  children,
  className,
  variant = 'default',
}: PageShellProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6',
        widthClasses[variant],
        className,
      )}
    >
      {children}
    </div>
  )
}
