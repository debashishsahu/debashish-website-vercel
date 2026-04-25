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
}

export default function ImageGroup({ variant, images = [], before, after, label }: ImageGroupProps) {
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
        {label && <p className="text-12 text-mist text-center mt-2">{label}</p>}
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
          <div className="relative w-full aspect-video bg-linen">
            <Image src={b.src} alt={b.alt ?? b.caption ?? 'Before'} fill className="object-cover" loading="lazy" />
          </div>
          {b.caption && <p className="text-12 text-mist mt-2 px-1 pb-1">{b.caption}</p>}
        </div>
        <div className="rounded-md overflow-hidden">
          <div className="bg-amber py-2 px-4">
            <p className="text-11 font-medium text-ink uppercase tracking-label">After</p>
          </div>
          <div className="relative w-full aspect-video bg-linen">
            <Image src={a.src} alt={a.alt ?? a.caption ?? 'After'} fill className="object-cover" loading="lazy" />
          </div>
          {a.caption && <p className="text-12 text-mist mt-2 px-1 pb-1">{a.caption}</p>}
        </div>
      </div>
    )
  }

  if (variant === 'workshop') {
    const [large, ...rest] = images
    if (!large) return null
    return (
      <div className="my-8">
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr] gap-2">
          <div className="relative row-span-2 aspect-square md:aspect-auto rounded-md overflow-hidden bg-linen">
            <Image src={large.src} alt={large.alt ?? large.caption ?? ''} fill className="object-cover" loading="lazy" />
          </div>
          {rest.map((img, i) => (
            <div key={i} className="relative aspect-square rounded-md overflow-hidden bg-linen">
              <Image src={img.src} alt={img.alt ?? img.caption ?? ''} fill className="object-cover" loading="lazy" />
            </div>
          ))}
        </div>
        {label && <p className="text-12 text-mist text-center mt-3">{label}</p>}
      </div>
    )
  }

  return null
}
