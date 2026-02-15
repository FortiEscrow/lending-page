'use client'

export function Hero() {
  return (
    <section className="section bg-bg-primary border-b border-border-default">
      <div className="section-container">
        {/* Headline */}
        <div className="space-y-8">
          <h1 className="text-text-primary max-w-4xl">
            FortiEscrow — A Protocol-Grade Escrow Framework
          </h1>

          {/* Subtext */}
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            Reusable, deterministic, and security-first escrow primitive for Web3 applications
            on Tezos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <a href="https://github.com/FortiEscrow/protocol" className="btn-outline">
              View GitHub →
            </a>
            <a href="#architecture" className="btn-outline">
              View Architecture →
            </a>
            <a href="#docs" className="btn-outline">
              Read Docs →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
