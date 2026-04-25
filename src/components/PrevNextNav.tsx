'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface NavItem {
  title: string
  descriptor?: string
  href: string
}

interface PrevNextNavProps {
  prev?: NavItem
  next?: NavItem
}

function GridIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="9" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="1" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export default function PrevNextNav({ prev, next }: PrevNextNavProps) {
  return (
    <div className="border-t border-linen">
      <div className="max-w-content mx-auto px-page-sm md:px-page-md lg:px-page">
        <div className="flex flex-col md:flex-row">
          {/* Prev */}
          <div className="flex-1 border-b md:border-b-0 md:border-r border-linen">
            {prev ? (
              <Link href={prev.href}>
                <motion.div
                  className="flex flex-col py-7 px-4 border-l-[3px] border-transparent cursor-pointer"
                  whileHover={{ backgroundColor: '#F0EDE8', borderLeftColor: '#D4882A' }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-12 font-medium uppercase tracking-label text-mist mb-1.5">
                    ← Previous project
                  </span>
                  <span className="font-display text-18 md:text-22 font-medium text-ink tracking-snug mt-1.5">
                    {prev.title}
                  </span>
                  {prev.descriptor && (
                    <span className="text-13 text-slate mt-1">{prev.descriptor}</span>
                  )}
                </motion.div>
              </Link>
            ) : (
              <div className="flex items-center justify-center py-7 text-mist">—</div>
            )}
          </div>

          {/* All work */}
          <div className="flex-shrink-0 flex items-center justify-center py-7 px-8 border-b md:border-b-0 md:border-r border-linen">
            <Link href="/work" aria-label="All work" className="flex flex-col items-center gap-2">
              <motion.div
                className="w-9 h-9 rounded-full border border-amber flex items-center justify-center text-amber"
                whileHover={{ backgroundColor: '#D4882A', color: '#1A2530', scale: 1.08 }}
                transition={{ duration: 0.2 }}
              >
                <GridIcon />
              </motion.div>
              <span className="text-11 font-medium uppercase tracking-label text-amber">
                All work
              </span>
            </Link>
          </div>

          {/* Next */}
          <div className="flex-1">
            {next ? (
              <Link href={next.href}>
                <motion.div
                  className="flex flex-col items-end py-7 px-4 border-r-[3px] border-transparent cursor-pointer"
                  whileHover={{ backgroundColor: '#F0EDE8', borderRightColor: '#D4882A' }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-12 font-medium uppercase tracking-label text-mist mb-1.5">
                    Next project →
                  </span>
                  <span className="font-display text-18 md:text-22 font-medium text-ink tracking-snug mt-1.5 text-right">
                    {next.title}
                  </span>
                  {next.descriptor && (
                    <span className="text-13 text-slate mt-1 text-right">{next.descriptor}</span>
                  )}
                </motion.div>
              </Link>
            ) : (
              <div className="flex items-center justify-center py-7 text-mist">—</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
