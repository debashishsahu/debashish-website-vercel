interface NumberedItem {
  number: number | string
  title: string
  body: string
}

interface PriorityItem {
  label: 'Must' | 'Should' | 'Could' | "Won't"
  content: string
}

interface StakeholderItem {
  number: number | string
  purpose: string
  outcome: string
}

interface LabeledItemProps {
  variant: 'numbered' | 'priority' | 'stakeholder'
  numberedItems?: NumberedItem[]
  priorityItems?: PriorityItem[]
  stakeholderItems?: StakeholderItem[]
}

const priorityStyles: Record<string, { bg: string; text: string }> = {
  Must:   { bg: 'bg-[#EAF3DE]', text: 'text-[#3B6D11]' },
  Should: { bg: 'bg-[#E6F1FB]', text: 'text-[#185FA5]' },
  Could:  { bg: 'bg-[#FAEEDA]', text: 'text-[#854F0B]' },
  "Won't":{ bg: 'bg-[#F1EFE8]', text: 'text-[#5F5E5A]' },
}

export default function LabeledItem({
  variant,
  numberedItems,
  priorityItems,
  stakeholderItems,
}: LabeledItemProps) {
  if (variant === 'numbered' && numberedItems) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {numberedItems.map((item, i) => (
          <div key={i}>
            <div className="font-display text-[36px] font-medium text-linen leading-none mb-3">
              {String(item.number).padStart(2, '0')}
            </div>
            <h4 className="text-16 font-medium text-ink mb-2">{item.title}</h4>
            <p className="text-14 text-slate leading-[1.65]">{item.body}</p>
          </div>
        ))}
      </div>
    )
  }

  if (variant === 'priority' && priorityItems) {
    return (
      <div className="divide-y divide-linen border-y border-linen">
        {priorityItems.map((item, i) => (
          <div key={i} className="flex items-start gap-4 py-3.5">
            <span
              className={`flex-shrink-0 text-12 font-medium px-2.5 py-1 rounded-full ${priorityStyles[item.label].bg} ${priorityStyles[item.label].text}`}
            >
              {item.label}
            </span>
            <p className="text-14 text-ink leading-[1.65]">{item.content}</p>
          </div>
        ))}
      </div>
    )
  }

  if (variant === 'stakeholder' && stakeholderItems) {
    return (
      <div className="divide-y divide-linen border-y border-linen">
        {stakeholderItems.map((item, i) => (
          <div key={i} className="grid grid-cols-[80px_1fr_1fr] gap-6 py-5">
            <div className="font-display text-[28px] font-medium text-linen leading-none">
              {String(item.number).padStart(2, '0')}
            </div>
            <div>
              <p className="text-14 text-ink leading-[1.65]">{item.purpose}</p>
            </div>
            <div>
              <p className="text-11 font-medium uppercase tracking-label text-amber mb-1.5">
                Outcome
              </p>
              <p className="text-14 text-ink leading-[1.65]">{item.outcome}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return null
}
