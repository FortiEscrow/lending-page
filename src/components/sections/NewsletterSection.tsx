import { landingContent } from "@/content/landing"

export function NewsletterSection() {
  const { headline, subheading, placeholder, button, promise } =
    landingContent.newsletter

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-900/20 to-blue-900/5 border-y border-gray-800">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-3">{headline}</h2>
        <p className="text-gray-400 mb-8">{subheading}</p>

        {/* Email Form */}
        <form className="flex flex-col sm:flex-row gap-3 mb-4">
          <input
            type="email"
            placeholder={placeholder}
            className="flex-1 px-4 py-3 rounded bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-600"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded font-semibold whitespace-nowrap transition-colors"
          >
            {button}
          </button>
        </form>

        <p className="text-xs text-gray-500">{promise}</p>
      </div>
    </section>
  )
}
