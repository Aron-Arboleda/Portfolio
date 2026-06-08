import { useState } from 'react'
import { profileImagePath } from '@/lib/images'
import { cn } from '@/lib/cn'

type ProfileAvatarProps = {
  size?: 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  md: 'h-24 w-24 text-lg',
  lg: 'h-40 w-40 text-2xl',
} as const

export function ProfileAvatar({ size = 'lg', className }: ProfileAvatarProps) {
  const [hasError, setHasError] = useState(false)
  const src = profileImagePath()

  if (hasError) {
    return (
      <div
        className={cn(
          'flex shrink-0 items-center justify-center rounded-card border-2 border-accent font-heading text-accent',
          sizeClasses[size],
          className,
        )}
        aria-hidden="true"
      >
        AR
      </div>
    )
  }

  return (
    <img
      src={src}
      alt="Aron Arboleda"
      loading="eager"
      decoding="async"
      onError={() => setHasError(true)}
      className={cn(
        'shrink-0 rounded-card border border-border object-cover',
        sizeClasses[size],
        className,
      )}
    />
  )
}
