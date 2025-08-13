'use client'
import * as React from 'react'

export function SkeletonSpecimen() {
  return (
    <div className="grid md:grid-cols-2 gap-3 text-sm">
      {/* Rect skeletons */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <div className="font-medium mb-1">Skeleton (rect)</div>
        <div className="grid gap-3">
          <div className="h-6 w-32 rounded-xl bg-slate-200 animate-pulse" />
          <div className="h-4 w-56 rounded-xl bg-slate-200 animate-pulse" />
          <div className="h-24 w-full rounded-2xl bg-slate-200 animate-pulse" />
        </div>
        <p className="text-xs text-slate-600 mt-3">Respect prefers-reduced-motion; use pulse only for initial load.</p>
      </div>

      {/* Circle skeletons */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <div className="font-medium mb-1">Skeleton (circle)</div>
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-full bg-slate-200 animate-pulse" />
          <div className="h-8 w-8 rounded-full bg-slate-200 animate-pulse" />
          <div className="h-10 w-10 rounded-full bg-slate-200 animate-pulse" />
        </div>
        <p className="text-xs text-slate-600 mt-3">Use for avatars or chart probes.</p>
      </div>
    </div>
  )
}
