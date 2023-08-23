import { Card } from "@/components/card/card"
import { FC } from "react"

import SyntaxHighlighter from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs"

const color =
  "const config = { colors: ({ colors }) => ({ \n" +
  "  inherit: colors.inherit,\n" +
  "  current: colors.current,\n" +
  "  transparent: colors.transparent,\n" +
  "  black: colors.black,\n" +
  "  white: colors.white,\n" +
  "  slate: colors.slate,\n" +
  "  gray: { \n" +
  "    0: '#F1F1EE', \n" +
  "    3: '#D9D9D9', \n" +
  "    4: '#C8C8C8', \n" +
  "    5: '#AEAEAE', \n" +
  "    8: '#3A3A3A', \n" +
  "    9: '#313131', \n" +
  "  }, \n" +
  "  ...\n" +
  "  }) \n" +
  "}\n"

// const screen =
//   "const config = { screens: ({ colors }) => ({ \n" +
//   "  xs: '320px',\n" +
//   "  sm: '640px',\n" +
//   "  md: '768px',\n" +
//   "  lg: '1024px',\n" +
//   "  xl: '1280px',\n" +
//   "  '2xl': '1536px',\n" +
//   "  }) \n" +
//   "}\n"

export const TailwindConfig: FC = () => {
  return (
    <Card className="mt-[100px] text-white text-lg flex max-w-[1200px]">
      <h1 className="text-8xl text-white font-bold mx-auto mb-5">Config</h1>
      <div className="flex">
        <SyntaxHighlighter children={color} language="typescript" style={dracula} />

        <div className="p-3 max-w-[400px] text-lg font-semibold">
          <p>
            Fisierul e foarte mare, o sa gasiti in el definitii la apropae toate proprietatile de
            CSS. Color de exemplu defineste toate proprietatile legate de culoare. (text color,
            backgroundColor, borderColor, ...)
          </p>

          <p>
            In general clasele de tailwind sunt folosite si cu numere dupa ele.
            <div className="flex flex-col mt-4 ">
              <span className="flex gap-2">
                <div className="h-6 w-6 bg-gray-200"></div>
                bg-gray-200
              </span>

              <span className="flex gap-2">
                <div className="h-6 w-6 bg-gray-500"></div>
                bg-gray-500
              </span>

              <span className="flex gap-2">
                <div className="h-6 w-6 bg-gray-800"></div>
                bg-gray-900
              </span>
            </div>
            <div className="flex flex-col mt-4">
              <span className="flex gap-2 text-fuchsia-200">
                <div className="h-6 w-6 bg-fuchsia-200"></div>
                text-fuchsia-200
              </span>
              <span className="flex gap-2 text-fuchsia-500">
                <div className="h-6 w-6 bg-fuchsia-500"></div>
                text-fuchsia-500
              </span>

              <span className="flex gap-2 text-fuchsia-700">
                <div className="h-6 w-6 bg-fuchsia-700"></div>
                text-fuchsia-700
              </span>
            </div>
          </p>
        </div>
      </div>
    </Card>
  )
}
