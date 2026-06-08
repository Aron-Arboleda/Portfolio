import { cn } from '@/lib/cn'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  className?: string
  titleAs?: 'h1' | 'h2' | 'h3'
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  titleAs: TitleTag = 'h2',
}: SectionHeadingProps) {
  return (
    <div className={cn(className)}>
      {eyebrow && (
        <p className="m-0 text-sm font-medium uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
      )}
      <TitleTag
        className={cn(
          'm-0 font-heading text-primary',
          eyebrow ? 'mt-3' : undefined,
          TitleTag === 'h1'
            ? 'text-4xl leading-tight sm:text-5xl'
            : 'text-3xl sm:text-4xl',
        )}
      >
        {title}
      </TitleTag>
      {subtitle && (
        <p className="m-0 mt-4 max-w-2xl text-muted">{subtitle}</p>
      )}
    </div>
  )
}
