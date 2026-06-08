import { Link, type LinkProps } from 'react-router-dom'
import {
  buttonVariants,
  type ButtonSize,
  type ButtonVariant,
} from '@/lib/button-variants'
import { cn } from '@/lib/cn'

type ButtonLinkProps = LinkProps & {
  variant?: ButtonVariant
  size?: ButtonSize
}

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}
