import { landingContent } from "@/content/landing"

export function HeroSection() {
  const { headline, subheading, cta, ctaSecondary } = landingContent.hero

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-primary to-secondary">
      <div className="max-w-4xl mx-auto text-center">
        {/* Floating badge */}
        <div className="mb-6 inline-block">
          <span className="text-sm font-mono text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/30">
            Protocol Infrastructure
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          {headline}
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          {subheading}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="btn-primary text-lg px-8 py-4">
            {cta} →
          </button>
          <button className="btn-secondary text-lg px-8 py-4">
            {ctaSecondary} ↓
          </button>
        </div>

        {/* Trust signal */}
        <p className="text-gray-500 text-sm mt-12">
          {landingContent.hero.backgroundMessage}
        </p>
      </div>
    </section>
  )
}
