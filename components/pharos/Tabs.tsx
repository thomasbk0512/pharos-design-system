'use client'
import * as React from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

export function PharosTabs({ value = 'one' }: { value?: string }) {
  return (
    <Tabs value={value} className="pointer-events-none">
      <TabsList className="rounded-xl">
        <TabsTrigger value="one" className="rounded-lg">Overview</TabsTrigger>
        <TabsTrigger value="two" className="rounded-lg">Alerts</TabsTrigger>
        <TabsTrigger value="three" className="rounded-lg">Performance</TabsTrigger>
      </TabsList>
      <TabsContent value="one" className="mt-3 text-sm text-slate-700">Overview content (static)</TabsContent>
      <TabsContent value="two" className="mt-3 text-sm text-slate-700">Alerts content (static)</TabsContent>
      <TabsContent value="three" className="mt-3 text-sm text-slate-700">Performance content (static)</TabsContent>
    </Tabs>
  )
}
