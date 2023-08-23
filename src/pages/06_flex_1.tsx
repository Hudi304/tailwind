import { Card } from "@/components/card/card"
import { ButtonBar } from "@/widgets/buttonBar"
import { PageProps } from "./home/home"


export const Flex1 = ({  }: PageProps) => {
  return (
    <div className="page-container">
      <div className="content-container">
        <Card className="bg-gray-800 flex flex-col justify-center items-center ">
          <h1 className="text-8xl text-white font-bold ">Cum centram un div?</h1>
          <div className="flex1-bg stripes  flex items-center justify-center">
            <div className="bg-cyan-700 w-10 h-10 flex items-center justify-center relative rounded-md font-bold text-white">
              01
            </div>
          </div>
        </Card>
      </div>
      <ButtonBar />
    </div>
  )
}
