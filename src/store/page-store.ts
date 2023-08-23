import { PAGES } from "@/pages/home/home"
import { create } from "zustand"

export type UserState = {
  next_page: () => void
  prev_page: () => void
  current_page: PAGES
}

export const useUserStore = create<UserState>()((set, get) => {
  return {
    current_page: PAGES.START,
    next_page: () => {},
    prev_page: () => {},
  }
})
