import { Card } from "@/components/card/card"
import { ButtonBar } from "@/widgets/buttonBar"
import { PageProps } from "./home/home"

export const Responsive = ({}: PageProps) => {
  function getGridItems() {
    const indexes = [...Array(16).keys()]
    return (
      <>
        {indexes.map((index) => (
          <div className="grid-item bg-cyan-500 w-52 h-52">{index}</div>
        ))}
      </>
    )
  }

  return (
    <Card className="bg-gray-800 transition-all duration-500 items-center max-h-[85vh] my-20 ">
      <h1 className="text-8xl text-white font-bold ">Responsive</h1>
      <div className="grid-lg responsive-gird-styles">{getGridItems()}</div>
    </Card>
  )
}
