interface ProjectMetaBarProps {
  role: string
  team: string
  duration: string
  client: string
}

export default function ProjectMetaBar({ role, team, duration, client }: ProjectMetaBarProps) {
  const items = [
    { label: 'My Role', value: role },
    { label: 'Team', value: team },
    { label: 'Duration', value: duration },
    { label: 'Client', value: client },
  ]

  return (
    <div className="bg-canvas border-y border-linen">
      <div className="max-w-content mx-auto px-page-sm md:px-page-md lg:px-page py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-5 md:gap-0">
          {items.map((item, i) => {
            const dividerRight =
              i % 2 === 0 ? 'border-r border-linen pr-5 md:pr-0' : ''
            const dividerMd = i < 3 ? 'md:border-r md:border-linen md:px-4' : 'md:px-4'
            return (
              <div key={item.label} className={`min-w-0 py-1 md:py-3 ${dividerRight} ${dividerMd}`}>
                <p className="text-12 font-medium text-mist uppercase tracking-label mb-1.5">
                  {item.label}
                </p>
                <p className="text-14 text-ink leading-[1.5] break-words">{item.value}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
