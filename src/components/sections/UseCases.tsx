'use client'

export function UseCases() {
  const cases = [
    { title: 'Marketplaces', description: 'Trustless buyer-seller escrow for digital and physical goods.' },
    { title: 'Freelance Platforms', description: 'Milestone-based payment with timeout guarantees.' },
    { title: 'DAO Treasury Management', description: 'Conditional fund releases governed by on-chain logic.' },
    { title: 'RWA Settlement', description: 'Real-world asset transaction settlement with dispute handling.' },
    { title: 'Web3 SaaS Integrations', description: 'Escrow-as-a-service for any decentralized application.' },
  ]

  return (
    <section className="section bg-bg-primary border-b border-border-default">
      <div className="section-container">
        <h2 className="text-text-primary mb-4">Built For</h2>
        <p className="text-text-secondary mb-12 max-w-2xl">
          A reusable primitive designed to integrate into any Web3 vertical.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="border border-border-default rounded p-6 hover:border-text-tertiary transition-colors duration-200"
            >
              <h3 className="text-text-primary mb-2 text-base font-semibold">{item.title}</h3>
              <p className="text-text-secondary text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
