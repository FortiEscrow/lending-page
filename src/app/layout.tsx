import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FortiEscrow - Secure Lending Platform',
  description: 'Professional escrow and lending solutions',
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
      <body className="bg-primary text-white">
        {children}
      </body>
    </html>
  )
}
