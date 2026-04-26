'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'

interface ImageItem {
  src: string
  alt?: string
  caption?: string
}

interface ImageGroupProps {
  variant: 'sequence' | 'beforeafter' | 'workshop'
  images?: ImageItem[]
  before?: ImageItem
  after?: ImageItem
  label?: string
  caption?: string
  fit?: 'cover' | 'contain'
  tileRatio?: string
}

const LB_DURATION  = 400
const NAV_DURATION = 520

// ── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({
  images,
  startIndex,
  originRect,
  onClose,
}: {
  images: ImageItem[]
  startIndex: number
  originRect: DOMRect | null
  onClose: () => void
}) {
  // Lightbox open/close phase
  const [phase, setPhase] = useState<'entering' | 'idle' | 'closing'>('entering')

  // Image navigation state (push effect)
  const [navEntering, setNavEntering] = useState(startIndex)
  const [navExiting,  setNavExiting]  = useState<number | null>(null)
  const [navDir,      setNavDir]      = useState<'next' | 'prev'>('next')
  const [navKey,      setNavKey]      = useState(0)
  const [navBusy,     setNavBusy]     = useState(false)
  const navTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Trigger lightbox enter animation
  useEffect(() => {
    let id1: number, id2: number
    id1 = requestAnimationFrame(() => {
      id2 = requestAnimationFrame(() => setPhase('idle'))
    })
    return () => { cancelAnimationFrame(id1); cancelAnimationFrame(id2) }
  }, [])

  const handleClose = useCallback(() => {
    if (phase === 'closing') return
    setPhase('closing')
    setTimeout(onClose, LB_DURATION)
  }, [phase, onClose])

  const goTo = useCallback((index: number, dir: 'next' | 'prev') => {
    if (navBusy || index === navEntering) return
    if (navTimer.current) clearTimeout(navTimer.current)
    setNavExiting(navEntering)
    setNavDir(dir)
    setNavEntering(index)
    setNavKey(k => k + 1)
    setNavBusy(true)
    navTimer.current = setTimeout(() => {
      setNavExiting(null)
      setNavBusy(false)
    }, NAV_DURATION)
  }, [navBusy, navEntering])

  const prev = useCallback(() =>
    goTo(navEntering === 0 ? images.length - 1 : navEntering - 1, 'prev'),
    [navEntering, images.length, goTo])

  const next = useCallback(() =>
    goTo(navEntering === images.length - 1 ? 0 : navEntering + 1, 'next'),
    [navEntering, images.length, goTo])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape')     handleClose()
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [handleClose, prev, next])

  useEffect(() => {
    const orig = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = orig }
  }, [])

  // ── Clip-path: tile rect → full viewport → tile rect ──
  const clipPath = (() => {
    if (!originRect || phase === 'idle') return 'inset(0px 0px 0px 0px round 0px)'
    const vW = window.innerWidth
    const vH = window.innerHeight
    const t = Math.round(originRect.top)
    const r = Math.round(vW - originRect.right)
    const b = Math.round(vH - originRect.bottom)
    const l = Math.round(originRect.left)
    return `inset(${t}px ${r}px ${b}px ${l}px round 6px)`
  })()

  const isOpen    = phase === 'idle'
  const easing    = `cubic-bezier(0.4, 0, 0.2, 1)`
  const transition = `clip-path ${LB_DURATION}ms ${easing}`

  const enterImg = images[navEntering]
  const exitImg  = navExiting !== null ? images[navExiting] : null

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-ink/95 backdrop-blur-sm"
      style={{ clipPath, transition }}
      onClick={handleClose}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-6 py-4 flex-shrink-0"
        style={{
          opacity: isOpen ? 1 : 0,
          transition: `opacity ${LB_DURATION}ms ease`,
        }}
        onClick={e => e.stopPropagation()}
      >
        <span className="text-12 font-medium text-white/50 tracking-wide select-none">
          {navEntering + 1} / {images.length}
        </span>
        <button
          onClick={handleClose}
          aria-label="Close lightbox"
          className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M2 2l10 10M12 2L2 12" />
          </svg>
        </button>
      </div>

      {/* Image + arrows */}
      <div
        className="flex-1 flex items-center justify-center relative min-h-0 px-16 overflow-hidden"
        style={{
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'scale(1)' : 'scale(0.94)',
          transition: `opacity ${LB_DURATION}ms ease, transform ${LB_DURATION}ms ${easing}`,
        }}
        onClick={e => e.stopPropagation()}
      >
        <style>{`
          @keyframes lb-push-in-right  { from { transform:translateX(100%);  } to { transform:translateX(0); } }
          @keyframes lb-push-in-left   { from { transform:translateX(-100%); } to { transform:translateX(0); } }
          @keyframes lb-push-out-left  { from { transform:translateX(0);     } to { transform:translateX(-100%); } }
          @keyframes lb-push-out-right { from { transform:translateX(0);     } to { transform:translateX(100%);  } }
        `}</style>

        <button
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-4 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors flex-shrink-0"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 11L5 7l4-4" />
          </svg>
        </button>

        {/* Exiting image — pushed out */}
        {exitImg && (
          <div
            key={`lb-exit-${navExiting}-${navKey}`}
            className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center"
            style={{
              animation: `${navDir === 'next' ? 'lb-push-out-left' : 'lb-push-out-right'} ${NAV_DURATION}ms cubic-bezier(0.25, 0.1, 0.25, 1) forwards`,
            }}
          >
            <Image src={exitImg.src} alt={exitImg.alt ?? ''} fill className="object-contain" sizes="90vw" />
          </div>
        )}

        {/* Entering image — pushed in */}
        <div
          key={`lb-enter-${navEntering}-${navKey}`}
          className="absolute inset-0 flex items-center justify-center"
          style={{
            animation: navBusy
              ? `${navDir === 'next' ? 'lb-push-in-right' : 'lb-push-in-left'} ${NAV_DURATION}ms cubic-bezier(0.25, 0.1, 0.25, 1) forwards`
              : undefined,
          }}
        >
          <Image src={enterImg.src} alt={enterImg.alt ?? ''} fill className="object-contain" sizes="90vw" priority />
        </div>

        <button
          onClick={next}
          aria-label="Next image"
          className="absolute right-4 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors flex-shrink-0"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 3l4 4-4 4" />
          </svg>
        </button>
      </div>

      {/* Caption + dots */}
      <div
        className="flex-shrink-0 px-6 py-5 flex flex-col items-center gap-3"
        style={{
          opacity: isOpen ? 1 : 0,
          transition: `opacity ${LB_DURATION}ms ease`,
        }}
        onClick={e => e.stopPropagation()}
      >
        {enterImg.caption && (
          <p className="text-13 text-white/60 text-center leading-[1.5] max-w-[600px]">
            {enterImg.caption}
          </p>
        )}
        <div className="flex items-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > navEntering ? 'next' : 'prev')}
              aria-label={`Go to image ${i + 1}`}
              className={`rounded-full transition-all duration-200 ${
                i === navEntering
                  ? 'w-4 h-1.5 bg-amber'
                  : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────
export default function ImageGroup({ variant, images = [], before, after, label, caption, fit = 'cover', tileRatio }: ImageGroupProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [originRect, setOriginRect]       = useState<DOMRect | null>(null)

  const handleOpen = useCallback((index: number, e: React.MouseEvent<HTMLButtonElement>) => {
    setOriginRect(e.currentTarget.getBoundingClientRect())
    setLightboxIndex(index)
  }, [])

  if (variant === 'sequence') {
    return (
      <div className="flex flex-col gap-4 my-8">
        {images.map((img, i) => (
          <div key={i}>
            <div className="rounded-md overflow-hidden bg-[#F5F4F0]">
              <Image
                src={img.src}
                alt={img.alt ?? img.caption ?? ''}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                loading="lazy"
              />
            </div>
            {img.caption && (
              <p className="text-12 text-mist mt-2 pl-1">{img.caption}</p>
            )}
            {i < images.length - 1 && (
              <div className="flex justify-center py-3 text-amber text-20 font-medium">↓</div>
            )}
          </div>
        ))}
      </div>
    )
  }

  if (variant === 'beforeafter') {
    const b = before ?? images[0]
    const a = after ?? images[1]
    if (!b || !a) return null
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-8">
        <div className="rounded-md overflow-hidden">
          <div className="bg-slate/80 py-2 px-4">
            <p className="text-11 font-medium text-[#C0CCCC] uppercase tracking-label">Before</p>
          </div>
          <div className="bg-linen">
            <Image
              src={b.src}
              alt={b.alt ?? b.caption ?? 'Before'}
              width={0}
              height={0}
              sizes="(min-width: 768px) 50vw, 100vw"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              loading="lazy"
            />
          </div>
          {b.caption && <p className="text-12 text-mist mt-2 px-1 pb-1">{b.caption}</p>}
        </div>
        <div className="rounded-md overflow-hidden">
          <div className="bg-amber py-2 px-4">
            <p className="text-11 font-medium text-ink uppercase tracking-label">After</p>
          </div>
          <div className="bg-linen">
            <Image
              src={a.src}
              alt={a.alt ?? a.caption ?? 'After'}
              width={0}
              height={0}
              sizes="(min-width: 768px) 50vw, 100vw"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              loading="lazy"
            />
          </div>
          {a.caption && <p className="text-12 text-mist mt-2 px-1 pb-1">{a.caption}</p>}
        </div>
      </div>
    )
  }

  if (variant === 'workshop') {
    if (!images.length) return null
    return (
      <>
        <div className="my-8">
          <div className="grid grid-cols-3 gap-2">
            {images.map((img, i) => (
              <button
                key={i}
                className="relative rounded-md overflow-hidden bg-linen group cursor-zoom-in"
                style={{ aspectRatio: tileRatio ?? '1 / 1' }}
                onClick={e => handleOpen(i, e)}
                aria-label={`Open image ${i + 1} in lightbox`}
              >
                <Image
                  src={img.src}
                  alt={img.alt ?? img.caption ?? ''}
                  fill
                  className={`${fit === 'contain' ? 'object-contain' : 'object-cover'} transition-transform duration-300 group-hover:scale-[1.03]`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ink">
                      <path d="M8 2h4v4M6 8l6-6M2 6v6h6" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {(label || caption) && (
            <figcaption className="flex items-start gap-2 mt-3">
              <div className="w-[3px] bg-amber rounded-sm flex-shrink-0 mt-[3px] self-stretch" />
              <p className="text-13 text-slate leading-[1.5]">{caption ?? label}</p>
            </figcaption>
          )}
        </div>

        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            startIndex={lightboxIndex}
            originRect={originRect}
            onClose={() => { setLightboxIndex(null); setOriginRect(null) }}
          />
        )}
      </>
    )
  }

  return null
}
