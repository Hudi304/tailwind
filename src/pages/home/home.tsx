import { useCallback, useEffect, useState } from "react"

import "./home.scss"

import { PAGES, usePresentationStore } from "@/store/page-store"
import { Start } from "../01_start"
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
import { TailwindConfig } from "../03_tailwind_config"

export type PageProps = {}

export const Home = () => {
  const { page, next_page, prev_page } = usePresentationStore()

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === "ArrowLeft" || event.key === "a") {
      prev_page()
    }

    if (event.key === "ArrowRight" || event.key === "d") {
      next_page()
    }
  }, [])

  useEffect(() => {
    // attach the event listener
    document.addEventListener("keydown", handleKeyPress)
    // remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyPress)
    }
  }, [handleKeyPress])

  return (
    <div className="flex justify-between w-full h-full background_animation">
      <div
        className="h-full w-[200px] hover:opacity-10 bg-gray-700 hover:shadow-2xl opacity-0 transition-all duration-200 mr-5"
        onClick={() => prev_page()}
      />
      {
        {
          [PAGES.START]: <Start />,
          [PAGES.WHY]: <Why />,
          [PAGES.HOW]: <How />,
          [PAGES.CONFIG]: <TailwindConfig />,

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
      <div
        className="h-full w-[200px] hover:opacity-10 bg-gray-700 hover:shadow-md opacity-0 transition-all duration-200 ml-5"
        onClick={next_page}
      ></div>
    </div>
  )
}
