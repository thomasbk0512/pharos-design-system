'use client'
import * as React from 'react'

interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

export function PharosTabs({ tabs, defaultTab }: { tabs: Tab[]; defaultTab?: string }) {
  const [activeTab, setActiveTab] = React.useState(defaultTab || tabs[0]?.id)

  return (
    <div className="w-full">
      <div className="flex border-b border-slate-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab.id
                ? 'border-brand text-brand'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  )
}
