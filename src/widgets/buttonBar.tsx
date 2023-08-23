import { usePresentationStore } from "@/store/page-store"

export type ButtonBarProps = {}

export const ButtonBar = ({}: ButtonBarProps) => {
  const { next_page, prev_page } = usePresentationStore()

  return (
    // <div className="flex p-11">
    //   <button
    //     className="p-3 bg-green-700  text-white rounded-3xl h-8 flex items-center justify-center"
    //     onClick={() => prev_page()}
    //   >
    //     {"Previous"}
    //   </button>
    //   <button
    //     className="p-3 bg-green-700 text-white rounded-3xl h-8 flex items-center justify-center ml-auto"
    //     onClick={() => next_page()}
    //   >
    //     {"Next"}
    //   </button>
    // </div>
    null
  )
}
