import { Card } from "@/components/card/card"
import { ButtonBar } from "@/widgets/buttonBar"
import { PageProps } from "./home/home"

export const Flex2 = ({}: PageProps) => {
  return (
    <Card className="bg-gray-800 flex flex-col justify-center items-center w-1/2 mt-[200px]">
      <h1 className="text-8xl text-white font-bold ">Flex</h1>
      <div className="w-full stripes rounded-md flex gap-5  mt-10 ">
        <div className="flex-item w-10 bg-cyan-500">01</div>

        <div className="flex-item w-24 bg-cyan-600">02</div>

        <div className="flex-item w-10 bg-cyan-700">03</div>
      </div>
    </Card>
  )
}
