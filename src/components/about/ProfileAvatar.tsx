import { useState } from 'react'
import { profileImagePath } from '@/lib/images'
import { cn } from '@/lib/cn'

type ProfileAvatarProps = {
  size?: 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  md: 'h-24 w-24 text-lg',
  lg: 'h-44 w-44 text-2xl sm:h-48 sm:w-48',
} as const

export function ProfileAvatar({ size = 'lg', className }: ProfileAvatarProps) {
  const [hasError, setHasError] = useState(false)
  const src = profileImagePath()

  if (hasError) {
    return (
      <div className={cn('polaroid-frame shrink-0', className)}>
        <div
          className={cn(
            'flex items-center justify-center bg-surface-muted font-mono font-bold text-accent',
            sizeClasses[size],
          )}
          aria-hidden="true"
        >
          AR
        </div>
      </div>
    )
  }

  return (
    <div className={cn('polaroid-frame shrink-0', className)}>
      <img
        src={src}
        alt="Aron Arboleda"
        loading="eager"
        decoding="async"
        onError={() => setHasError(true)}
        className={cn('block object-cover', sizeClasses[size])}
      />
    </div>
  )
}
