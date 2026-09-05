'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface FadeUpProps {
  children: ReactNode
  delay?: number
  className?: string
  once?: boolean
}

export default function FadeUp({
  children,
  delay = 0,
  className = '',
  once = true,
}: FadeUpProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-60px 0px' })
  const reduce = useReducedMotion()

  // Reduced motion: never gate content on scroll or hide it — render as-is.
  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 22 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
