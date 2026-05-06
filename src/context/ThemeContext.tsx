'use client'

import { createContext, useContext, useEffect, useState } from 'react'

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

  const setTheme = (t: Theme) => setThemeState(t)

  // Prevent flash of wrong theme
  if (!mounted) return <>{children}</>

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
