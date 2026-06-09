import { cn } from '@/lib/cn'

export function navLinkClass(isActive: boolean, size: 'sm' | 'lg' = 'sm') {
  return cn(
    'block font-mono uppercase tracking-wider no-underline transition-colors',
    size === 'sm' ? 'px-3 py-1.5 text-xs' : 'px-4 py-3 text-2xl font-heading font-semibold normal-case tracking-tight',
    isActive
      ? 'text-accent underline decoration-2 underline-offset-4'
      : 'text-muted hover:text-primary',
  )
}
