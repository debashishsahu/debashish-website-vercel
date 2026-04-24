interface Metric {
  stat: string
  label: string
  description?: string
}

interface ImpactMetricProps {
  metrics: Metric[]
}

export default function ImpactMetric({ metrics }: ImpactMetricProps) {
  return (
    <div className="border border-linen rounded-xl overflow-hidden my-8">
      <div className="grid grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric, i) => (
          <div
            key={i}
            className={`py-7 px-8 text-center ${
              i < metrics.length - 1 ? 'border-r border-linen' : ''
            } ${
              i >= 2 ? 'border-t border-linen' : ''
            }`}
          >
            <div className="font-display text-[28px] md:text-[36px] lg:text-[56px] font-medium text-amber tracking-tight leading-none">
              {metric.stat}
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
