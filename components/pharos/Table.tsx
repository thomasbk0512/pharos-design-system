'use client'
import * as React from 'react'

export function PharosTable({ rows }: { rows: { name: string; value: string; date: string }[] }) {
  return (
    <div className="overflow-auto rounded-2xl border border-slate-200 shadow-pharos bg-white">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 sticky top-0 z-[1]">
          <tr className="text-left text-slate-600">
            <th className="p-3">Name</th>
            <th className="p-3">Value</th>
            <th className="p-3">Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {rows.map((r, i) => (
            <tr key={i} className="text-slate-800">
              <td className="p-3">{r.name}</td>
              <td className="p-3">{r.value}</td>
              <td className="p-3">{r.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
