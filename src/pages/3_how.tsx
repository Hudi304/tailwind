import { Card } from "@/components/card/card"
import { ButtonBar } from "@/widgets/buttonBar"
import { PAGES, PageProps } from "./home"

export const How = ({  }: PageProps) => {
  return (
    <div className="page-container">
      <div className="content-container">
        <Card className="bg-gray-800 flex flex-col justify-center items-center">
          <h1 className="text-8xl text-white font-bold ">Cum functioneaza?</h1>
          <div className="text-white text-2xl mt-5 ">
            <p>Tailwind-ul are un fișier de configurare.</p>

            <p>Pe baza lui genereaza un număr foarte mare de clase</p>

            <p>pe care le poți folosi in development.</p>
          </div>
        </Card>
      </div>
      <ButtonBar />
    </div>
  )
}
