interface HighlightBlockProps {
  variant: 'quote' | 'callout'
  text: string
  attribution?: string
  label?: string
}

export default function HighlightBlock({ variant, text, attribution, label }: HighlightBlockProps) {
  if (variant === 'quote') {
    return (
      <div className="flex gap-0 my-8">
        <div className="w-[3px] bg-amber rounded-sm flex-shrink-0" />
        <div className="pl-6">
          <blockquote className="font-display text-22 italic text-ink leading-[1.5]">
            &ldquo;{text}&rdquo;
          </blockquote>
          {attribution && (
            <cite className="block text-12 font-medium text-mist mt-3 not-italic">
              — {attribution}
            </cite>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="my-8 rounded-lg overflow-hidden border border-linen">
      <div className="bg-ink py-2 px-4 flex items-center gap-2.5">
        <span className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0" />
        <span className="text-12 font-medium text-mist uppercase tracking-label">
          {label || 'Key Insight'}
        </span>
      </div>
      <div className="bg-canvas py-6 px-7">
        <p className="font-display text-20 italic text-ink leading-[1.55]">
          {text}
        </p>
      </div>
    </div>
  )
}
