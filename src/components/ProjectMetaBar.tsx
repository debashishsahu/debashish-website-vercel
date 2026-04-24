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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`py-3 px-4 ${
                i < items.length - 1
                  ? 'border-r border-linen'
                  : ''
              } ${
                i >= 2 && i < items.length
                  ? 'md:border-t-0 border-t border-linen md:border-t-transparent'
                  : ''
              }`}
            >
              <p className="text-12 font-medium text-mist uppercase tracking-label mb-1.5">
                {item.label}
              </p>
              <p className="text-14 text-ink leading-[1.5]">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
