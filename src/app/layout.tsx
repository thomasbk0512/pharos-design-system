import type { Metadata } from 'next'
import './globals.css'
import '@/styles/a11y.css'
import '@/styles/dark.css'
import '@/styles/themes.css'
import '@/styles/layout.css'

export const metadata: Metadata = {
  title: 'PHAROS Design System',
  description: 'Calm, readable, predictable.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical fonts for performance */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Defer non-critical analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('requestIdleCallback' in window) {
                requestIdleCallback(() => {
                  // Analytics initialization can go here
                  console.log('Analytics loaded during idle time');
                });
              }
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
