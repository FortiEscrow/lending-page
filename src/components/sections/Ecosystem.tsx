'use client'

export function Ecosystem() {
  const points = [
    'Built for Tezos & Etherlink',
    'Compatible with Tezos smart contract model',
    'Designed for formal verification readiness',
    'Modular for future EVM compatibility',
  ]

  return (
    <section className="section bg-bg-primary border-b border-border-default">
      <div className="section-container">
        <h2 className="text-text-primary mb-12">Ecosystem Alignment</h2>

        <div className="max-w-2xl space-y-4">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 border-b border-border-default pb-4 last:border-0"
            >
              <span className="text-text-tertiary font-mono text-sm flex-shrink-0">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <p className="text-text-secondary">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
