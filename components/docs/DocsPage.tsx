import * as React from 'react'

export function DocsPage({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 space-y-4">
      {children}
    </main>
  )
}
