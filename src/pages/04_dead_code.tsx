import { Card } from "@/components/card/card"
import { ButtonBar } from "@/widgets/buttonBar"
import { PageProps } from "./home/home"

export const DeadCode = ({}: PageProps) => {
  return (
    <Card className="bg-gray-800 flex flex-col justify-center items-center mt-[200px]">
      <h1 className="text-6xl text-white font-bold ">Dead code elimination?</h1>
      <div className="text-white text-2xl mt-5  ">
        
        
        
        <p>La build impacheteaza doar clasele care au fost folosit într-un fișier css global.</p>

        <p>Devii de la tailwind spun ca și pentru proiecte mari css-ul nu depășește 10kb.</p>
        
        <p>(Netfllix top 100 are un css de 6.5kb si foloseste tailwind).</p>
      </div>
    </Card>
  )
}
