import { type ReactNode } from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cn } from '@/lib/cn'

type SectionProps = {
  id?: string
  eyebrow?: string
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
  titleAs?: 'h1' | 'h2' | 'h3'
}

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
  titleAs,
}: SectionProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)}>
      {title && (
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          titleAs={titleAs}
          className="mb-10"
        />
      )}
      {!title && eyebrow && (
        <p className="m-0 mb-6 text-sm font-medium uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
      )}
      {children}
    </section>
  )
}
