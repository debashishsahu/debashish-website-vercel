import Image from 'next/image'

interface PersonaCard {
  variant: 'persona'
  image?: string
  name: string
  role: string
  roleColor?: string
  body: string
  goals?: string[]
  painPoints?: string[]
}

interface ConceptCard {
  variant: 'concept'
  image: string
  number: number | string
  title: string
  ideaLabel?: string
  ideaText?: string
  issueLabel?: string
  issueText?: string
  whyLabel?: string
  text?: string
  isChosen?: boolean
}

interface FeatureCard {
  variant: 'feature'
  image: string
  title: string
  bullets: string[]
  imagePosition?: 'left' | 'top'
}

type MediaTextCardProps = PersonaCard | ConceptCard | FeatureCard

const roleColorMap: Record<string, { bg: string; text: string }> = {
  blue:   { bg: '#E6F1FB', text: '#185FA5' },
  purple: { bg: '#EDE8F5', text: '#6B3FA0' },
  green:  { bg: '#EAF3DE', text: '#3B6D11' },
  amber:  { bg: '#FAEEDA', text: '#854F0B' },
  slate:  { bg: '#F1EFE8', text: '#5F5E5A' },
}

export default function MediaTextCard(props: MediaTextCardProps) {
  if (props.variant === 'persona') {
    const rc = props.roleColor
      ? (roleColorMap[props.roleColor] ?? { bg: props.roleColor, text: '#185FA5' })
      : { bg: '#E6F1FB', text: '#185FA5' }
    const initial = props.name.charAt(0).toUpperCase()
    return (
      <div className="border border-linen rounded-xl overflow-hidden my-6">
        {/* Avatar / image */}
        {props.image ? (
          <Image
            src={props.image}
            alt={props.name}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', display: 'block' }}
            loading="lazy"
          />
        ) : (
          <div
            className="w-full flex items-center justify-center"
            style={{ background: rc.bg, height: '120px' }}
          >
            <span className="font-display text-[56px] font-medium" style={{ color: rc.text }}>
              {initial}
            </span>
          </div>
        )}
        <div className="p-6">
          <h3 className="font-display text-22 font-medium text-ink mb-2">{props.name}</h3>
          <span
            className="inline-block text-12 font-medium px-3 py-1 rounded-full mb-4"
            style={{ background: rc.bg, color: rc.text }}
          >
            {props.role}
          </span>
          <p className="text-13 text-slate leading-[1.65]">{props.body}</p>
          {(props.goals || props.painPoints) && (
            <div className="grid grid-cols-2 gap-4 mt-5">
              {props.goals && (
                <div>
                  <p className="text-11 font-medium uppercase tracking-label text-amber mb-2">Goals</p>
                  <ul className="flex flex-col gap-1.5">
                    {props.goals.map((g, i) => (
                      <li key={i} className="flex items-start gap-2 text-13 text-ink">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0 mt-[5px]" />
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {props.painPoints && (
                <div>
                  <p className="text-11 font-medium uppercase tracking-label text-slate mb-2">Pain Points</p>
                  <ul className="flex flex-col gap-1.5">
                    {props.painPoints.map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-13 text-ink">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate/50 flex-shrink-0 mt-[5px]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }

  if (props.variant === 'concept') {
    return (
      <div className={`border rounded-xl overflow-hidden ${props.isChosen ? 'border-amber' : 'border-linen'}`}>
        <div className="bg-[#F5F4F0]">
          <Image
            src={props.image}
            alt={props.title}
            width={0}
            height={0}
            sizes="(min-width: 768px) 33vw, 100vw"
            style={{ width: '100%', height: 'auto', display: 'block' }}
            loading="lazy"
          />
        </div>
        <div className="p-5">
          <div
            className={`font-display text-[28px] font-medium mb-2 ${
              props.isChosen ? 'text-amber' : 'text-linen'
            }`}
          >
            {String(props.number).padStart(2, '0')}
          </div>
          <h4 className="text-14 font-medium text-ink mb-3">{props.title}</h4>
          {props.ideaLabel && (
            <p className="text-12 font-medium text-amber uppercase tracking-label mb-1">{props.ideaLabel}</p>
          )}
          {props.ideaText && (
            <p className="text-13 text-slate leading-[1.6] mb-3">{props.ideaText}</p>
          )}
          {props.issueLabel && (
            <p className="text-12 font-medium text-mist uppercase tracking-label mb-1">{props.issueLabel}</p>
          )}
          {props.issueText && (
            <p className="text-13 text-slate leading-[1.6] mb-3">{props.issueText}</p>
          )}
          {props.whyLabel && (
            <p className="text-12 font-medium text-[#3B6D11] uppercase tracking-label mb-1">{props.whyLabel}</p>
          )}
          {props.text && (
            <p className="text-13 text-slate leading-[1.6]">{props.text}</p>
          )}
          {props.isChosen && (
            <div className="mt-3 inline-flex items-center gap-1.5 text-12 font-medium text-amber">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Chosen concept
            </div>
          )}
        </div>
      </div>
    )
  }

  if (props.variant === 'feature') {
    const isLeft = props.imagePosition !== 'top'
    return (
      <div className={`flex ${isLeft ? 'flex-col md:flex-row' : 'flex-col'} gap-6 my-6 border border-linen rounded-xl overflow-hidden`}>
        <div className={`relative ${isLeft ? 'w-full md:w-[280px] flex-shrink-0 aspect-[4/3] md:aspect-auto md:min-h-[200px]' : 'w-full aspect-video'}`}>
          <Image src={props.image} alt={props.title} fill className="object-cover" loading="lazy" />
        </div>
        <div className="p-6 flex-1">
          <h4 className="text-16 font-medium text-ink mb-3">{props.title}</h4>
          <ul className="flex flex-col gap-2">
            {props.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2 text-14 text-ink">
                <span className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0 mt-[7px]" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  return null
}
