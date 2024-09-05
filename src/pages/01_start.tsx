import { PageProps } from "./home/home"
import TailwindLogo from "@/assets/tailwind-logo.svg"
import adam_walton from "../assets/adam_wathan.jpg"

export const Start = ({}: PageProps) => {
  return (
    <div className="page-container mt-[200px]">
      <div className="content-container">
        <div className="flex items-center ">
          <img className="w-60 h-60" src={TailwindLogo} />
          <h1 className="text-8xl text-white font-bold ">tailwindcss</h1>
        </div>

        <p className="text-white text-2xl text-center">Highly customized stuff done faster!</p>

        <div className="border  border-gray-700 bg-gray-600 p-3 bg-opacity-50 rounded-2xl mt-5 max-w-[900px]">
          <p className="text-white text-4xl font-bold">“Best practices” don’t actually work.</p>

          <p className="text-gray-300 font-bold text-xl mt-5 px-10">
            I’ve written a few thousand words on why traditional “semantic class names” are the
            reason CSS is hard to maintain, but the truth is you’re never going to believe me until
            you actually try it. If you can suppress the urge to retch long enough to give it a
            chance, I really think you’ll wonder how you ever worked with CSS any other way.
          </p>

          <div className="flex justify-end m-3">
            <span className="flex items-center gap-5">
              <img className="h-20 w-20 rounded-full" src={adam_walton} />

              <span className="grid grid-rows-2">
                <p className="text-white font-bold text-xl">Adam Wathan</p>
                <p className="text-gray-300 text-xl">Creator of Tailwind CSS</p>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
