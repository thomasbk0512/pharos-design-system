import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
