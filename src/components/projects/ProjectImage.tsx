import { useState } from 'react'
import { ProjectImagePlaceholder } from '@/components/projects/ProjectImagePlaceholder'
import { Skeleton } from '@/components/ui/Skeleton'
import { cn } from '@/lib/cn'

type ProjectImageProps = {
  src: string
  alt: string
  title: string
  slug?: string
  aspectRatio?: 'video' | 'square' | 'auto'
  fit?: 'cover' | 'contain'
  loading?: 'eager' | 'lazy'
  /** When false, skips img border/radius — use inside a framed parent (Card, hero shell). */
  framed?: boolean
  className?: string
}

export function ProjectImage({
  src,
  alt,
  title,
  slug,
  aspectRatio = 'video',
  fit = 'cover',
  loading = 'lazy',
  framed = true,
  className,
}: ProjectImageProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading')

  const isAutoAspect = aspectRatio === 'auto'
  const aspectClass =
    aspectRatio === 'video'
      ? 'aspect-video'
      : aspectRatio === 'square'
        ? 'aspect-square'
        : undefined

  if (status === 'error') {
    return (
      <ProjectImagePlaceholder
        title={title}
        slug={slug}
        aspectRatio={aspectRatio}
        framed={framed}
        className={className}
      />
    )
  }

  return (
    <div
      className={cn(
        'relative w-full',
        aspectClass,
        isAutoAspect && status === 'loading' && 'min-h-48',
        fit === 'contain' && 'bg-surface-muted',
        className,
      )}
    >
      {status === 'loading' && (
        <Skeleton
          className={cn(
            'absolute inset-0 w-full',
            isAutoAspect ? 'min-h-48' : cn('h-full', aspectClass),
          )}
        />
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
        className={cn(
          'w-full transition-opacity duration-300',
          isAutoAspect
            ? 'h-auto object-contain'
            : cn(
                'h-full',
                aspectClass,
                fit === 'cover' ? 'object-cover' : 'object-contain',
              ),
          framed ? 'rounded-card border border-border' : 'rounded-none border-0',
          status === 'loaded' ? 'opacity-100' : 'opacity-0',
        )}
      />
    </div>
  )
}
