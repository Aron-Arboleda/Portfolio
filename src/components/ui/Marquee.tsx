import { cn } from '@/lib/cn'

type MarqueeProps = {
  items: string[]
  className?: string
}

export function Marquee({ items, className }: MarqueeProps) {
  const track = [...items, ...items]

  return (
    <div
      className={cn(
        'overflow-hidden border-y-2 border-border bg-surface-elevated py-3',
        className,
      )}
      aria-hidden="true"
    >
      <div className="marquee-track flex w-max gap-8 motion-reduce:transform-none">
        {track.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="shrink-0 font-mono text-sm font-medium uppercase tracking-widest text-muted"
          >
            {item}
            <span className="mx-4 text-accent-secondary" aria-hidden="true">
              /
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
