import { Card } from "@/components/card/card"
import { ButtonBar } from "@/widgets/buttonBar"
import { PageProps, PAGES } from "./home"

export const Why = ({}: PageProps) => {
  return (
    <div className="page-container">
      <div className="content-container">
        <Card className="bg-gray-800 flex flex-col justify-center items-center">
          <h1 className="text-8xl text-white font-bold ">Ce rezolva?</h1>
          <div className="text-white text-2xl mt-10 ">
            <ul className="list-disc">
              <li>Open source CSS framework</li>
              <li>It’s open source so it’s cool, we can look under the hood if we want.</li>
              <li>
                <p>
                  În loc sa scrii clase noi de css de fiecare data cand ai nevoie sa stilizezi ceva,
                </p>
                <p>
                  poți refolosi un număr foarte mare de clase deja scrise și foarte bine denumite.
                </p>
              </li>
              <li>E mult mai ușor de citit</li>
              <li>Consistent in tot codebase-ul</li>
              <li>Easy to pick up</li>
            </ul>
          </div>
        </Card>
      </div>
      <ButtonBar />
    </div>
  )
}
