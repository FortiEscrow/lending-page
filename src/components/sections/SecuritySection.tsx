import { landingContent } from "@/content/landing"

export function SecuritySection() {
  const { headline, intro, properties, auditedBy } = landingContent.security

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-950 to-primary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{headline}</h2>
          <p className="text-xl text-gray-400 max-w-3xl">{intro}</p>
        </div>

        {/* Formal Properties */}
        <div className="space-y-6 mb-16">
          {properties.map((prop, idx) => (
            <div
              key={idx}
              className="border border-gray-800 rounded-lg p-8 hover:border-green-700 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <span className="text-2xl text-green-400">✓</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">{prop.property}</h3>
                  <p className="text-gray-400 mb-3">{prop.description}</p>
                  <p className="text-sm text-gray-500 font-mono">
                    Verified via: {prop.verified}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Audits */}
        <div className="bg-green-900/20 border border-green-800 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-6">Audited By Industry Leaders</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {auditedBy.map((auditor, idx) => (
              <div key={idx} className="text-center">
                <p className="text-green-400 font-mono text-sm">{auditor}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
