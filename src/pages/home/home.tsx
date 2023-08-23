import { Card } from "@/components/card/card"
import { useState } from "react"
import Button from "../../widgets/button/button"
import { ButtonBar } from "../../widgets/buttonBar"

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
  setPage: (page: PAGES) => void
}

export const Home = () => {
  const [page, setPage] = useState<PAGES>(PAGES.START)
  return (
    <div className="home-container">
      {
        {
          [PAGES.START]: <Start setPage={setPage}></Start>,
          [PAGES.WHY]: <Why setPage={setPage}></Why>,
          [PAGES.HOW]: <How setPage={setPage}></How>,
          [PAGES.DEAD_CODE]: <DeadCode setPage={setPage}></DeadCode>,

          [PAGES.WHERE]: <Where setPage={setPage}></Where>,
          [PAGES.FLEX]: <Flex1 setPage={setPage}></Flex1>,
          [PAGES.FLEX2]: <Flex2 setPage={setPage}></Flex2>,
          [PAGES.GRID]: <Gird setPage={setPage}></Gird>,

          [PAGES.BUTTON]: <Buttons setPage={setPage}></Buttons>,
          [PAGES.RESPONSIVE]: <Responsive setPage={setPage}></Responsive>,
          [PAGES.ANIMATION]: <Animation setPage={setPage}></Animation>,
          [PAGES.END]: <End setPage={setPage}></End>,
        }[page]
      }
    </div>
  )
}
