import { cn } from '@/lib/cn'

export function navLinkClass(isActive: boolean, size: 'sm' | 'lg' = 'sm') {
  return cn(
    'block rounded-button no-underline transition-colors',
    size === 'sm' ? 'px-3 py-1.5 text-sm' : 'px-4 py-3 text-base',
    isActive
      ? 'bg-accent-muted font-medium text-accent'
      : 'text-muted hover:text-primary',
  )
}
