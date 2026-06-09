import { cn } from '@/lib/cn'

type SectionIndexProps = {
  index: string | number
  className?: string
}

export function SectionIndex({ index, className }: SectionIndexProps) {
  const formatted = String(index).padStart(2, '0')

  return (
    <span
      className={cn(
        'font-mono text-5xl font-medium leading-none text-accent/25 sm:text-6xl',
        className,
      )}
      aria-hidden="true"
    >
      {formatted}
    </span>
  )
}
