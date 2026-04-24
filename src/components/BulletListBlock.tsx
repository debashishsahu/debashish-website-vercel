interface BulletItem {
  term?: string
  description: string
}

interface BulletListBlockProps {
  title?: string
  items: BulletItem[]
  columns?: 1 | 2
}

export default function BulletListBlock({ title, items, columns = 1 }: BulletListBlockProps) {
  return (
    <div className="my-6">
      {title && (
        <h3 className="text-18 font-medium text-ink tracking-snug mb-3.5">{title}</h3>
      )}
      <ul
        className={`${
          columns === 2
            ? 'grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-2.5'
            : 'flex flex-col gap-2.5'
        }`}
      >
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0 mt-[7px]" />
            <p className="text-14 text-ink leading-[1.65]">
              {item.term && (
                <span className="font-medium">{item.term} </span>
              )}
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
