import Image from 'next/image'

type AspectRatio = 'panoramic' | 'wide' | 'standard' | 'portrait'

interface FullWidthImageProps {
  src: string
  alt: string
  caption?: string
  aspectRatio?: AspectRatio
}

const aspectClasses: Record<AspectRatio, string> = {
  panoramic: 'aspect-[16/5]',
  wide:      'aspect-video',
  standard:  'aspect-[4/3]',
  portrait:  'aspect-[4/5]',
}

export default function FullWidthImage({
  src,
  alt,
  caption,
  aspectRatio = 'wide',
}: FullWidthImageProps) {
  return (
    <figure className="my-8">
      <div className={`relative w-full ${aspectClasses[aspectRatio]} rounded-lg overflow-hidden`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption className="flex items-start gap-2 mt-2.5">
          <div className="w-[3px] bg-amber rounded-sm flex-shrink-0 mt-[3px] self-stretch" />
          <p className="text-13 text-slate leading-[1.5]">{caption}</p>
        </figcaption>
      )}
    </figure>
  )
}
