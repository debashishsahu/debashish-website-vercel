'use client'

import { motion } from 'framer-motion'
import { viewport } from '@/lib/animations'

interface TLDRHighlight {
  text: string
}

interface TLDRBlockProps {
  summary: string
  highlights: TLDRHighlight[]
}

export default function TLDRBlock({ summary, highlights }: TLDRBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="px-page-sm md:px-page-md lg:px-page py-8 bg-linen/30 border-y border-linen"
    >
      <div className="max-w-content mx-auto flex flex-col md:flex-row gap-6 md:gap-10 md:items-start">
        {/* Label + summary */}
        <div className="flex gap-4 md:max-w-[480px] flex-shrink-0">
          <div className="flex flex-col items-center gap-1 pt-0.5 flex-shrink-0">
            <span className="text-10 font-bold uppercase tracking-label text-amber whitespace-nowrap">TL;DR</span>
            <div className="w-px flex-1 bg-amber/30 mt-1" />
          </div>
          <p className="text-16 text-ink leading-[1.7] font-medium">
            {summary}
          </p>
        </div>

        {/* Highlights */}
        <div className="flex flex-col gap-2.5 md:border-l md:border-linen md:pl-10 flex-1">
          {highlights.map((h, i) => (
            <div key={i} className="flex gap-2.5 items-start">
              <span className="mt-[7px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber" />
              <p className="text-14 text-slate leading-[1.65]">{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
