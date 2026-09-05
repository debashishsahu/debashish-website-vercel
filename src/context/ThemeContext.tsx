'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { MotionConfig } from 'framer-motion'

export type Theme = 'sand' | 'light' | 'midnight'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'sand',
  setTheme: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('sand')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('portfolio-theme') as Theme
    if (stored && ['sand', 'light', 'midnight'].includes(stored)) {
      setThemeState(stored)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme, mounted])

  const setTheme = (t: Theme) => {
    // Enable colour transitions only for the duration of the switch, so the
    // rest of the time nothing on the page carries a blanket transition.
    if (typeof document !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const root = document.documentElement
      root.setAttribute('data-theme-anim', '')
      window.setTimeout(() => root.removeAttribute('data-theme-anim'), 350)
    }
    setThemeState(t)
  }

  // `reducedMotion="user"` makes every framer-motion component in the tree
  // respect prefers-reduced-motion without per-component guards.
  const body = <MotionConfig reducedMotion="user">{children}</MotionConfig>

  // Prevent flash of wrong theme
  if (!mounted) return body

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {body}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
