'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

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
    <nav
      aria-label="Main navigation"
      className={`sticky top-0 z-50 border-b border-linen transition-all duration-200 ${
        scrolled ? 'h-[58px] bg-canvas/90 backdrop-blur-sm' : 'h-16 bg-canvas'
      }`}
    >
      <div className="max-w-content mx-auto px-page-sm md:px-page-md lg:px-page h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-18 font-medium text-ink tracking-snug hover:text-amber transition-colors"
        >
          Debashish Sahu
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-14 transition-colors relative pb-0.5 ${
                  active
                    ? 'text-ink font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber after:rounded-full'
                    : 'text-slate hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <a
            href="/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-12 font-medium uppercase tracking-label text-amber border border-amber px-4 py-2 rounded hover:bg-amber hover:text-ink transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="block h-0.5 w-6 bg-ink rounded-full transition-all" />
          <span className="block h-0.5 w-4 bg-ink rounded-full transition-all" />
          <span className="block h-0.5 w-6 bg-ink rounded-full transition-all" />
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-canvas border-b border-linen z-40 shadow-sm">
          {navLinks.map((link) => {
            const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between border-b border-linen py-4 px-5 text-16 transition-colors ${
                  active ? 'text-ink font-medium' : 'text-slate'
                }`}
              >
                {link.label}
                {active && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0" />
                )}
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
        </div>
      )}
    </nav>
  )
}
