import { useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { certificateImagePath } from '@/lib/images'
import type { Certificate } from '@/types/certificate'

type CertificateLightboxProps = {
  certificates: Certificate[]
  activeIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function CertificateLightbox({
  certificates,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: CertificateLightboxProps) {
  const certificate = certificates[activeIndex]
  const hasPrev = activeIndex > 0
  const hasNext = activeIndex < certificates.length - 1

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

  if (!certificate) return null

  const src = certificateImagePath(certificate.id)

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${certificate.title} certificate`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-4xl flex-col"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-12 right-0 inline-flex h-11 w-11 items-center justify-center rounded-button border border-border bg-surface-elevated text-primary hover:text-accent"
          aria-label="Close certificate viewer"
        >
          <X size={20} aria-hidden="true" />
        </button>

        {hasPrev && (
          <button
            type="button"
            onClick={onPrev}
            className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-x-full -translate-y-1/2 items-center justify-center text-inverse hover:text-accent max-sm:-translate-x-0 max-sm:left-2 max-sm:rounded-button max-sm:border max-sm:border-border max-sm:bg-surface-elevated max-sm:text-primary"
            aria-label="Previous certificate"
          >
            <ChevronLeft size={28} aria-hidden="true" />
          </button>
        )}

        {hasNext && (
          <button
            type="button"
            onClick={onNext}
            className="absolute right-0 top-1/2 z-10 flex h-11 w-11 translate-x-full -translate-y-1/2 items-center justify-center text-inverse hover:text-accent max-sm:translate-x-0 max-sm:right-2 max-sm:rounded-button max-sm:border max-sm:border-border max-sm:bg-surface-elevated max-sm:text-primary"
            aria-label="Next certificate"
          >
            <ChevronRight size={28} aria-hidden="true" />
          </button>
        )}

        <div className="ink-shadow overflow-hidden rounded-card border-2 border-border bg-surface-elevated">
          <img
            src={src}
            alt={`${certificate.title} — ${certificate.issuer}`}
            className="max-h-[75vh] w-full object-contain"
          />
        </div>

        <div className="mt-4 text-center">
          <p className="m-0 font-heading text-lg text-inverse">{certificate.title}</p>
          <p className="m-0 mt-1 text-sm text-inverse/80">
            {certificate.issuer} · {certificate.date}
          </p>
          <p className="m-0 mt-2 font-mono text-xs text-inverse/60">
            {activeIndex + 1} of {certificates.length}
          </p>
        </div>
      </div>
    </div>
  )
}
