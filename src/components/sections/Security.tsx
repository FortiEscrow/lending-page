'use client'

export function Security() {
  const checks = [
    'Unit tests',
    'Invariant tests',
    'Adversarial tests',
    'No double release',
    'No fund-lock',
    'Deterministic finalization',
  ]

  return (
    <section className="section bg-bg-primary border-b border-border-default">
      <div className="section-container">
        <h2 className="text-text-primary mb-4">Security by Design</h2>
        <p className="text-text-secondary mb-12 max-w-2xl">
          Every state transition is tested against invariant violations, adversarial inputs, and edge-case scenarios.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {checks.map((check, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 border border-border-default rounded p-4 bg-bg-secondary"
            >
              <span className="text-green-400 flex-shrink-0">&#10004;</span>
              <span className="text-text-secondary text-sm font-mono">{check}</span>
            </div>
          ))}
        </div>

        {/* Coverage & CI */}
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2 border border-border-default rounded px-4 py-2 bg-bg-secondary">
            <span className="text-text-tertiary font-mono text-xs">coverage</span>
            <span className="text-green-400 font-mono text-sm font-semibold">96%</span>
          </div>
          <div className="flex items-center gap-2 border border-border-default rounded px-4 py-2 bg-bg-secondary">
            <span className="text-text-tertiary font-mono text-xs">CI</span>
            <span className="text-green-400 font-mono text-sm font-semibold">passing</span>
          </div>
          <div className="flex items-center gap-2 border border-border-default rounded px-4 py-2 bg-bg-secondary">
            <span className="text-text-tertiary font-mono text-xs">tests</span>
            <span className="text-text-primary font-mono text-sm font-semibold">47 passed</span>
          </div>
        </div>
      </div>
    </section>
  )
}
