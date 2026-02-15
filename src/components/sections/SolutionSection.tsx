import { landingContent } from "@/content/landing"

export function SolutionSection() {
  const { headline, intro, coreInnovations, keyMessage } =
    landingContent.solution

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-primary to-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{headline}</h2>
          <p className="text-xl text-gray-400 max-w-3xl">{intro}</p>
        </div>

        {/* Core Innovations */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {coreInnovations.map((innovation, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">
                  <span className="text-blue-400 font-bold">
                    {String.fromCharCode(65 + idx)}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{innovation.title}</h3>
                  <p className="text-gray-400 mb-3">{innovation.description}</p>
                  <p className="text-sm text-blue-400 font-mono">
                    ✓ {innovation.benefit}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Message */}
        <div className="border-l-4 border-blue-600 bg-blue-600/5 p-8 rounded">
          <p className="text-lg font-semibold">{keyMessage}</p>
        </div>
      </div>
    </section>
  )
}
