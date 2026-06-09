import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { ProjectImage } from '@/components/projects/ProjectImage'

type ImageLightboxProps = {
  images: { src: string; caption: string }[]
  activeIndex: number
  projectTitle: string
  projectSlug: string
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function ImageLightbox({
  images,
  activeIndex,
  projectTitle,
  projectSlug,
  onClose,
  onPrev,
  onNext,
}: ImageLightboxProps) {
  const active = images[activeIndex]
  const hasPrev = activeIndex > 0
  const hasNext = activeIndex < images.length - 1

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft' && hasPrev) onPrev()
      if (event.key === 'ArrowRight' && hasNext) onNext()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, onPrev, onNext, hasPrev, hasNext])

  if (!active) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary/80 p-4 backdrop-blur-sm motion-reduce:transition-none"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-12 right-0 inline-flex h-11 w-11 items-center justify-center rounded-button border border-border bg-surface-elevated text-primary hover:text-accent"
          aria-label="Close gallery"
        >
          <X size={20} aria-hidden="true" />
        </button>

        {hasPrev && (
          <button
            type="button"
            onClick={onPrev}
            className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-x-full -translate-y-1/2 items-center justify-center text-inverse hover:text-accent max-sm:-translate-x-0 max-sm:left-2 max-sm:rounded-button max-sm:bg-surface-elevated max-sm:text-primary"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} aria-hidden="true" />
          </button>
        )}

        {hasNext && (
          <button
            type="button"
            onClick={onNext}
            className="absolute right-0 top-1/2 z-10 flex h-11 w-11 translate-x-full -translate-y-1/2 items-center justify-center text-inverse hover:text-accent max-sm:translate-x-0 max-sm:right-2 max-sm:rounded-button max-sm:bg-surface-elevated max-sm:text-primary"
            aria-label="Next image"
          >
            <ChevronRight size={28} aria-hidden="true" />
          </button>
        )}

        <ProjectImage
          src={active.src}
          alt={`${projectTitle} — ${active.caption}`}
          title={projectTitle}
          slug={projectSlug}
          framed={false}
          className="max-h-[80vh] w-full"
        />
        <p className="m-0 mt-4 text-center text-sm text-inverse">
          {active.caption} ({activeIndex + 1} of {images.length})
        </p>
      </div>
    </div>
  )
}
