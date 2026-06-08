import { useState } from 'react'
import { ProjectImagePlaceholder } from '@/components/projects/ProjectImagePlaceholder'
import { Skeleton } from '@/components/ui/Skeleton'
import { cn } from '@/lib/cn'

type ProjectImageProps = {
  src: string
  alt: string
  title: string
  slug?: string
  aspectRatio?: 'video' | 'square'
  loading?: 'eager' | 'lazy'
  className?: string
}

export function ProjectImage({
  src,
  alt,
  title,
  slug,
  aspectRatio = 'video',
  loading = 'lazy',
  className,
}: ProjectImageProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading')

  const aspectClass = aspectRatio === 'video' ? 'aspect-video' : 'aspect-square'

  if (status === 'error') {
    return (
      <ProjectImagePlaceholder
        title={title}
        slug={slug}
        aspectRatio={aspectRatio}
        className={className}
      />
    )
  }

  return (
    <div className={cn('relative', aspectClass, className)}>
      {status === 'loading' && (
        <Skeleton className={cn('absolute inset-0 h-full w-full', aspectClass)} />
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
        className={cn(
          'h-full w-full rounded-card border border-border object-cover transition-opacity duration-300',
          aspectClass,
          status === 'loaded' ? 'opacity-100' : 'opacity-0',
        )}
      />
    </div>
  )
}
