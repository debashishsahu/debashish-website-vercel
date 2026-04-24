import Image from 'next/image'

interface PersonaCard {
  variant: 'persona'
  image: string
  name: string
  role: string
  roleColor?: string
  body: string
  goals: string[]
  painPoints: string[]
}

interface ConceptCard {
  variant: 'concept'
  image: string
  number: number | string
  title: string
  ideaLabel?: string
  issueLabel?: string
  whyLabel?: string
  text: string
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

export default function MediaTextCard(props: MediaTextCardProps) {
  if (props.variant === 'persona') {
    return (
      <div className="flex flex-col md:flex-row gap-8 border border-linen rounded-xl overflow-hidden my-6">
        <div className="relative w-full md:w-[280px] flex-shrink-0 aspect-[4/3] md:aspect-auto md:min-h-[240px]">
          <Image src={props.image} alt={props.name} fill className="object-cover" loading="lazy" />
        </div>
        <div className="p-6 flex-1">
          <h3 className="font-display text-22 font-medium text-ink mb-2">{props.name}</h3>
          <span
            className="inline-block text-12 font-medium px-3 py-1 rounded-full mb-4"
            style={{ background: props.roleColor || '#E6F1FB', color: '#185FA5' }}
          >
            {props.role}
          </span>
          <p className="text-13 text-slate mb-4 leading-[1.65]">{props.body}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-12 font-medium uppercase tracking-label text-amber mb-2">Goals</p>
              <ul className="flex flex-col gap-1.5">
                {props.goals.map((g, i) => (
                  <li key={i} className="flex items-start gap-2 text-13 text-ink">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0 mt-[5px]" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-12 font-medium uppercase tracking-label text-mist mb-2">Pain Points</p>
              <ul className="flex flex-col gap-1.5">
                {props.painPoints.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-13 text-ink">
                    <span className="w-1.5 h-1.5 rounded-full bg-mist flex-shrink-0 mt-[5px]" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (props.variant === 'concept') {
    return (
      <div className="border border-linen rounded-xl overflow-hidden">
        <div className="relative w-full aspect-video">
          <Image src={props.image} alt={props.title} fill className="object-cover" loading="lazy" />
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
          {props.issueLabel && (
            <p className="text-12 font-medium text-mist uppercase tracking-label mb-1">{props.issueLabel}</p>
          )}
          {props.whyLabel && (
            <p className="text-12 font-medium text-[#3B6D11] uppercase tracking-label mb-1">{props.whyLabel}</p>
          )}
          <p className="text-13 text-slate leading-[1.6]">{props.text}</p>
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
