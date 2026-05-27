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
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end select-none">
      {sections.map((section, i) => {
        const isActive = i === activeIndex
        const isPast = i < activeIndex

        return (
          <div key={section.id} className="flex flex-col items-end">
            {/* Connector line (above each dot except first) */}
            {i > 0 && (
              <div
                className={`w-px h-5 mr-[4px] transition-colors duration-300 ${
                  isPast ? 'bg-amber' : 'bg-linen'
                }`}
              />
            )}

            {/* Dot + label row */}
            <a
              href={`#${section.id}`}
              className="flex items-center gap-2.5 group py-0.5"
              onClick={e => {
                e.preventDefault()
                document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            >
              {/* Label */}
              <span
                className={`text-11 font-semibold uppercase tracking-label transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'opacity-100 text-ink translate-x-0'
                    : 'opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 text-slate'
                }`}
              >
                {section.label}
              </span>

              {/* Dot */}
              <div
                className={`rounded-full flex-shrink-0 transition-all duration-200 ${
                  isActive
                    ? 'w-[10px] h-[10px] bg-amber ring-2 ring-amber/30'
                    : isPast
                    ? 'w-2 h-2 bg-amber/50 group-hover:w-[9px] group-hover:h-[9px] group-hover:bg-amber group-hover:ring-2 group-hover:ring-amber/30'
                    : 'w-2 h-2 bg-linen group-hover:w-[9px] group-hover:h-[9px] group-hover:bg-amber/60 group-hover:ring-2 group-hover:ring-amber/20'
                }`}
              />
            </a>
          </div>
        )
      })}
    </nav>
  )
}
