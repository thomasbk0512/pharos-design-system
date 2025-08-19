import * as React from 'react'
import { cn } from '../../lib/utils'

export function PharosCard({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('bg-white border border-slate-200 rounded-2xl shadow-pharos', className)}
      {...props}
    />
  )
}

export function PharosCardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('p-3 pb-2', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function PharosCardContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('p-4', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function PharosCardTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn('text-lg font-semibold text-slate-900 leading-tight', className)}
      {...props}
    >
      {children}
    </h3>
  )
}

// Helper with locked paddings
export function PharosSpecimen({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <PharosCard>
      <div className="p-3 pb-2 border-b border-slate-200">
        <div className="text-sm font-medium">{title}</div>
      </div>
      <div className="p-4">{children}</div>
    </PharosCard>
  )
}
