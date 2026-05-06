import { type Variants } from 'framer-motion'

// ── Fade up — general scroll reveal
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

// ── Fade in — images and full-width elements
export const fadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

// ── Stagger container — general text/card lists
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0 },
  },
}

// ── Stagger grid — slightly tighter for card grids
export const staggerGrid: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
}

// ── Slide in from left — timeline entries
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
}

// ── Accent bar grow — SectionHeader vertical amber bar
export const barGrow: Variants = {
  hidden: { scaleY: 0, originY: '0%' },
  visible: {
    scaleY: 1,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
}

// ── Spring scale pop — dots, icons
export const dotPop: Variants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { type: 'spring', stiffness: 500, damping: 20 },
  },
}

// ── Shared viewport settings — fire once, -60px margin
export const viewport = { once: true, margin: '-60px' } as const
