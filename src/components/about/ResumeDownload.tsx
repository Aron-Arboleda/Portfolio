import { Download } from 'lucide-react'
import { profile } from '@/data/profile'
import { buttonVariants } from '@/lib/button-variants'
import { cn } from '@/lib/cn'

type ResumeDownloadProps = {
  variant?: 'primary' | 'secondary'
  className?: string
}

export function ResumeDownload({
  variant = 'secondary',
  className,
}: ResumeDownloadProps) {
  if (!profile.resumeUrl) return null

  return (
    <a
      href={profile.resumeUrl}
      download
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ variant }), 'gap-2', className)}
    >
      <Download size={16} aria-hidden="true" />
      Download CV
    </a>
  )
}
