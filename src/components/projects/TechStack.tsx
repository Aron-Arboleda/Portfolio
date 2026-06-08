import { Tag } from '@/components/ui/Tag'
import { cn } from '@/lib/cn'

type TechStackProps = {
  items: string[]
  max?: number
  className?: string
}

export function TechStack({ items, max = 4, className }: TechStackProps) {
  const visible = items.slice(0, max)
  const overflow = items.length - max

  return (
    <div className={cn('flex flex-wrap gap-1.5', className)}>
      {visible.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
      {overflow > 0 && (
        <span className="inline-flex items-center px-2 text-xs text-muted">
          +{overflow}
        </span>
      )}
    </div>
  )
}
