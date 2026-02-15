'use client'

export function Hero() {
  return (
    <section className="section bg-bg-primary border-b border-border-default">
      <div className="section-container">
        {/* Logo */}
        <div className="mb-12 flex justify-center animate-float">
          <img 
            src="/FortiEscrow_logo.png" 
            alt="FortiEscrow Logo" 
            className="w-48 h-48 object-contain drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
          />
        </div>
        
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
            <a 
              href="https://github.com/FortiEscrow/FortiEscrow" 
              className="btn-outline"
            >
              View GitHub →
            </a>
            <a 
              href="#architecture" 
              className="btn-outline"
            >
              View Architecture →
            </a>
            <a 
              href="https://github.com/FortiEscrow/FortiEscrow/tree/main/docs" 
              className="btn-outline"
            >
              Read Docs →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
