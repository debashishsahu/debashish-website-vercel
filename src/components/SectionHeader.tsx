interface SectionHeaderProps {
  variant?: 'A' | 'B' | 'C'
  eyebrow?: string
  title: string
  subtitle?: string
  className?: string
}

export default function SectionHeader({
  variant = 'A',
  eyebrow,
  title,
  subtitle,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`mt-section-sm md:mt-section-md lg:mt-section mb-6 ${className}`}>
      <div className="flex items-stretch gap-3.5">
        {/* Amber accent bar */}
        <div className="w-[3px] bg-amber rounded-sm self-stretch flex-shrink-0" />

        <div className="pl-[17px]">
          {(variant === 'B' || eyebrow) && (
            <p className="text-12 font-medium uppercase tracking-label text-amber mb-2">
              {eyebrow}
            </p>
          )}
          <h2 className="font-sans text-26 md:text-[28px] lg:text-32 font-medium text-ink tracking-tighter">
            {title}
          </h2>
          {(variant === 'C' || subtitle) && subtitle && (
            <p className="text-18 font-light text-slate mt-2.5 max-w-[640px]">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
