'use client'

export function Problem() {
  const issues = [
    'Most dApps implement escrow from scratch',
    'State transitions are inconsistent',
    'Dispute logic introduces complexity',
    'Fund-lock risks remain common',
  ]

  return (
    <section className="section bg-bg-primary border-b border-border-default">
      <div className="section-container">
        {/* Title */}
        <h2 className="text-text-primary mb-12 max-w-3xl">
          Escrow Logic Is Rewritten — And Rebroken — Everywhere
        </h2>

        {/* Issues List */}
        <div className="max-w-2xl space-y-6">
          {issues.map((issue, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 pb-6 border-b border-border-default last:border-0"
            >
              <div className="flex-shrink-0 pt-1">
                <span className="text-text-tertiary font-mono text-sm">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="text-text-secondary pt-0.5">{issue}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
