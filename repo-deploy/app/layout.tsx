import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NEXORA AI — The Operating System for Intelligent Real Estate',
  description: 'Enterprise intelligence cloud. Secure every lead. Make every signal intelligent.',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#060606',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-obsidian text-platinum antialiased selection:bg-champagne/25">
        <div id="app-root" className="relative min-h-[100dvh] overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}
