'use client'

export function Architecture() {
  return (
    <section id="architecture" className="section bg-bg-primary border-b border-border-default">
      <div className="section-container">
        <h2 className="text-text-primary mb-16">Architecture</h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* State Machine Diagram */}
          <div>
            <h3 className="text-text-primary mb-8 font-mono text-sm uppercase tracking-widest text-text-tertiary">
              State Machine
            </h3>
            <div className="border border-border-default rounded p-8 bg-bg-secondary">
              <div className="flex flex-col items-center space-y-0">
                {/* INIT */}
                <div className="px-6 py-3 border border-text-tertiary rounded font-mono text-sm text-text-primary bg-bg-tertiary">
                  INIT
                </div>
                <div className="w-px h-8 bg-text-tertiary" />
                <svg className="w-3 h-3 text-text-tertiary" viewBox="0 0 12 12" fill="currentColor">
                  <polygon points="6,12 0,0 12,0" />
                </svg>

                {/* FUNDED */}
                <div className="px-6 py-3 border border-text-tertiary rounded font-mono text-sm text-text-primary bg-bg-tertiary mt-1">
                  FUNDED
                </div>
                <div className="w-px h-8 bg-text-tertiary" />
                <svg className="w-3 h-3 text-text-tertiary" viewBox="0 0 12 12" fill="currentColor">
                  <polygon points="6,12 0,0 12,0" />
                </svg>

                {/* Branching */}
                <div className="flex items-center gap-3 mt-1 flex-wrap justify-center">
                  <div className="px-4 py-2 border border-green-800 rounded font-mono text-xs text-green-400 bg-green-950/30">
                    RELEASED
                  </div>
                  <span className="text-text-tertiary font-mono text-xs">|</span>
                  <div className="px-4 py-2 border border-red-800 rounded font-mono text-xs text-red-400 bg-red-950/30">
                    REFUNDED
                  </div>
                  <span className="text-text-tertiary font-mono text-xs">|</span>
                  <div className="px-4 py-2 border border-yellow-800 rounded font-mono text-xs text-yellow-400 bg-yellow-950/30">
                    DISPUTED
                  </div>
                </div>

                <div className="w-px h-8 bg-text-tertiary" />
                <svg className="w-3 h-3 text-text-tertiary" viewBox="0 0 12 12" fill="currentColor">
                  <polygon points="6,12 0,0 12,0" />
                </svg>

                {/* FINALIZED */}
                <div className="px-6 py-3 border border-text-secondary rounded font-mono text-sm text-text-primary bg-bg-tertiary mt-1">
                  FINALIZED
                </div>
              </div>
            </div>
          </div>

          {/* Contract Architecture */}
          <div>
            <h3 className="text-text-primary mb-8 font-mono text-sm uppercase tracking-widest text-text-tertiary">
              Contract Architecture
            </h3>
            <div className="border border-border-default rounded p-8 bg-bg-secondary font-mono text-sm">
              <div className="space-y-0">
                {/* Root */}
                <div className="text-text-primary font-semibold mb-4">FortiEscrow Core</div>

                {/* Tree items */}
                {[
                  { label: 'State Machine Engine', last: false },
                  { label: 'Timeout Module', last: false },
                  { label: 'Arbitration Module', tag: 'optional', last: false },
                  { label: 'Accounting Layer', last: false },
                  { label: 'Security Invariants', last: true },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center text-text-secondary">
                    <span className="text-text-tertiary mr-2">
                      {item.last ? '└──' : '├──'}
                    </span>
                    <span>{item.label}</span>
                    {item.tag && (
                      <span className="ml-2 text-xs text-text-tertiary border border-border-default rounded px-1.5 py-0.5">
                        {item.tag}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
