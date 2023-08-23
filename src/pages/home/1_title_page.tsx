import { ButtonBar } from "@/widgets/buttonBar"
import { PageProps, PAGES } from "./home"

export const Start = ({ setPage }: PageProps) => {
  return (
    <div className="page-container">
      <div className="content-container">
        <h1 className="text-8xl text-white font-bold ">Tailwind</h1>
        <span className="text-white text-2xl mt-5">Highly customized stuff done faster!</span>
      </div>
      <ButtonBar
        nextPage={() => {
          setPage(PAGES.WHY)
        }}
        prevPage={() => {
          setPage(PAGES.START)
        }}
      />
    </div>
  )
}
