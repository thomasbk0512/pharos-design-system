import ClientShell from '@/components/ClientShell'
import OptimalPanel from '@/components/recommendations/OptimalPanel'

export default function Page({ searchParams }: { searchParams?: { [k: string]: string } }) {
  const initialAuthed = searchParams?.auth === '1'
  
  return (
    <ClientShell active="Recommendations" initialAuthed={initialAuthed}>
      <OptimalPanel />
    </ClientShell>
  )
}

