'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, SunDim, Moon, type LucideIcon } from 'lucide-react'
import { useTheme, Theme } from '@/context/ThemeContext'

const themes: {
  id: Theme
  label: string
  Icon: LucideIcon
  iconColor: string
  swatchBg: string
  swatchBorder: string
}[] = [
  {
    id: 'sand',
    label: 'Sand',
    Icon: Sun,
    iconColor: '#D4882A',
    swatchBg: '#F0EDE8',
    swatchBorder: '#E4DDD5',
  },
  {
    id: 'light',
    label: 'Light',
    Icon: SunDim,
    iconColor: '#1A2530',
    swatchBg: '#F5F5F5',
    swatchBorder: '#E8E8E8',
  },
  {
    id: 'midnight',
    label: 'Midnight',
    Icon: Moon,
    iconColor: '#F0EDE8',
    swatchBg: '#1A2530',
    swatchBorder: '#1E2D3D',
  },
]

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current = themes.find(t => t.id === theme) ?? themes[0]

  // Close on click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">

      {/* Icon button + tooltip */}
      <div className="group/btn relative">
        <button
          onClick={() => setOpen(prev => !prev)}
          aria-label="Switch theme"
          aria-expanded={open}
          className="w-8 h-8 rounded-md border border-linen flex items-center justify-center hover:bg-bg-secondary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
        >
          <current.Icon
            size={16}
            color={current.iconColor}
            strokeWidth={1.75}
          />
        </button>

        {/* Tooltip — only when dropdown is closed */}
        {!open && (
          <div className="pointer-events-none absolute right-0 top-[calc(100%+6px)] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-150 z-50">
            <div className="bg-ink text-canvas text-11 font-medium px-2 py-1 rounded-md whitespace-nowrap">
              Switch theme
              <div className="absolute -top-[5px] right-3 w-2.5 h-2.5 bg-ink rotate-45 rounded-sm" />
            </div>
          </div>
        )}
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-[calc(100%+8px)] z-50 bg-canvas border border-linen rounded-xl p-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.12)] min-w-[148px]"
          >
            {themes.map((t, i) => (
              <motion.button
                key={t.id}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04, duration: 0.15 }}
                onClick={() => { setTheme(t.id); setOpen(false) }}
                className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-md text-left transition-colors duration-100 ${
                  theme === t.id
                    ? 'bg-[#FAEEDA]'
                    : 'hover:bg-bg-secondary'
                }`}
              >
                {/* Swatch */}
                <div
                  className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 border"
                  style={{ background: t.swatchBg, borderColor: t.swatchBorder }}
                >
                  <t.Icon
                    size={14}
                    color={t.id === 'midnight' ? '#F0EDE8' : t.id === 'sand' ? '#D4882A' : '#1A2530'}
                    strokeWidth={1.75}
                  />
                </div>

                {/* Label */}
                <span className="text-13 text-ink flex-1">{t.label}</span>

                {/* Active check */}
                {theme === t.id && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber flex-shrink-0">
                    <path d="M20 6L9 17L4 12" />
                  </svg>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
