import { landingContent } from "@/content/landing"

export function CTASection() {
  const { primary, secondary, tertiary } = landingContent.cta

  return (
    <section className="py-24 px-4 bg-primary border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Ready to build with FortiEscrow?
        </h2>
        <p className="text-xl text-gray-400 mb-12">
          Protocol-level escrow is here. Start building today.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
          <a href={primary.href} className="btn-primary text-lg px-8 py-4">
            {primary.text}
            <span className="text-xs text-gray-400 block">{primary.subtext}</span>
          </a>

          <a href={secondary.href} className="btn-secondary text-lg px-8 py-4">
            {secondary.text}
            <span className="text-xs text-gray-400 block">{secondary.subtext}</span>
          </a>

          <a href={tertiary.href} className="btn-secondary text-lg px-8 py-4">
            {tertiary.text}
            <span className="text-xs text-gray-400 block">{tertiary.subtext}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
