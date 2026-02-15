import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FortiEscrow — Protocol-Grade Escrow Framework on Tezos',
  description: 'Reusable, deterministic, and security-first escrow primitive for Web3',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fortiescrow.com',
    siteName: 'FortiEscrow',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-bg-primary text-text-primary">
        {children}
      </body>
    </html>
  )
}
