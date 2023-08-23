import { Card } from "@/components/card/card"
import { ButtonBar } from "@/widgets/buttonBar"
import { PageProps, PAGES } from "./home"

export const Where = ({ setPage }: PageProps) => {
  return (
    <div className="page-container">
      <div className="content-container">
        <Card className="bg-gray-800 flex flex-col justify-center items-center">
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
      </div>
      <ButtonBar nextPage={() => setPage(PAGES.FLEX)} prevPage={() => setPage(PAGES.DEAD_CODE)} />
    </div>
  )
}
