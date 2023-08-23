import { useState } from "react"

import "./home.scss"

import { Start } from "./1_title_page"
import { Why } from "./2_why"
import { How } from "./3_how"
import { Where } from "./5_where"
import { DeadCode } from "./4_dead_code"
import { Responsive } from "./10_responsive"
import { Flex1 } from "./6_flex_1"
import { Flex2 } from "./7_flex_2"
import { Gird } from "./8_grid"
import { Buttons } from "./9_buttons"
import { End } from "./end"
import { Animations } from "../11_animations"
import { usePresentationStore } from "@/store/page-store"

export enum PAGES {
  START = "START",
  WHY = "WHY",
  HOW = "HOW",
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

export type PageProps = {
  // setPage: (page: PAGES) => void
}

export const Home = () => {
  const [_, setPage] = useState<PAGES>(PAGES.START)

  const { page } = usePresentationStore()
  return (
    <div className="home-container">
      {
        {
          [PAGES.START]: <Start />,
          [PAGES.WHY]: <Why />,
          [PAGES.HOW]: <How />,
          [PAGES.DEAD_CODE]: <DeadCode />,

          [PAGES.WHERE]: <Where />,
          [PAGES.FLEX]: <Flex1 />,
          [PAGES.FLEX2]: <Flex2 />,
          [PAGES.GRID]: <Gird />,

          [PAGES.BUTTON]: <Buttons />,
          [PAGES.RESPONSIVE]: <Responsive />,
          [PAGES.ANIMATION]: <Animations />,
          [PAGES.END]: <End />,
        }[page]
      }
    </div>
  )
}
