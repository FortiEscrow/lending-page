import { landingContent } from "@/content/landing"

export function UseCasesSection() {
  const { headline, intro, cases } = landingContent.useCases

  return (
    <section className="py-24 px-4 bg-primary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{headline}</h2>
          <p className="text-xl text-gray-400 max-w-3xl">{intro}</p>
        </div>

        {/* Use Cases */}
        <div className="space-y-8">
          {cases.map((useCase, idx) => (
            <div
              key={idx}
              className="border border-gray-800 rounded-lg p-8 hover:border-blue-700 transition-all hover:bg-gray-950/50"
            >
              <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>

              <p className="text-gray-400 mb-4">{useCase.description}</p>

              {/* Why */}
              <div className="bg-blue-900/20 border-l-2 border-blue-600 pl-4 py-3 mb-4 rounded">
                <p className="text-sm text-blue-200">
                  <span className="font-bold">Why it matters:</span> {useCase.why}
                </p>
              </div>

              {/* Real Example */}
              <div className="bg-gray-900/50 border border-gray-800 rounded p-4 mb-4">
                <p className="text-sm text-gray-300">
                  <span className="font-mono text-green-400">Example:</span> {useCase.example}
                </p>
              </div>

              {/* Actors */}
              <div className="flex flex-wrap gap-2">
                {useCase.actors.map((actor, actorIdx) => (
                  <span
                    key={actorIdx}
                    className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
                  >
                    {actor}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
