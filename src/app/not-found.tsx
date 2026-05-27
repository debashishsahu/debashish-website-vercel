'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
]

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="px-page-sm md:px-page-md lg:px-page">
        <div className="max-w-content mx-auto min-h-[70vh] flex flex-col justify-center py-20">

          {/* 404 number */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-[1.5px] bg-amber flex-shrink-0" />
            <span className="text-12 font-medium uppercase tracking-label text-amber">Error 404</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[56px] md:text-[72px] font-medium text-ink tracking-tight leading-[1.0] mb-5"
          >
            Page not found.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="text-18 text-slate leading-[1.65] max-w-[520px] mb-10"
          >
            Looks like this page took a wrong turn. It may have been moved,
            renamed, or it never existed. Let&apos;s get you back on track.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
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
              className="inline-flex items-center gap-1.5 text-13 font-medium text-amber hover:text-amber/70 transition-colors duration-200 py-[10px]"
            >
              View my work
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0 }}
            className="h-px bg-linen mb-8 max-w-[480px]"
          />

          {/* Quick nav */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.38 }}
            className="flex flex-wrap gap-x-6 gap-y-2"
          >
            <span className="text-12 text-mist uppercase tracking-label">Explore</span>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-13 font-medium text-slate hover:text-amber transition-colors duration-150"
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
