'use client'
import * as React from 'react'

export function Pagination() {
  const btn = 'inline-flex items-center justify-center h-8 min-w-[32px] rounded-xl border border-slate-200 bg-white text-sm text-slate-700 hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2'
  const disabled = 'opacity-60 pointer-events-none'
  const current = 'bg-brand text-white border-transparent'
  return (
    <div className="flex items-center gap-2">
      <button className={`${btn} ${disabled}`} aria-disabled>Prev</button>
      <button className={`${btn} ${current}`}>1</button>
      <button className={btn}>2</button>
      <button className={btn}>3</button>
      <button className={btn}>Next</button>
    </div>
  )
}


