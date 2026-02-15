import { landingContent } from "@/content/landing"

export function FAQSection() {
  const { faq } = landingContent

  return (
    <section className="py-24 px-4 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Frequently Asked Questions</h2>

        <div className="space-y-6">
          {faq.map((item, idx) => (
            <details
              key={idx}
              className="group border border-gray-800 rounded-lg p-6 hover:border-blue-700 transition-colors"
            >
              <summary className="cursor-pointer font-bold text-lg flex justify-between items-center">
                <span>{item.q}</span>
                <span className="text-gray-500 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="text-gray-400 mt-4 pl-4">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
