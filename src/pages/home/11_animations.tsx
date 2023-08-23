import { Card } from "@/components/card/card"
import { ButtonBar } from "@/widgets/buttonBar"
import { PageProps, PAGES } from "./home"

export const Animations = ({}: PageProps) => {
  return (
    <div className="page-container">
      <div className="content-container">
        <Card className="bg-gray-800 items-center">
          <h1 className="text-8xl text-white font-bold ">Animations!</h1>
          <div className="stripes-pink rounded-md flex flex-col gap-10 mt-10 p-5">
            <svg
              className="animate-spin -ml-1 h-32 w-32 text-cyan-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>

            <span className="grid h-32 w-32">
              <span className="animate-ping inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 col-start-1 col-span-1 row-start-1 row-span-1"></span>
              <span className=" w-full h-full inline-flex rounded-full bg-sky-500 col-start-1 col-span-1 row-start-1 row-span-1"></span>
            </span>

            <span className="animate-pulse h-32 w-32 inline-flex rounded-full bg-sky-500"></span>

            <div className="flex justify-center">
              <div className="animate-bounce bg-white dark:bg-slate-800 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
                <span className="h-32 w-32 inline-flex rounded-full bg-sky-500"></span>
              </div>
            </div>

            <div className="w-full stripes">
              {/* <span className=''>
                  <span className="animate-pulse h-10 w-10 inline-flex rounded-full bg-sky-500"></span>
                </span> */}
            </div>
          </div>
        </Card>
      </div>
      <ButtonBar />
    </div>
  )
}
