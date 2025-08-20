import * as React from 'react'

export function DocsSection({ id, title, subtitle, children }: { id?: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} data-testid={id ? `section-${id}` : undefined} className="space-y-2">
      <div>
        <h2 className="text-sm font-semibold text-slate-900">{title}</h2>
        {subtitle && <p className="text-sm text-slate-600">{subtitle}</p>}
      </div>
      <div className="grid gap-3">{children}</div>
    </section>
  )
}
