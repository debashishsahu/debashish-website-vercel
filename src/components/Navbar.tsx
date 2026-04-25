'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <motion.nav
      aria-label="Main navigation"
      className="sticky top-0 z-50 border-b border-linen bg-canvas"
      animate={{
        height: scrolled ? 58 : 64,
        backdropFilter: scrolled ? 'blur(8px)' : 'blur(0px)',
        backgroundColor: scrolled ? 'rgba(247,245,242,0.88)' : 'rgba(247,245,242,1)',
      }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-content mx-auto px-page-sm md:px-page-md lg:px-page h-full flex items-center justify-between">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <Link
            href="/"
            className="font-display text-18 font-medium text-ink tracking-snug hover:text-amber transition-colors"
          >
            Debashish Sahu
          </Link>
        </motion.div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== '/' && pathname.startsWith(link.href))
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-14 transition-colors relative pb-0.5 ${
                  active ? 'text-ink font-medium' : 'text-slate hover:text-ink'
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
          <motion.a
            href="/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-12 font-medium uppercase tracking-label text-amber border border-amber px-4 py-2 rounded"
            whileHover={{ backgroundColor: '#D4882A', color: '#1A2530' }}
            transition={{ duration: 0.18 }}
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <motion.span
            className="block h-0.5 w-6 bg-ink rounded-full origin-center"
            animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.22 }}
          />
          <motion.span
            className="block h-0.5 w-4 bg-ink rounded-full"
            animate={mobileOpen ? { opacity: 0, x: -4 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.18 }}
          />
          <motion.span
            className="block h-0.5 w-6 bg-ink rounded-full origin-center"
            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.22 }}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-canvas border-b border-linen z-40 shadow-sm overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {navLinks.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== '/' && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between border-b border-linen py-4 px-5 text-16 transition-colors ${
                    active ? 'text-ink font-medium' : 'text-slate'
                  }`}
                >
                  {link.label}
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0" />}
                </Link>
              )
            })}
            <div className="px-5 my-4">
              <a
                href="/resume/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center text-amber border border-amber py-3 text-14 font-medium uppercase tracking-label rounded hover:bg-amber hover:text-ink transition-colors"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
