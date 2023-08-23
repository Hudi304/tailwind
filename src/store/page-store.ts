import { PAGES } from "@/pages/home/home"
import { create } from "zustand"

export type PresentationState = {
  next_page: () => void
  prev_page: () => void
  page: PAGES
  enum_index: number
}

// prettier-ignore
const { 
  START,
  WHY,
  HOW,
  DEAD_CODE,
  WHERE,
  FLEX,
  FLEX2,
  GRID,
  BUTTON,
  RESPONSIVE,
  ANIMATION,
  END
} = PAGES

// prettier-ignore
const state_arr = [  
  START,
  WHY,
  HOW,
  DEAD_CODE,
  WHERE,
  FLEX,
  FLEX2,
  GRID,
  BUTTON,
  RESPONSIVE,
  ANIMATION,
  END
]

export const usePresentationStore = create<PresentationState>()((set, get) => {
  return {
    enum_index: 0,
    page: PAGES.START,
    next_page: () => {
      const state = get()
      const next_index = state.enum_index + 1

      if (next_index < state_arr.length) {
        set({ enum_index: next_index })
        set({ page: state_arr[next_index] })
      }
    },
    prev_page: () => {
      const state = get()
      const next_index = state.enum_index - 1

      if (next_index > 0) {
        set({ enum_index: next_index })
        set({ page: state_arr[next_index] })
      }
    },
  }
})
