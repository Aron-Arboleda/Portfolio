import { cn } from '@/lib/cn'

type SkeletonProps = {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-card bg-surface-muted motion-reduce:animate-none',
        className,
      )}
      aria-hidden="true"
    />
  )
}
