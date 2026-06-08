import { useState } from 'react'
import { ProjectImagePlaceholder } from '@/components/projects/ProjectImagePlaceholder'
import { cn } from '@/lib/cn'

type ProjectImageProps = {
  src: string
  alt: string
  title: string
  slug?: string
  aspectRatio?: 'video' | 'square'
  className?: string
}

export function ProjectImage({
  src,
  alt,
  title,
  slug,
  aspectRatio = 'video',
  className,
}: ProjectImageProps) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
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
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={cn(
        'w-full rounded-card border border-border object-cover',
        aspectRatio === 'video' ? 'aspect-video' : 'aspect-square',
        className,
      )}
    />
  )
}
