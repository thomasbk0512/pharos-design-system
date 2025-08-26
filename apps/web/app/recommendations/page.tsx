import ClientShell from '@/components/ClientShell'
import RecommendationsList from '@/components/recommendations/RecommendationsList'

export default function Page({ searchParams }: { searchParams?: { [k: string]: string } }) {
  const initialAuthed = searchParams?.auth === '1'
  
  return (
    <ClientShell active="Recommendations" initialAuthed={initialAuthed}>
      <RecommendationsList />
    </ClientShell>
  )
}

