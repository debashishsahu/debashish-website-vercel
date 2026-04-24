interface TimelineItem {
  date: string
  company: string
  role: string
  description: string
  isCurrent?: boolean
}

interface TimelineEntryProps {
  entries: TimelineItem[]
}

export default function TimelineEntry({ entries }: TimelineEntryProps) {
  return (
    <div className="relative">
      {/* Desktop vertical line */}
      <div className="hidden md:block absolute left-[160px] top-0 bottom-0 w-px bg-linen" />

      <div className="flex flex-col">
        {entries.map((entry, i) => (
          <div key={i} className="relative pb-7 flex flex-col md:flex-row">
            {/* Date column */}
            <div className="md:w-[160px] md:text-right md:pr-6 flex flex-row md:flex-col gap-2 md:gap-0.5 mb-2 md:mb-0">
              <p
                className={`text-12 font-medium ${
                  entry.isCurrent ? 'text-amber' : 'text-mist'
                }`}
              >
                {entry.date}
              </p>
              <p className="text-11 text-mist">{entry.company}</p>
            </div>

            {/* Dot */}
            <div
              className={`hidden md:block absolute left-[155px] top-[3px] w-[10px] h-[10px] rounded-full border-2 border-canvas ring-1 ${
                entry.isCurrent
                  ? 'bg-amber ring-amber'
                  : 'bg-linen ring-linen'
              }`}
            />

            {/* Content */}
            <div className="md:pl-8 flex-1">
              <h3 className="text-18 font-medium text-ink tracking-snug mb-0.5">
                {entry.role}
              </h3>
              <p className="text-13 font-medium text-slate mb-2.5">{entry.company}</p>
              <p className="text-14 text-slate leading-[1.7]">{entry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
