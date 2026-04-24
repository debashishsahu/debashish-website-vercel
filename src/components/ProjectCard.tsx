import Image from 'next/image'
import Link from 'next/link'
import { tagColors } from '@/data/projects'

interface ProjectCardProps {
  variant: 'featured' | 'standard'
  image?: string
  title: string
  description: string
  tags: string[]
  meta: string
  href: string
}

export default function ProjectCard({
  variant,
  image,
  title,
  description,
  tags,
  meta,
  href,
}: ProjectCardProps) {
  if (variant === 'featured') {
    return (
      <Link
        href={href}
        className="group flex flex-col border border-linen rounded-xl overflow-hidden hover:border-amber transition-colors bg-white/40"
      >
        <div className="relative h-[180px] w-full overflow-hidden bg-linen">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-linen flex items-center justify-center">
              <span className="text-12 text-mist">No image</span>
            </div>
          )}
        </div>
        <div className="px-[22px] py-5 flex flex-col flex-1">
          <div className="flex flex-wrap gap-1.5 mb-2">
            {tags.map((tag) => {
              const style = tagColors[tag] || { bg: 'bg-[#F1EFE8]', text: 'text-[#5F5E5A]' }
              return (
                <span
                  key={tag}
                  className={`text-12 font-medium px-2.5 py-0.5 rounded-full ${style.bg} ${style.text}`}
                >
                  {tag}
                </span>
              )
            })}
          </div>
          <h3 className="font-display text-20 font-medium text-ink mt-2 mb-2 tracking-snug">
            {title}
          </h3>
          <p className="text-13 text-slate leading-[1.6] mb-3.5 flex-1">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-12 text-mist">{meta}</span>
            <span className="text-12 font-medium text-amber group-hover:underline">
              View case study →
            </span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className="group flex flex-col border border-linen rounded-xl overflow-hidden hover:border-amber transition-colors bg-white/40"
    >
      <div className="relative h-[110px] w-full overflow-hidden bg-linen">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-linen flex items-center justify-center">
            <span className="text-12 text-mist">No image</span>
          </div>
        )}
      </div>
      <div className="px-4 py-3.5 flex flex-col flex-1">
        <h3 className="font-display text-16 font-medium text-ink mb-1.5 tracking-snug">
          {title}
        </h3>
        <p className="text-12 text-slate leading-[1.5] mb-2.5 flex-1">{description}</p>
        <p className="text-11 text-mist">{meta}</p>
      </div>
    </Link>
  )
}
