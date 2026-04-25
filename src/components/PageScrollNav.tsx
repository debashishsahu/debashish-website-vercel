'use client'

import { useEffect, useState } from 'react'

interface Section {
  id: string
  label: string
}

export default function PageScrollNav({ sections }: { sections: Section[] }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const offsets = sections.map(s => {
        const el = document.getElementById(s.id)
        return el ? el.getBoundingClientRect().top + window.scrollY : Infinity
      })
      const scrollMid = window.scrollY + window.innerHeight * 0.35
      let idx = 0
      for (let i = 0; i < offsets.length; i++) {
        if (offsets[i] <= scrollMid) idx = i
      }
      setActiveIndex(idx)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [sections])

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end select-none">
      {sections.map((section, i) => {
        const isActive = i === activeIndex
        const isPast = i < activeIndex

        return (
          <div key={section.id} className="flex flex-col items-end">
            {/* Connector line (above each dot except first) */}
            {i > 0 && (
              <div
                className={`w-px h-5 mr-[4px] transition-colors duration-400 ${
                  isPast ? 'bg-amber' : 'bg-linen'
                }`}
              />
            )}

            {/* Dot + label row */}
            <a
              href={`#${section.id}`}
              className="flex items-center gap-2.5 group"
              onClick={e => {
                e.preventDefault()
                document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            >
              <span
                className={`text-[10px] font-medium uppercase tracking-widest transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'opacity-100 text-ink'
                    : 'opacity-0 group-hover:opacity-50 text-slate'
                }`}
              >
                {section.label}
              </span>
              <div
                className={`rounded-full border-2 flex-shrink-0 transition-all duration-200 ${
                  isActive
                    ? 'w-2.5 h-2.5 bg-amber border-amber'
                    : isPast
                    ? 'w-2 h-2 bg-amber/40 border-amber/40 group-hover:border-amber'
                    : 'w-2 h-2 bg-transparent border-linen group-hover:border-amber/60'
                }`}
              />
            </a>
          </div>
        )
      })}
    </nav>
  )
}
