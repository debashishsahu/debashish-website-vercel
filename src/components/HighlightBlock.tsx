'use client'

import { motion } from 'framer-motion'
import { viewport } from '@/lib/animations'

interface HighlightBlockProps {
  variant: 'quote' | 'callout'
  text: string
  attribution?: string
  label?: string
}

export default function HighlightBlock({ variant, text, attribution, label }: HighlightBlockProps) {
  if (variant === 'quote') {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="flex gap-0 my-8"
      >
        <motion.div
          variants={{
            hidden: { scaleY: 0, originY: '0%' },
            visible: { scaleY: 1, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
          }}
          className="w-[3px] bg-amber rounded-sm flex-shrink-0"
        />
        <div className="pl-6">
          <motion.blockquote
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="font-display text-22 italic text-ink leading-[1.5]"
          >
            &ldquo;{text}&rdquo;
          </motion.blockquote>
          {attribution && (
            <motion.cite
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.4 } },
              }}
              className="block text-12 font-medium text-mist mt-3 not-italic"
            >
              — {attribution}
            </motion.cite>
          )}
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="my-8 rounded-lg overflow-hidden border border-linen"
    >
      <div className="bg-ink py-2 px-4 flex items-center gap-2.5">
        <span className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0" />
        <span className="text-12 font-medium text-mist uppercase tracking-label">
          {label || 'Key Insight'}
        </span>
      </div>
      <div className="bg-canvas py-6 px-7">
        <p className="font-display text-20 italic text-ink leading-[1.55]">
          {text}
        </p>
      </div>
    </motion.div>
  )
}
