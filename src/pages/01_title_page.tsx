import { ButtonBar } from "@/widgets/buttonBar"
import { PageProps } from "./home/home"

export const Start = ({}: PageProps) => {
  return (
    <div className="page-container">
      <div className="content-container">
        <h1 className="text-8xl text-white font-bold ">Tailwind</h1>
        <span className="text-white text-2xl mt-5">Highly customized stuff done faster!</span>
      </div>
      <ButtonBar />
    </div>
  )
}
