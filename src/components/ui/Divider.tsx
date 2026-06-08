import { cn } from '@/lib/cn'

type DividerProps = {
  label?: string
  className?: string
}

export function Divider({ label, className }: DividerProps) {
  if (label) {
    return (
      <div
        className={cn('flex items-center gap-4 text-sm text-muted', className)}
        role="separator"
      >
        <div className="h-px flex-1 bg-border" />
        <span>{label}</span>
        <div className="h-px flex-1 bg-border" />
      </div>
    )
  }

  return (
    <hr className={cn('m-0 border-0 border-t border-border', className)} />
  )
}
