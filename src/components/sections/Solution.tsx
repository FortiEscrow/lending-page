'use client'

export function Solution() {
  const features = [
    {
      title: 'Deterministic State Machine',
      description: 'Predictable escrow state transitions without ambiguity.',
    },
    {
      title: 'Timeout-Based Resolution',
      description: 'Time-locked conditions for automatic settlement.',
    },
    {
      title: 'Optional Dispute Module',
      description: 'Extensible logic for multi-party dispute handling.',
    },
    {
      title: 'Invariant-Tested Logic',
      description: 'Formal property testing ensures correctness guarantees.',
    },
    {
      title: 'Adversarial Test Coverage',
      description: 'Edge cases and attack patterns verified systematically.',
    },
    {
      title: 'Modular & Composable',
      description: 'Plug into existing dApps without integration overhead.',
    },
  ]

  return (
    <section className="section bg-bg-primary border-b border-border-default">
      <div className="section-container">
        {/* Title */}
        <h2 className="text-text-primary mb-16">A Deterministic Trust Primitive</h2>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="border border-border-default rounded p-6 hover:border-border-default/80 transition-colors duration-200"
            >
              <h3 className="text-text-primary mb-3 font-semibold">{feature.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
