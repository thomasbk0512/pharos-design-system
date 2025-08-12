'use client'
import * as React from 'react'
import { cn } from '@/lib/utils'

interface TocSection {
  id: string
  label: string
}

export function DocsToc({ sections }: { sections: TocSection[] }) {
  const [activeSection, setActiveSection] = React.useState<string>('')

  React.useEffect(() => {
    const updateActiveSection = () => {
      const hash = window.location.hash.slice(1)
      setActiveSection(hash)
    }

    // Set initial active section
    updateActiveSection()

    // Listen for hash changes
    window.addEventListener('hashchange', updateActiveSection)
    return () => window.removeEventListener('hashchange', updateActiveSection)
  }, [])

  return (
    <nav className="sticky top-6 rounded-2xl border border-slate-200 bg-white shadow-pharos-sm p-3">
      <div className="grid gap-2">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={cn(
              'text-sm text-slate-600 hover:text-slate-900 transition-colors',
              activeSection === section.id && 'font-medium text-slate-900'
            )}
          >
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
