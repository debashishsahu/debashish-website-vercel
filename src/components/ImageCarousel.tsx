'use client'

import { useState, useCallback, useRef } from 'react'
import Image from 'next/image'

interface CarouselImage {
  src: string
  alt: string
  caption?: string
}

interface ImageCarouselProps {
  images: CarouselImage[]
}

const DURATION = 520

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [entering, setEntering]   = useState(0)
  const [exiting, setExiting]     = useState<number | null>(null)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const [animKey, setAnimKey]     = useState(0)
  const [busy, setBusy]           = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = useCallback((index: number, dir: 'next' | 'prev') => {
    if (busy || index === entering) return
    if (timerRef.current) clearTimeout(timerRef.current)
    setExiting(entering)
    setDirection(dir)
    setEntering(index)
    setAnimKey(k => k + 1)
    setBusy(true)
    timerRef.current = setTimeout(() => {
      setExiting(null)
      setBusy(false)
    }, DURATION)
  }, [busy, entering])

  const prev = useCallback(() =>
    goTo(entering === 0 ? images.length - 1 : entering - 1, 'prev'),
    [entering, images.length, goTo])

  const next = useCallback(() =>
    goTo(entering === images.length - 1 ? 0 : entering + 1, 'next'),
    [entering, images.length, goTo])

  const img = images[entering]

  return (
    <div className="my-8 select-none">
      <style>{`
        @keyframes cs-push-in-right  { from { transform:translateX(100%);  } to { transform:translateX(0); } }
        @keyframes cs-push-in-left   { from { transform:translateX(-100%); } to { transform:translateX(0); } }
        @keyframes cs-push-out-left  { from { transform:translateX(0);     } to { transform:translateX(-100%); } }
        @keyframes cs-push-out-right { from { transform:translateX(0);     } to { transform:translateX(100%);  } }
      `}</style>

      <div className="relative rounded-xl overflow-hidden bg-[#F5F4F0] group">

        {/* ── Exiting image — absolute, pushed out in direction ── */}
        {exiting !== null && (
          <div
            key={`exit-${exiting}-${animKey}`}
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              animation: `${direction === 'next' ? 'cs-push-out-left' : 'cs-push-out-right'} ${DURATION}ms cubic-bezier(0.25, 0.1, 0.25, 1) forwards`,
            }}
          >
            <Image
              src={images[exiting].src}
              alt={images[exiting].alt ?? ''}
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 800px, 100vw"
            />
          </div>
        )}

        {/* ── Entering image — natural sizing, pushed in from direction ── */}
        <div
          key={`enter-${entering}-${animKey}`}
          style={{
            animation: busy
              ? `${direction === 'next' ? 'cs-push-in-right' : 'cs-push-in-left'} ${DURATION}ms cubic-bezier(0.25, 0.1, 0.25, 1) forwards`
              : undefined,
          }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={0}
            height={0}
            sizes="(min-width: 1280px) 800px, 100vw"
            style={{ width: '100%', height: 'auto', display: 'block' }}
            priority={entering === 0}
          />
        </div>

        {/* Prev button */}
        <button
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border border-linen flex items-center justify-center text-amber opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 11L5 7l4-4" />
          </svg>
        </button>

        {/* Next button */}
        <button
          onClick={next}
          aria-label="Next image"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border border-linen flex items-center justify-center text-amber opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 3l4 4-4 4" />
          </svg>
        </button>

        {/* Counter badge */}
        <div className="absolute top-3 right-3 z-20 bg-ink/60 backdrop-blur-sm rounded-full px-2.5 py-1">
          <span className="text-12 text-white font-medium">
            {entering + 1} / {images.length}
          </span>
        </div>
      </div>

      {/* Caption + dots */}
      <div className="flex items-center justify-between mt-3 px-0.5">
        <p className="text-12 text-mist leading-[1.5] flex-1 pr-4">
          {img.caption || ''}
        </p>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > entering ? 'next' : 'prev')}
              aria-label={`Go to image ${i + 1}`}
              className={`rounded-full transition-all duration-200 ${
                i === entering
                  ? 'w-4 h-1.5 bg-amber'
                  : 'w-1.5 h-1.5 bg-linen hover:bg-amber/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
