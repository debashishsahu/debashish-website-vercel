'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface Metric {
  stat: string
  label: string
  description?: string
}

interface ImpactMetricProps {
  metrics: Metric[]
  statColor?: 'amber' | 'linen'
}

function parseStatParts(stat: string): { prefix: string; number: number | null; suffix: string; padWidth: number } {
  const match = stat.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)([^0-9]*)$/)
  if (!match) return { prefix: '', number: null, suffix: stat, padWidth: 0 }
  const integerPart = match[2].split('.')[0]
  const padWidth = integerPart.length // e.g. "01" → 2, "100" → 3
  return { prefix: match[1], number: parseFloat(match[2]), suffix: match[3], padWidth }
}

function CountUp({ stat, active }: { stat: string; active: boolean }) {
  const { prefix, number, suffix, padWidth } = parseStatParts(stat)
  const [display, setDisplay] = useState(number !== null ? 0 : null)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!active || number === null || startedRef.current) return
    startedRef.current = true

    const duration = 1400
    const startTime = performance.now()
    const isFloat = stat.includes('.')
    const decimals = isFloat ? (stat.split('.')[1]?.length || 1) : 0

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * number
      setDisplay(isFloat ? parseFloat(current.toFixed(decimals)) : Math.floor(current))
      if (progress < 1) requestAnimationFrame(tick)
      else setDisplay(number)
    }

    requestAnimationFrame(tick)
  }, [active, number, stat])

  if (number === null) {
    return <span>{stat}</span>
  }

  // Preserve leading zeros (e.g. stat "01" → always show 2-digit width)
  const displayStr = display !== null
    ? (stat.includes('.')
        ? display.toFixed(stat.split('.')[1]?.length || 1)
        : String(display).padStart(padWidth, '0'))
    : '0'.padStart(padWidth, '0')

  return (
    <span>
      {prefix}{displayStr}{suffix}
    </span>
  )
}

export default function ImpactMetric({ metrics, statColor = 'amber' }: ImpactMetricProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })

  return (
    <div ref={ref} className="border border-linen rounded-xl overflow-hidden my-8">
      <div className="grid grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric, i) => (
          <div
            key={i}
            className={`py-7 px-8 text-center ${
              i < metrics.length - 1 ? 'border-r border-linen' : ''
            } ${i >= 2 ? 'border-t border-linen' : ''}`}
          >
            <div className={`font-display text-[28px] md:text-[36px] lg:text-[56px] font-medium tracking-tight leading-none ${statColor === 'linen' ? 'text-linen' : 'text-amber'}`}>
              <CountUp stat={metric.stat} active={isInView} />
            </div>
            <p className="text-14 font-medium text-ink mt-2">{metric.label}</p>
            {metric.description && (
              <p className="text-12 text-slate mt-1 leading-[1.5] max-w-[160px] mx-auto">
                {metric.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
