import { create } from "zustand"

export type PresentationState = {
  next_page: () => void
  prev_page: () => void
  page: PAGES
  enum_index: number
}

export enum PAGES {
  START = "START",
  WHY = "WHY",
  HOW = "HOW",
  CONFIG = "CONFIG",

  DEAD_CODE = "DEAD_CODE",
  WHERE = "WHERE",
  FLEX = "FLEX",
  FLEX2 = "FLEX2",
  GRID = "GRID",

  BUTTON = "BUTTON",
  RESPONSIVE = "RESPONSIVE",
  ANIMATION = "ANIMATION",
  END = "END",
}
// prettier-ignore

const state_arr = [  
  PAGES.START,
  PAGES.WHY,
  PAGES.HOW,
  PAGES.CONFIG,

  PAGES.DEAD_CODE,
  PAGES.WHERE,
  PAGES.FLEX,
  PAGES.FLEX2,
  PAGES.GRID,

  PAGES.BUTTON,
  PAGES.RESPONSIVE,
  PAGES.ANIMATION,
  PAGES.END
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

      if (next_index >= 0) {
        set({ enum_index: next_index })
        set({ page: state_arr[next_index] })
      }
    },
  }
})
