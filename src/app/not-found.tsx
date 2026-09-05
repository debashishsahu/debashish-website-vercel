'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
]

export default function NotFound() {
  const reduce = useReducedMotion()
  const rise = (y: number, delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
        }
  return (
    <>
      <Navbar />
      <main className="px-page-sm md:px-page-md lg:px-page">
        <div className="max-w-content mx-auto min-h-[52vh] flex flex-col justify-center py-20">

          {/* 404 number */}
          <motion.div
            {...rise(24, 0)}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-[1.5px] bg-amber flex-shrink-0" />
            <span className="text-12 font-medium uppercase tracking-label text-amber-text">Error 404</span>
          </motion.div>

          <motion.h1
            {...rise(28, 0.08)}
            className="font-display text-[clamp(2.25rem,9vw,4.5rem)] font-medium text-ink tracking-tight leading-[1.02] mb-5"
          >
            Page not found.
          </motion.h1>

          <motion.p
            {...rise(20, 0.16)}
            className="text-18 text-slate leading-[1.65] max-w-[520px] mb-10"
          >
            Looks like this page took a wrong turn. It may have been moved,
            renamed, or it never existed. Let&apos;s get you back on track.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...rise(16, 0.24)}
            className="flex flex-wrap gap-3 mb-14"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-ink text-canvas text-13 font-medium px-6 py-[10px] rounded-md hover:bg-slate transition-colors duration-200"
              >
                Go home
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5" /></svg>
              </Link>
            </motion.div>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-13 font-medium text-amber-text underline decoration-amber/40 underline-offset-4 hover:decoration-amber transition-colors duration-200 py-[10px]"
            >
              View my work
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0 }}
            className="h-px bg-linen mb-8 max-w-[480px]"
          />

          {/* Quick nav */}
          <motion.div
            {...rise(0, 0.38)}
            className="flex flex-wrap gap-x-6 gap-y-2"
          >
            <span className="text-12 text-mist uppercase tracking-label">Explore</span>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-13 font-medium text-slate hover:text-amber-text transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>

        </div>
      </main>
      <Footer />
    </>
  )
}
