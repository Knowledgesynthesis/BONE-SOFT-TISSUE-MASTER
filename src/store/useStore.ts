import { create } from 'zustand'

interface AppState {
  // Theme
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void
  toggleTheme: () => void

  // Session-only assessment state
  currentQuizAnswers: Record<string, string>
  setQuizAnswer: (questionId: string, answer: string) => void
  clearQuizAnswers: () => void

  // Current quiz score (session only)
  currentScore: { correct: number; total: number } | null
  setCurrentScore: (score: { correct: number; total: number }) => void
  clearCurrentScore: () => void
}

const useStore = create<AppState>((set) => ({
  // Initialize theme from system preference
  theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',

  setTheme: (theme) => {
    set({ theme })
    document.documentElement.classList.toggle('dark', theme === 'dark')
  },

  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light'
      document.documentElement.classList.toggle('dark', newTheme === 'dark')
      return { theme: newTheme }
    }),

  // Quiz state (session-only, no persistence)
  currentQuizAnswers: {},
  setQuizAnswer: (questionId, answer) =>
    set((state) => ({
      currentQuizAnswers: { ...state.currentQuizAnswers, [questionId]: answer }
    })),
  clearQuizAnswers: () => set({ currentQuizAnswers: {} }),

  // Score state (session-only)
  currentScore: null,
  setCurrentScore: (score) => set({ currentScore: score }),
  clearCurrentScore: () => set({ currentScore: null })
}))

export default useStore
