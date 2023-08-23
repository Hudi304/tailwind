import { Card } from "@/components/card/card"
import { ButtonBar } from "@/widgets/buttonBar"
import { PageProps, PAGES } from "./home"

export const Gird = ({ setPage }: PageProps) => {
  return (
    <div className="page-container">
      <div className="content-container">
        <Card className="bg-gray-800 items-center grid-card">
          <h1 className="text-8xl text-white font-bold ">Grid</h1>
          <div className="grid-space stripes grid grid-cols-3 grid-rows-3 gap-3 p-3 text-2xl">
            <div className="grid-item w-full h-full bg-cyan-500">01</div>
            <div className="grid-item w-full bg-cyan-600 col-span-2">02</div>
            <div className="grid-item w-full bg-cyan-700 row-start-2 row-span-2 col-start-1 col-span-3">
              03
            </div>
            <div className="grid-item w-full bg-cyan-800 col-start-3 col-span-1 row-start-2 row-span-2">
              04
            </div>
          </div>
        </Card>
      </div>
      <ButtonBar
        nextPage={() => {
          setPage(PAGES.BUTTON)
        }}
        prevPage={() => {
          setPage(PAGES.FLEX2)
        }}
      />
    </div>
  )
}
