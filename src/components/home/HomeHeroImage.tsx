import { useState } from 'react'
import { homeHeroImagePath } from '@/lib/images'
import { cn } from '@/lib/cn'

type HomeHeroImageProps = {
  className?: string
}

export function HomeHeroImage({ className }: HomeHeroImageProps) {
  const [hasError, setHasError] = useState(false)
  const src = homeHeroImagePath()

  if (hasError) {
    return (
      <div
        className={cn(
          'flex aspect-[3/4] w-full max-w-xs items-center justify-center border-2 border-dashed border-border bg-accent-muted ink-shadow sm:max-w-sm lg:max-w-md',
          className,
        )}
        aria-hidden="true"
      >
        <span className="font-mono text-sm text-muted">aron-hero.webp</span>
      </div>
    )
  }

  return (
    <div
      className={cn(
        'relative w-full max-w-xs shrink-0 sm:max-w-sm lg:max-w-md',
        className,
      )}
    >
      <div className="ink-shadow overflow-hidden border-2 border-border">
        <img
          src={src}
          alt="Aron Arboleda"
          loading="eager"
          decoding="async"
          onError={() => setHasError(true)}
          className="aspect-[3/4] h-auto w-full object-cover object-top"
        />
      </div>
      <div
        className="pointer-events-none absolute -bottom-3 -right-3 h-full w-full border-2 border-accent-secondary"
        aria-hidden="true"
      />
    </div>
  )
}
