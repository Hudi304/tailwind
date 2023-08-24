import { Card } from "@/components/card/card"
import { ButtonBar } from "@/widgets/buttonBar"
import { PageProps } from "./home/home"

import gif from "../assets/end"

export const End = ({}: PageProps) => {
  return (
    <Card className="bg-gray-800 items-center mt-[100px]">
      <h1 className="text-8xl text-white font-bold  lg:bg-black">That's all Folks!</h1>
      <img src={gif} className="w-96 h-96 opacity-10 " />
    </Card>
  )
}
