import { cn } from '@/lib/cn'

type DisplayHeadingProps = {
  name: string
  role: string
  className?: string
  compact?: boolean
}

function splitName(fullName: string): { first: string; last: string } {
  const parts = fullName.trim().split(/\s+/)
  if (parts.length <= 1) {
    return { first: fullName, last: '' }
  }
  const last = parts.pop() ?? ''
  return { first: parts.join(' '), last }
}

export function DisplayHeading({
  name,
  role,
  className,
  compact = false,
}: DisplayHeadingProps) {
  const { first, last } = splitName(name)

  return (
    <div className={cn(className)}>
      <p className="m-0 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
        Portfolio / 2026
      </p>
      <h1
        className={cn(
          'm-0 mt-2 text-primary',
          compact ? 'display-text-hero' : 'display-text',
        )}
      >
        {first}
        {last && (
          <>
            <br />
            <span className="gradient-stroke-text">{last}</span>
          </>
        )}
      </h1>
      <div className={cn('flex items-center gap-4', compact ? 'mt-3' : 'mt-5')}>
        <div className="gradient-rule shrink-0" aria-hidden="true" />
        <p className="m-0 font-mono text-base font-medium text-primary sm:text-lg">
          {role}
        </p>
      </div>
    </div>
  )
}
