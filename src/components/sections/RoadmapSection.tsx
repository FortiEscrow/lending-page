import { landingContent } from "@/content/landing"

export function RoadmapSection() {
  const { headline, intro, phases, gitHub } = landingContent.roadmap

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-primary to-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{headline}</h2>
          <p className="text-xl text-gray-400 max-w-3xl">{intro}</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-transparent"></div>

          {/* Phases */}
          <div className="space-y-8">
            {phases.map((phase, idx) => (
              <div
                key={idx}
                className={`flex gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
                    {/* Status Badge */}
                    <span
                      className={`inline-block text-xs font-mono px-3 py-1 rounded mb-4 ${
                        phase.status === "In Progress"
                          ? "bg-blue-900/50 text-blue-300"
                          : "bg-gray-800 text-gray-400"
                      }`}
                    >
                      {phase.status}
                    </span>

                    <h3 className="text-2xl font-bold mb-2">{phase.phase}</h3>
                    <p className="text-gray-400 text-sm mb-4 font-mono">
                      {phase.timeline}
                    </p>

                    {/* Deliverables */}
                    <ul className="space-y-2">
                      {phase.deliverables.map((deliverable, delIdx) => (
                        <li key={delIdx} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-green-400 flex-shrink-0">✓</span>
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline dot (hidden on mobile) */}
                <div className="hidden md:flex items-center justify-center">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      phase.status === "In Progress"
                        ? "bg-blue-600 border-blue-400"
                        : "bg-gray-800 border-gray-600"
                    }`}
                  ></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:flex flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Link */}
        <div className="mt-16 text-center">
          <p className="text-gray-400">
            <span className="font-mono text-blue-400">{gitHub}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
