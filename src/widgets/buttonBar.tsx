export type ButtonBarProps = {
  nextPage: () => void
  prevPage: () => void
}

export const ButtonBar = ({ nextPage, prevPage }: ButtonBarProps) => {
  return (
    <div className="flex p-11">
      <button
        className="p-3 bg-green-700  text-white rounded-3xl h-8 flex items-center justify-center"
        onClick={() => {
          prevPage()
        }}
      >
        {"Previous"}
      </button>
      <button
        className="p-3 bg-green-700 text-white rounded-3xl h-8 flex items-center justify-center ml-auto"
        onClick={() => {
          nextPage()
        }}
      >
        {"Next"}
      </button>
    </div>
  )
}
