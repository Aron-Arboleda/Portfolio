import { cn } from '@/lib/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-inverse border-2 border-primary ink-shadow hover:bg-accent hover:border-accent motion-safe:hover:translate-x-0.5 motion-safe:hover:translate-y-0.5 motion-safe:hover:shadow-none',
  secondary:
    'border-2 border-primary bg-transparent text-primary hover:bg-accent-muted hover:border-accent hover:text-accent',
  ghost:
    'border-2 border-transparent bg-transparent text-primary hover:bg-surface-muted',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-10 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
}

export function buttonVariants({
  variant = 'primary',
  size = 'md',
  className,
}: {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}) {
  return cn(
    'inline-flex items-center justify-center rounded-button font-mono font-medium uppercase tracking-wide no-underline',
    'transition-all duration-200 motion-safe:active:scale-[0.98]',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
    'disabled:pointer-events-none disabled:opacity-50',
    variantClasses[variant],
    sizeClasses[size],
    className,
  )
}
