import { useState } from "react"

import "./home.scss"

import { PAGES, usePresentationStore } from "@/store/page-store"
import { Start } from "../01_title_page"
import { Why } from "../02_why"
import { How } from "../03_how"
import { DeadCode } from "../04_dead_code"
import { Where } from "../05_where"
import { Flex1 } from "../06_flex_1"
import { Flex2 } from "../07_flex_2"
import { Gird } from "../08_grid"
import { Buttons } from "../09_buttons"
import { Animations } from "../11_animations"
import { Responsive } from "../10_responsive"

import { End } from "../end"

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
