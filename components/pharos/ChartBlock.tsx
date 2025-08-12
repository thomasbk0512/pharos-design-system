import * as React from 'react'
import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, LineChart, Line, Legend } from 'recharts'

export function PerfVsHodl({ data }: { data: Array<Record<string, number | string>> }) {
  return (
    <div className="h-56">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ left: 0, right: 0, top: 5, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.4} />
          <XAxis dataKey="x" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="vault" stroke="#3538CD" dot={false} />
          <Line type="monotone" dataKey="hodl" stroke="#94a3b8" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
