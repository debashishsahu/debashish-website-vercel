interface ComparisonTableProps {
  headers: string[]
  ourDesignIndex?: number
  rows: {
    category?: string
    feature?: string
    values: string[]
  }[]
}

const valueStyles: Record<string, string> = {
  '✓':  'text-[#3B6D11]',
  '✗':  'text-[#A32D2D]',
  '✓+': 'text-amber font-medium',
}

export default function ComparisonTable({
  headers,
  ourDesignIndex = 1,
  rows,
}: ComparisonTableProps) {
  return (
    <div className="my-8">
      <div className="overflow-x-auto">
        <table className="min-w-[560px] w-full border-collapse">
          <thead>
            <tr className="bg-ink">
              <th className="text-12 font-medium text-mist uppercase tracking-label px-5 py-3.5 text-left w-[160px]">
                Feature
              </th>
              {headers.map((h, i) => (
                <th
                  key={i}
                  className={`text-12 font-medium uppercase tracking-label text-center px-5 py-3.5 ${
                    i === ourDesignIndex ? 'text-amber' : 'text-[#F7F5F2]'
                  }`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              if (row.category) {
                return (
                  <tr key={i} className="bg-canvas border-b border-linen">
                    <td
                      colSpan={headers.length + 1}
                      className="text-12 font-medium text-slate uppercase tracking-label px-5 py-3"
                    >
                      {row.category}
                    </td>
                  </tr>
                )
              }
              return (
                <tr key={i} className="bg-canvas border-b border-linen">
                  <td className="text-13 text-ink px-5 py-3">{row.feature}</td>
                  {row.values.map((v, j) => (
                    <td
                      key={j}
                      className={`text-center px-5 py-3 ${valueStyles[v] || 'text-ink text-13'} ${
                        j === ourDesignIndex ? 'bg-[#FAEEDA]' : ''
                      }`}
                    >
                      {v}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="bg-canvas border border-linen rounded-b-lg flex flex-wrap gap-4 px-4 py-2 text-12 text-mist">
        <span><span className="text-[#3B6D11] font-medium">✓</span> Supported</span>
        <span><span className="text-[#A32D2D] font-medium">✗</span> Not supported</span>
        <span><span className="text-amber font-medium">✓+</span> Enhanced in our design</span>
      </div>
    </div>
  )
}
