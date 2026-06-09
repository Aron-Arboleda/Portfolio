import { useState } from 'react'
import { CertificateCard } from '@/components/about/CertificateCard'
import { CertificateLightbox } from '@/components/about/CertificateLightbox'
import type { Certificate } from '@/types/certificate'

type CertificateListProps = {
  certificates: Certificate[]
}

export function CertificateList({ certificates }: CertificateListProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <>
      <ul className="m-0 flex list-none flex-col gap-4 p-0">
        {certificates.map((certificate, index) => (
          <li key={certificate.id}>
            <CertificateCard
              certificate={certificate}
              onView={() => setActiveIndex(index)}
            />
          </li>
        ))}
      </ul>

      {activeIndex !== null && (
        <CertificateLightbox
          certificates={certificates}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onPrev={() => setActiveIndex((index) => Math.max(0, (index ?? 0) - 1))}
          onNext={() =>
            setActiveIndex((index) =>
              Math.min(certificates.length - 1, (index ?? 0) + 1),
            )
          }
        />
      )}
    </>
  )
}
