'use client'

export function DeprecatedBadge({ since, removeIn }: { since: string; removeIn?: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-100 px-2 py-0.5 text-xs text-amber-700">
      Deprecated {since}{removeIn ? ` • removes ${removeIn}` : ''}
    </span>
  )
}
