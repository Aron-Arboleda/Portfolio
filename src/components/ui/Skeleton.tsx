import { cn } from '@/lib/cn'

type SkeletonProps = {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-card border border-border-muted bg-surface-muted motion-reduce:animate-none',
        'bg-[radial-gradient(circle,var(--border-muted)_1px,transparent_1px)] bg-[length:8px_8px]',
        className,
      )}
      aria-hidden="true"
    />
  )
}
