import { SectionIndex } from '@/components/ui/SectionIndex'
import { cn } from '@/lib/cn'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  index?: string | number
  className?: string
  titleAs?: 'h1' | 'h2' | 'h3'
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  index,
  className,
  titleAs: TitleTag = 'h2',
}: SectionHeadingProps) {
  return (
    <div className={cn(className)}>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="min-w-0 flex-1">
          {eyebrow && (
            <p className="m-0 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </p>
          )}
          <TitleTag
            className={cn(
              'm-0 font-heading font-semibold text-primary',
              eyebrow ? 'mt-3' : undefined,
              TitleTag === 'h1'
                ? 'text-4xl leading-tight sm:text-5xl'
                : 'text-3xl sm:text-4xl',
            )}
          >
            {title}
          </TitleTag>
          <div className="gradient-rule mt-4" aria-hidden="true" />
        </div>
        {index !== undefined && <SectionIndex index={index} />}
      </div>
      {subtitle && (
        <p className="m-0 mt-4 max-w-2xl text-muted">{subtitle}</p>
      )}
    </div>
  )
}
