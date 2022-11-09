import { useState } from 'react'
import { ButtonBar } from './buttonBar'
import "./home.scss"


export enum PAGES {
  START = "START"
}

export const Home = () => {

  const [page, setPage] = useState<PAGES>(PAGES.START)



  return (
    <div className="home-container">
      <div className="content-container">
        {
          {
            [PAGES.START]: <Start></Start>

          }[page]
        }
      </div>
      <ButtonBar setPage={setPage} />
    </div>
  )
}

export const Start = () => {
  return (
    <div className='flex justify-items-center flex-col items-center'>
      <h1 className='text-8xl text-white font-bold'>Tailwind</h1>
      <span className='text-white text-2xl mt-5'>Highly customized stuff done faster!</span>
    </div>
  )
}



