import { Card } from "@/components/card/card"
import { ButtonBar } from "@/widgets/buttonBar"
import { PageProps, PAGES } from "./home"

export const End = ({ setPage }: PageProps) => {
  return (
    <div className="page-container">
      <div className="content-container">
        <Card className="bg-gray-800 items-center">
          <h1 className="text-8xl text-white font-bold ">That's all Folks!</h1>
          <img src="end.gif" className="w-96 h-96" alt="dadas" />
        </Card>
      </div>
      <ButtonBar
        nextPage={() => {
          setPage(PAGES.END)
        }}
        prevPage={() => {
          setPage(PAGES.ANIMATION)
        }}
      />
    </div>
  )
}
