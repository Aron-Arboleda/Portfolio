import { useState } from 'react'
import { Award, Expand } from 'lucide-react'
import { certificateImagePath } from '@/lib/images'
import { cn } from '@/lib/cn'
import type { Certificate } from '@/types/certificate'

type CertificateCardProps = {
  certificate: Certificate
  onView: () => void
}

export function CertificateCard({ certificate, onView }: CertificateCardProps) {
  const [thumbLoaded, setThumbLoaded] = useState(false)
  const [thumbError, setThumbError] = useState(false)
  const src = certificateImagePath(certificate.id)

  return (
    <button
      type="button"
      onClick={onView}
      className={cn(
        'group w-full cursor-pointer rounded-card border-2 border-border bg-surface-elevated p-5 text-left ink-shadow',
        'motion-safe:transition-[box-shadow,transform,border-color] motion-safe:duration-300',
        'motion-safe:hover:-translate-x-0.5 motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-accent',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
      )}
      aria-label={`View ${certificate.title} certificate`}
    >
      <div className="flex gap-4 sm:gap-5">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="m-0 text-sm font-medium text-accent">
                {certificate.issuer}
              </p>
              <p className="m-0 mt-1 font-heading text-lg text-primary transition-colors group-hover:text-accent">
                {certificate.title}
              </p>
            </div>
            <span className="shrink-0 text-sm text-muted">{certificate.date}</span>
          </div>
          {certificate.description && (
            <p className="m-0 mt-2 text-sm text-muted">{certificate.description}</p>
          )}
          <p className="m-0 mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors group-hover:text-accent">
            <Expand size={14} aria-hidden="true" />
            View certificate
          </p>
        </div>

        <div
          className="relative hidden w-28 shrink-0 overflow-hidden rounded-button border border-border bg-surface-muted sm:block md:w-32"
          aria-hidden="true"
        >
          <div className="aspect-[4/3] w-full">
            {!thumbError && (
              <img
                src={src}
                alt=""
                loading="lazy"
                decoding="async"
                onLoad={() => setThumbLoaded(true)}
                onError={() => setThumbError(true)}
                className={cn(
                  'h-full w-full object-cover object-top transition-opacity duration-300',
                  thumbLoaded ? 'opacity-100' : 'opacity-0',
                )}
              />
            )}
            {(thumbError || !thumbLoaded) && (
              <div
                className={cn(
                  'absolute inset-0 flex items-center justify-center bg-accent-muted',
                  thumbLoaded && !thumbError && 'opacity-0',
                )}
              >
                <Award
                  size={28}
                  className="text-accent/50"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </button>
  )
}
