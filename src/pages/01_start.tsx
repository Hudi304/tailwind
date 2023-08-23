import { PageProps } from "./home/home"
import TailwindLogo from "@/assets/tailwind-logo.svg"

export const Start = ({}: PageProps) => {
  return (
    <div className="page-container mt-[200px]">
      <div className="content-container">
        <div className="flex items-center ">
          <img className="w-60 h-60" src={TailwindLogo} />
          <h1 className="text-8xl text-white font-bold ">tailwindcss</h1>
        </div>

        <span className="text-white text-2xl mt-5">Highly customized stuff done faster!</span>
      </div>
    </div>
  )
}
