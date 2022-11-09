import { PAGES } from './home'


export type ButtonBarProps = {
  setPage: (page: PAGES) => void
}


export const ButtonBar = ({ setPage }: ButtonBarProps) => {




  return (
    <div className="flex p-11">
      <button className="p-3 bg-green-700  text-white rounded-3xl h-8 flex items-center justify-center ">
        {"Previous"}
      </button>
      <button className="p-3 bg-green-700 text-white rounded-3xl h-8 flex items-center justify-center ml-auto">
        {"Next"}
      </button>
    </div>
  )
}