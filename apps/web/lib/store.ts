import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { PositionDraft, Recommendation } from '@/lib/schemas'

type AppState = {
  draft?: PositionDraft
  perf?: { apr: number; sharpe: number }
  recs: Recommendation[]
  selected?: Recommendation
  isConnected: boolean
  setDraft: (d: PositionDraft) => void
  setPerf: (p: { apr: number; sharpe: number }) => void
  setRecs: (r: Recommendation[]) => void
  selectRec: (r: Recommendation) => void
  setConnected: (v: boolean) => void
  reset: () => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      draft: undefined,
      perf: undefined,
      recs: [],
      selected: undefined,
      isConnected: false,
      setDraft: (d) => set({ draft: d }),
      setPerf: (p) => set({ perf: p }),
      setRecs: (r) => set({ recs: r }),
      selectRec: (r) => set({ selected: r }),
      setConnected: (v) => set({ isConnected: v }),
      reset: () =>
        set({
          draft: undefined,
          perf: undefined,
          recs: [],
          selected: undefined,
          isConnected: false,
        }),
    }),
    {
      name: 'pharos-store',
      storage:
        typeof window !== 'undefined'
          ? createJSONStorage(() => localStorage)
          : undefined, // no storage on server
      partialize: (state) => ({
        draft: state.draft,
        perf: state.perf,
        recs: state.recs,
        selected: state.selected,
        isConnected: state.isConnected,
      }),
      version: 1,
      migrate: (persisted: any, version) => {
        // future-proof: adjust shape here when version bumps
        return persisted
      },
    }
  )
)

// Optional helper if we ever want a one-liner clear:
// export const clearPersist = () => useAppStore.persist?.clearStorage?.()
