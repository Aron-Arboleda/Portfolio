import { motion, useReducedMotion } from 'framer-motion'
import { type ReactNode } from 'react'
import { cn } from '@/lib/cn'

type FadeInSectionProps = {
  children: ReactNode
  delay?: number
  className?: string
}

export function FadeInSection({
  children,
  delay = 0,
  className,
}: FadeInSectionProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -16, y: 12 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
