'use client'

import { useEffect, useRef } from 'react'

export default function HeroCursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = glowRef.current?.parentElement
    if (!section) return

    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${x - 300}px, ${y - 300}px)`
        glowRef.current.style.opacity = '1'
      }
    }

    const onLeave = () => {
      if (glowRef.current) glowRef.current.style.opacity = '0'
    }

    section.addEventListener('mousemove', onMove)
    section.addEventListener('mouseleave', onLeave)
    return () => {
      section.removeEventListener('mousemove', onMove)
      section.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none absolute w-[600px] h-[600px] rounded-full opacity-0 transition-opacity duration-300"
      style={{
        background:
          'radial-gradient(circle, rgba(212,136,42,0.09) 0%, transparent 70%)',
        willChange: 'transform',
        transition: 'opacity 0.3s ease',
      }}
    />
  )
}
