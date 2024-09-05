import { Card } from "@/components/card/card"
import { PageProps } from "./home/home"

import { FC } from "react"

type SquareProps = {
  className?: string
}

export const Square: FC<SquareProps> = ({ className = "" }) => {
  return (
    <div className="bg-cyan-700 w-16 h-16 flex items-center justify-center relative rounded-md font-bold text-white">
      01
    </div>
  )
}

export const Flex1 = ({}: PageProps) => {
  return (
    <Card className="bg-gray-800 mt-[200px] min-w-[600px] ">
      <h1 className="text-8xl text-white font-bold ">Cum centram un div?</h1>

      <div className="stripes flex  w-full h-96 rounded mt-6">
        <Square />
      </div>
    </Card>
  )
}
