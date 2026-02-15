import { landingContent } from "@/content/landing"

export function ProblemSection() {
  const { headline, intro, painPoints, stats } = landingContent.problem

  return (
    <section className="py-24 px-4 bg-primary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{headline}</h2>
          <p className="text-xl text-gray-400 max-w-2xl">{intro}</p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {painPoints.map((point, idx) => (
            <div
              key={idx}
              className="border border-gray-800 rounded-lg p-8 hover:border-gray-700 transition-colors"
            >
              <h3 className="text-xl font-bold mb-3">{point.title}</h3>
              <p className="text-gray-400">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gray-900 rounded-lg p-12 grid md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="border-l border-gray-700 pl-6">
              <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-red-400">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
