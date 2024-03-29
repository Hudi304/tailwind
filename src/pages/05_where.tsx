import { Card } from "@/components/card/card"
import { ButtonBar } from "@/widgets/buttonBar"
import { PageProps } from "./home/home"

export const Where = ({}: PageProps) => {
  return (
    <Card className="bg-gray-800 flex flex-col justify-center items-center mt-[200px]">
      <h1 className="text-8xl text-white font-bold ">Unde se poate folosi</h1>
      <div className="text-white text-2xl mt-5 ">
        <p>Merge cu orice component based web dev framework,</p>
        <p>which include but are not restricted to:</p>
        <ul className="list-disc ml-44">
          <li>React</li>
          <li>Svelte</li>
          <li>Angular</li>
          <li>Vue</li>
        </ul>
        <p>And many others…</p>
      </div>
    </Card>
  )
}
