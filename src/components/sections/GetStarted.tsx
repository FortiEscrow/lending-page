'use client'

import { useState } from 'react'

export function GetStarted() {
  const [copied, setCopied] = useState(false)

  const code = `git clone https://github.com/FortiEscrow/FortiEscrow.git
cd FortiEscrow
pip install -r requirements.txt
pytest tests/ -v`

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="section bg-bg-primary">
      <div className="section-container">
        <h2 className="text-text-primary mb-4">Get Started</h2>
        <p className="text-text-secondary mb-12 max-w-2xl">
          Clone the repository and run the test suite in under a minute.
        </p>

        <div className="max-w-2xl border border-border-default rounded bg-bg-secondary overflow-hidden">
          {/* Terminal header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border-default bg-bg-tertiary">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <button
              onClick={handleCopy}
              className="text-text-tertiary hover:text-text-secondary text-xs font-mono transition-colors"
            >
              {copied ? 'copied!' : 'copy'}
            </button>
          </div>

          {/* Code block */}
          <div className="p-6">
            <pre className="text-sm font-mono leading-relaxed text-text-secondary overflow-x-auto">
              <code>
                <span className="text-text-tertiary">$</span> git clone https://github.com/FortiEscrow/FortiEscrow.git{'\n'}
                <span className="text-text-tertiary">$</span> cd FortiEscrow{'\n'}
                <span className="text-text-tertiary">$</span> pip install -r requirements.txt{'\n'}
                <span className="text-text-tertiary">$</span> pytest tests/ -v
              </code>
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border-default">
          <p className="text-text-tertiary text-sm font-mono">
            FortiEscrow &mdash; by Fortify Labs
          </p>
        </div>
      </div>
    </section>
  )
}
