import { landingContent } from "@/content/landing"

export function ArchitectureSection() {
  const { headline, intro, layers, technicalDeeds } = landingContent.architecture

  return (
    <section className="py-24 px-4 bg-primary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{headline}</h2>
          <p className="text-xl text-gray-400 max-w-3xl">{intro}</p>
        </div>

        {/* Three Layers */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {layers.map((layer, idx) => (
            <div key={idx} className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              {/* Layer number */}
              <div className="mb-4">
                <span className="inline-block text-4xl font-bold text-blue-400 mb-2">
                  {idx + 1}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-4">{layer.name}</h3>
              <p className="text-gray-400 mb-4">{layer.description}</p>

              {/* Example */}
              <div className="bg-gray-950 rounded p-4 mb-4 border-l-2 border-blue-600">
                <p className="text-sm text-gray-400">
                  <span className="font-mono text-blue-400">Example:</span> {layer.example}
                </p>
              </div>

              {/* Guarantee */}
              <p className="text-sm text-green-400 font-mono">
                ✓ {layer.guarantee}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Details */}
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
          <p className="text-gray-400">
            <span className="font-bold text-white">Built on: </span>
            {technicalDeeds}
          </p>
        </div>
      </div>
    </section>
  )
}
