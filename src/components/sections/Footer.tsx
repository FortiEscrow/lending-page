import { landingContent } from "@/content/landing"

export function Footer() {
  const { tagline, links } = landingContent.footer

  return (
    <footer className="bg-primary border-t border-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top row: Tagline + Quick links */}
        <div className="mb-8 pb-8 border-b border-gray-800">
          <p className="text-gray-400 text-sm mb-8">{tagline}</p>

          <div className="grid md:grid-cols-4 gap-8">
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <h3 className="font-bold mb-4 capitalize">{category}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} FortiEscrow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
