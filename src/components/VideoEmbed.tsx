interface VideoItem {
  src: string
  title?: string
  body?: string
}

interface VideoEmbedProps {
  videos: VideoItem[]
  layout?: 'stack' | 'grid'
}

export default function VideoEmbed({ videos, layout = 'stack' }: VideoEmbedProps) {
  const poster = (src: string) => src.replace(/\.(mp4|webm|mov)(\?.*)?$/i, '.jpg')

  const VideoCard = ({ v }: { v: VideoItem }) => (
    <div className="flex flex-col gap-3">
      {/* Title + description together above the video */}
      {(v.title || v.body) && (
        <div className="px-0.5">
          {v.title && (
            <p className="text-12 font-medium uppercase tracking-label text-amber mb-1.5">
              {v.title}
            </p>
          )}
          {v.body && (
            <p className="text-14 text-slate leading-[1.65]">{v.body}</p>
          )}
        </div>
      )}
      <div className="rounded-lg overflow-hidden bg-[#F5F4F0]">
        <video
          src={v.src}
          poster={poster(v.src)}
          controls
          preload="metadata"
          playsInline
          className="w-full block"
        />
      </div>
    </div>
  )

  if (layout === 'grid' && videos.length > 1) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        {videos.map((v, i) => <VideoCard key={i} v={v} />)}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-16 my-8">
      {videos.map((v, i) => <VideoCard key={i} v={v} />)}
    </div>
  )
}
