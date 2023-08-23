import { Card } from "@/components/card/card"
import { PageProps } from "./home/home"
import tailwind_config from "../assets/tailwind.config.png"

export const How = ({}: PageProps) => {
  return (
    <Card className="bg-gray-800 flex flex-col justify-center items-center mt-[200px]">
      <h1 className="text-8xl text-white font-bold ">Cum functioneaza?</h1>

      <div className="flex items-center">
        <div className="text-white text-3xl mt-5 max-w-[700px]">
          <p>
            Tailwind-ul are un fișier de configurare, tailwind.config.(js | ts | json...). Pe baza
            lui genereaza un număr foarte mare de clase pe care le poți folosi in development.
          </p>

          <p className="pt-3">Hai sa ne uitam la unul.</p>
        </div>
        <img className="h-10" src={tailwind_config} />
      </div>
    </Card>
  )
}
