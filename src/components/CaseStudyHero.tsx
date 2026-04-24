import Image from 'next/image'

interface CaseStudyHeroProps {
  variant?: 'A' | 'B'
  image: string
  eyebrow: string
  title: string
  descriptor: string
  imageAlt?: string
}

export default function CaseStudyHero({
  variant = 'A',
  image,
  eyebrow,
  title,
  descriptor,
  imageAlt = '',
}: CaseStudyHeroProps) {
  if (variant === 'B') {
    return (
      <div className="relative w-full aspect-[16/5] md:aspect-[16/6] sm:aspect-video overflow-hidden">
        <Image
          src={image}
          alt={imageAlt || title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-page-sm md:px-page-md lg:px-page py-10">
          <div className="max-w-content mx-auto">
            <p className="text-12 font-medium uppercase tracking-label text-amber mb-3">
              {eyebrow}
            </p>
            <h1 className="font-display text-[36px] md:text-[44px] lg:text-[56px] font-medium text-[#F7F5F2] tracking-tight leading-[1.05] max-w-[800px]">
              {title}
            </h1>
            <p className="text-20 font-light text-[#C0CCCC] mt-3 max-w-[640px]">
              {descriptor}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="relative w-full aspect-[16/5] md:aspect-[12/5] sm:aspect-video overflow-hidden">
        <Image
          src={image}
          alt={imageAlt || title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="bg-canvas px-page-sm md:px-page-md lg:px-page py-10">
        <div className="max-w-content mx-auto">
          <p className="text-12 font-medium uppercase tracking-label text-amber mb-3">
            {eyebrow}
          </p>
          <h1 className="font-display text-[36px] md:text-[44px] lg:text-[56px] font-medium text-ink tracking-tight leading-[1.05] max-w-[800px]">
            {title}
          </h1>
          <p className="text-20 font-light text-slate mt-3 max-w-[640px]">
            {descriptor}
          </p>
        </div>
      </div>
    </div>
  )
}
