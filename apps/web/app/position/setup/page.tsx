import ClientShell from '@/components/ClientShell'
import SetupForm from '@/components/position/SetupForm'

export default function Page({ searchParams }: { searchParams?: { [k: string]: string } }) {
  const initialAuthed = searchParams?.auth === '1'
  
  return (
    <ClientShell active="Position" initialAuthed={initialAuthed}>
      <SetupForm />
    </ClientShell>
  )
}

