interface OwlLogoProps {
  size?: number
  className?: string
}

export default function OwlLogo({ size = 24, className }: OwlLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={{ color: 'var(--text-primary)' }}
    >
      <circle cx="24" cy="24" r="24" fill="currentColor"/>

      <polygon points="9,12 13,12 10,4"  fill="#D4882A" opacity="1"/>
      <polygon points="13,12 18,12 15,6" fill="#D4882A" opacity="0.8"/>
      <polygon points="18,12 24,12 20,5" fill="#D4882A" opacity="0.6"/>
      <polygon points="24,12 29,12 26,8" fill="#D4882A" opacity="0.35"/>

      <rect x="9" y="12" width="4"  height="4" rx="2" fill="#D4882A" opacity="0.18"/>
      <rect x="9" y="18" width="10" height="4" rx="2" fill="#D4882A" opacity="0.38"/>
      <rect x="9" y="24" width="15" height="4" rx="2" fill="#D4882A" opacity="0.62"/>
      <rect x="9" y="30" width="18" height="4" rx="2" fill="#D4882A" opacity="0.88"/>
      <rect x="9" y="36" width="17" height="4" rx="2" fill="#D4882A" opacity="1"/>
      <rect x="9" y="42" width="13" height="4" rx="2" fill="#D4882A" opacity="0.68"/>
      <rect x="9" y="48" width="8"  height="4" rx="2" fill="#D4882A" opacity="0.35"/>

      <circle cx="23" cy="21" r="8"   style={{ fill: 'var(--bg)' }}/>
      <circle cx="23" cy="21" r="2.8" fill="currentColor"/>

      <polygon points="9,44 14,44 11,49" fill="#D4882A" opacity="0.7"/>
    </svg>
  )
}
