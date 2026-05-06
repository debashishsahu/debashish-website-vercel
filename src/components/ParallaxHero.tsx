'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ParallaxHeroProps {
  src: string
  alt: string
  objectPosition?: string
}

export default function ParallaxHero({ src, alt, objectPosition = 'center 55%' }: ParallaxHeroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Image moves at 25% scroll speed — subtle parallax
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  return (
    <div ref={ref} className="relative overflow-hidden aspect-video rounded-lg bg-bg-surface">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          style={{ objectPosition }}
          priority
        />
      </motion.div>
    </div>
  )
}
