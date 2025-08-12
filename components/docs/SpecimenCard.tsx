import * as React from 'react'
import { PharosCard } from '../pharos/Card'

export function SpecimenCard({ children }: { children: React.ReactNode }) {
  return <PharosCard className="overflow-hidden"><div className="p-4">{children}</div></PharosCard>
}
