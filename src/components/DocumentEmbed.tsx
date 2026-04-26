'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'

declare global {
  interface Window { pdfjsLib: any }
}

const PDF_JS_URL     = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js'
const PDF_WORKER_URL = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'

function PdfViewer({ url, ready }: { url: string; ready: boolean }) {
  const canvasRef   = useRef<HTMLCanvasElement>(null)
  const pdfRef      = useRef<any>(null)
  const renderTask  = useRef<any>(null)
  const [numPages, setNumPages]     = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading]       = useState(true)

  // Load PDF document once
  useEffect(() => {
    if (!ready) return
    const lib = window.pdfjsLib
    lib.GlobalWorkerOptions.workerSrc = PDF_WORKER_URL

    lib.getDocument(url).promise.then((pdf: any) => {
      pdfRef.current = pdf
      setNumPages(pdf.numPages)
      setCurrentPage(1)
    }).catch(() => setLoading(false))
  }, [url, ready])

  // Render current page whenever it changes
  useEffect(() => {
    if (!pdfRef.current || !canvasRef.current || numPages === 0) return

    setLoading(true)
    // Cancel any in-progress render
    if (renderTask.current) { renderTask.current.cancel(); renderTask.current = null }

    pdfRef.current.getPage(currentPage).then((page: any) => {
      const canvas    = canvasRef.current!
      const container = canvas.parentElement!
      const base      = page.getViewport({ scale: 1 })
      const scale     = (container.clientWidth || 960) / base.width
      const viewport  = page.getViewport({ scale })

      canvas.width  = viewport.width
      canvas.height = viewport.height

      const task = page.render({ canvasContext: canvas.getContext('2d')!, viewport })
      renderTask.current = task
      task.promise.then(() => {
        renderTask.current = null
        setLoading(false)
      }).catch(() => {})
    })
  }, [currentPage, numPages])

  const prev = () => setCurrentPage(p => Math.max(1, p - 1))
  const next = () => setCurrentPage(p => Math.min(numPages, p + 1))

  return (
    <div className="rounded-lg overflow-hidden border border-linen bg-[#F5F4F0]">
      {/* Canvas — PDF.js writes here */}
      <div className="relative bg-[#F5F4F0]">
        <canvas
          ref={canvasRef}
          style={{ width: '100%', display: 'block' }}
        />
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#F5F4F0]" style={{ minHeight: '480px' }}>
            <p className="text-12 text-mist tracking-wide">Loading document…</p>
          </div>
        )}
      </div>

      {/* Navigation bar */}
      {numPages > 0 && (
        <div className="flex justify-center py-4 border-t border-linen bg-white">
          <div className="inline-flex items-center gap-0 rounded-full border border-linen overflow-hidden">
            <button
              onClick={prev}
              disabled={currentPage <= 1}
              className="px-2 py-1 text-amber hover:bg-linen/60 disabled:text-linen disabled:cursor-not-allowed transition-colors border-r border-linen"
              aria-label="Previous page"
            >
              <svg width="10" height="10" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 11L5 7l4-4" />
              </svg>
            </button>
            <span className="px-2.5 text-12 text-slate whitespace-nowrap select-none">
              Page <span className="font-medium text-ink">{currentPage}</span> of {numPages}
            </span>
            <button
              onClick={next}
              disabled={currentPage >= numPages}
              className="px-2 py-1 text-amber hover:bg-linen/60 disabled:text-linen disabled:cursor-not-allowed transition-colors border-l border-linen"
              aria-label="Next page"
            >
              <svg width="10" height="10" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 3l4 4-4 4" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

interface DocumentItem {
  src: string
  title?: string
  body?: string
}

export default function DocumentEmbed({ documents }: { documents: DocumentItem[] }) {
  const [ready, setReady] = useState(false)

  return (
    <>
      <Script src={PDF_JS_URL} onLoad={() => setReady(true)} />
      <div className="flex flex-col gap-16 my-8">
        {documents.map((doc, i) => (
          <div key={i} className="flex flex-col gap-3">
            {(doc.title || doc.body) && (
              <div className="px-0.5">
                {doc.title && (
                  <p className="text-12 font-medium uppercase tracking-label text-amber mb-1.5">
                    {doc.title}
                  </p>
                )}
                {doc.body && (
                  <p className="text-14 text-slate leading-[1.65]">{doc.body}</p>
                )}
              </div>
            )}
            <PdfViewer url={doc.src} ready={ready} />
          </div>
        ))}
      </div>
    </>
  )
}
