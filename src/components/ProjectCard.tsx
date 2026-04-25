'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { tagColors } from '@/data/projects'

interface ProjectCardProps {
  variant: 'featured' | 'standard'
  image?: string
  title: string
  description: string
  tags: string[]
  meta: string
  href: string
}

const tagGradients: Record<string, string> = {
  Enterprise:      'from-[#1A2530] to-[#2E3F50]',
  'UX Design':     'from-[#2C3E2D] to-[#3D5440]',
  IoT:             'from-[#3B2A1A] to-[#5C4228]',
  B2C:             'from-[#1E3045] to-[#2A4560]',
  Travel:          'from-[#1A3040] to-[#1E4D60]',
  'NID Project':   'from-[#2D2820] to-[#453D30]',
  Interaction:     'from-[#28253A] to-[#3D3858]',
  Mobile:          'from-[#1F2E3A] to-[#2A4050]',
  'Legacy Systems':'from-[#2E2820] to-[#4A3C2A]',
  Retail:          'from-[#2A1F1A] to-[#402E28]',
  Kiosk:           'from-[#251E2A] to-[#3A2E42]',
  Wellbeing:       'from-[#1A2E28] to-[#264438]',
  Transit:         'from-[#1A2535] to-[#243650]',
  'Web App':       'from-[#22201A] to-[#363025]',
  NID:             'from-[#2A2020] to-[#403030]',
  Physical:        'from-[#2A1E10] to-[#453020]',
  Installation:    'from-[#1A1E2A] to-[#282E40]',
  Creative:        'from-[#251A1A] to-[#3D2828]',
  Research:        'from-[#1A2030] to-[#263050]',
  Academic:        'from-[#201A28] to-[#302840]',
  Gesture:         'from-[#1A2520] to-[#283A30]',
  Sound:           'from-[#201A25] to-[#302838]',
}

function CardPlaceholder({ tags, size }: { tags: string[]; size: 'featured' | 'standard' }) {
  const firstTag = tags[0] || 'default'
  const gradient = tagGradients[firstTag] || 'from-[#1A2530] to-[#2E3F50]'
  const patternId = `grid-${firstTag.replace(/[\s']/g, '-')}`

  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}>
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-amber/30" />
      <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <pattern id={patternId} width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#8FA0AE" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
      <span className={`font-medium uppercase tracking-label text-amber/40 relative z-10 ${size === 'standard' ? 'text-[10px]' : 'text-11'}`}>
        {firstTag}
      </span>
    </div>
  )
}

export default function ProjectCard({ variant, image, title, description, tags, meta, href }: ProjectCardProps) {
  if (variant === 'featured') {
    return (
      <Link href={href} className="group block h-full">
        <motion.div
          className="flex flex-col border border-linen rounded-xl overflow-hidden bg-white/40 h-full"
          whileHover={{ borderColor: '#D4882A', y: -4 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative h-[180px] w-full overflow-hidden">
            {image ? (
              <motion.div className="absolute inset-0" whileHover={{ scale: 1.04 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
                <Image src={image} alt={title} fill className="object-cover" loading="lazy" />
              </motion.div>
            ) : (
              <CardPlaceholder tags={tags} size="featured" />
            )}
          </div>
          <div className="px-[22px] py-5 flex flex-col flex-1">
            <div className="flex flex-wrap gap-1.5 mb-2">
              {tags.map((tag) => {
                const style = tagColors[tag] || { bg: 'bg-[#F1EFE8]', text: 'text-[#5F5E5A]' }
                return <span key={tag} className={`text-12 font-medium px-2.5 py-0.5 rounded-full ${style.bg} ${style.text}`}>{tag}</span>
              })}
            </div>
            <h3 className="font-display text-20 font-medium text-ink mt-2 mb-2 tracking-snug">{title}</h3>
            <p className="text-13 text-slate leading-[1.6] mb-3.5 flex-1">{description}</p>
            <div className="flex items-center justify-between">
              <span className="text-12 text-mist">{meta}</span>
              <motion.span className="text-12 font-medium text-amber" whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                View case study →
              </motion.span>
            </div>
          </div>
        </motion.div>
      </Link>
    )
  }

  return (
    <Link href={href} className="group block h-full">
      <motion.div
        className="flex flex-col border border-linen rounded-xl overflow-hidden bg-white/40 h-full"
        whileHover={{ borderColor: '#D4882A', y: -3 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative h-[110px] w-full overflow-hidden">
          {image ? (
            <motion.div className="absolute inset-0" whileHover={{ scale: 1.04 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
              <Image src={image} alt={title} fill className="object-cover" loading="lazy" />
            </motion.div>
          ) : (
            <CardPlaceholder tags={tags} size="standard" />
          )}
        </div>
        <div className="px-4 py-3.5 flex flex-col flex-1">
          <h3 className="font-display text-16 font-medium text-ink mb-1.5 tracking-snug">{title}</h3>
          <p className="text-12 text-slate leading-[1.5] mb-2.5 flex-1">{description}</p>
          <p className="text-11 text-mist">{meta}</p>
        </div>
      </motion.div>
    </Link>
  )
}
