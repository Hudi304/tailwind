import { Card } from "@/components/card/card"
import Button from "@/widgets/button/button"
import { PageProps } from "./home/home"

export const Buttons = ({}: PageProps) => {
  return (
    <Card className="bg-gray-800 items-center mt-[200px]">
      <h1 className="text-8xl text-white font-bold ">Buttons!</h1>
      <div className="bg-gray-200 rounded-md mt-[50px]">
        <div className="grid grid-cols-5 stripes-pink gap-5 p-5">
          <Button variant={"primary"}>Button Label</Button>
          <Button variant={"secondary"}>Button Label</Button>
          <Button variant={"ghost"}>Button Label</Button>
          <Button variant={"danger"}>Button Label</Button>
          <Button variant={"success"}>Button Label</Button>

          <Button variant={"primary"} disabled>
            Button Label
          </Button>
          <Button variant={"secondary"} disabled>
            Button Label
          </Button>
          <Button variant={"ghost"} disabled>
            Button Label
          </Button>
          <Button variant={"danger"} disabled>
            Button Label
          </Button>
          <Button className={` bg-yellow-400`}>Button Label</Button>
        </div>
      </div>
    </Card>
  )
}
