import type { Certificate } from '@/types/certificate'

type CertificateListProps = {
  certificates: Certificate[]
}

export function CertificateList({ certificates }: CertificateListProps) {
  return (
    <ul className="m-0 flex list-none flex-col gap-4 p-0">
      {certificates.map((certificate) => (
        <li
          key={certificate.id}
          className="rounded-card border border-border bg-surface-elevated p-5"
        >
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <p className="m-0 text-sm font-medium text-accent">
                {certificate.issuer}
              </p>
              <p className="m-0 mt-1 font-heading text-lg text-primary">
                {certificate.title}
              </p>
            </div>
            <span className="shrink-0 text-sm text-muted">{certificate.date}</span>
          </div>
          {certificate.description && (
            <p className="m-0 mt-2 text-sm text-muted">
              {certificate.description}
            </p>
          )}
        </li>
      ))}
    </ul>
  )
}
