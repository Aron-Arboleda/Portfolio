import { cn } from '@/lib/cn'

type ProjectImagePlaceholderProps = {
  title: string
  slug?: string
  aspectRatio?: 'video' | 'square'
  className?: string
}

const aspectClasses = {
  video: 'aspect-video',
  square: 'aspect-square',
} as const

export function ProjectImagePlaceholder({
  title,
  slug,
  aspectRatio = 'video',
  className,
}: ProjectImagePlaceholderProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center border-2 border-dashed border-border',
        'bg-gradient-to-br from-accent-muted via-surface-muted to-surface-elevated',
        aspectClasses[aspectRatio],
        className,
      )}
    >
      <p className="m-0 px-6 text-center font-heading text-lg font-semibold text-primary">
        {title}
      </p>
      {slug && (
        <p className="m-0 mt-2 font-mono text-xs text-muted">{slug}</p>
      )}
    </div>
  )
}
