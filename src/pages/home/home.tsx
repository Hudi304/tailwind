import { Card } from '@/components/card/card'
import { useState } from 'react'
import { ButtonBar } from './buttonBar'
import "./home.scss"

export enum PAGES {
  START = "START",
  WHY = "WHY",
  HOW = "HOW",
  DEAD_CODE = 'DEAD_CODE',
  WHERE = 'WHERE',
  FLEX = 'FLEX',
  FLEX2 = 'FLEX2',
  GRID = 'GRID',


  BUTTON = 'BUTTON',
  RESPONSIVE = 'RESPONSIVE',
  ANIMATION = 'ANIMATION',
  END = "END"
}

export const Home = () => {
  const [page, setPage] = useState<PAGES>(PAGES.START)
  return (
    <div className="home-container">
      {
        {
          [PAGES.START]: <Start setPage={setPage}></Start>,
          [PAGES.WHY]: <Why setPage={setPage}></Why>,
          [PAGES.HOW]: <How setPage={setPage}></How>,
          [PAGES.DEAD_CODE]: <DeadCode setPage={setPage}></DeadCode>,

          [PAGES.WHERE]: <Where setPage={setPage}></Where>,
          [PAGES.FLEX]: <Flex1 setPage={setPage}></Flex1>,
          [PAGES.FLEX2]: <Flex2 setPage={setPage}></Flex2>,
          [PAGES.GRID]: <Gird setPage={setPage}></Gird>,


          [PAGES.BUTTON]: <Flex1 setPage={setPage}></Flex1>,
          [PAGES.RESPONSIVE]: <Responsive setPage={setPage}></Responsive>,
          [PAGES.ANIMATION]: <Flex1 setPage={setPage}></Flex1>,
          [PAGES.END]: <Flex1 setPage={setPage}></Flex1>,
        }[page]
      }
    </div>
  )
}

export type PageProps = {
  setPage: (page: PAGES) => void
}

export const Start = ({ setPage }: PageProps) => {

  return (
    <div className="page-container">
      <div className='content-container'>
        <h1 className='text-8xl text-white font-bold '>Tailwind</h1>
        <span className='text-white text-2xl mt-5'>Highly customized stuff done faster!</span>
        {/* <span className='text-white text-2xl mt-5'>grid + felx</span>
        <span className='text-white text-2xl mt-5'>cava basic  un buton</span>
        <span className='text-white text-2xl mt-5'>cava responseive media querryes</span>
        <span className='text-white text-2xl mt-5'>o mica animatie</span> */}
      </div>
      <ButtonBar nextPage={() => { setPage(PAGES.WHY) }} prevPage={() => { setPage(PAGES.START) }} />
    </div>
  )
}

export const Why = ({ setPage }: PageProps) => {
  return (
    <div className="page-container">
      <div className='content-container'>
        <Card className='bg-gray-800 flex flex-col justify-center items-center'>
          <h1 className='text-8xl text-white font-bold '>
            Ce rezolva?
          </h1>
          <div className='text-white text-2xl mt-10 '>
            <ul className='list-disc'>
              <li>Open source CSS framework</li>
              <li>It’s open source so it’s cool, we can look under the hood if we want.</li>
              <li>
                <p>În loc sa scrii clase noi de css de fiecare data cand ai nevoie sa stilizezi ceva,</p>
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
      <ButtonBar nextPage={() => { setPage(PAGES.HOW) }} prevPage={() => { setPage(PAGES.START) }} />
    </div>
  )
}

export const How = ({ setPage }: PageProps) => {
  return (
    <div className="page-container">
      <div className='content-container'>
        <Card className='bg-gray-800 flex flex-col justify-center items-center'>
          <h1 className='text-8xl text-white font-bold '>
            Cum functioneaza?
          </h1>
          <div className='text-white text-2xl mt-5 '>
            <p>
              Tailwind-ul are un fișier de configurare.
            </p>

            <p>
              Pe baza lui genereaza un număr foarte mare de clase
            </p>

            <p>
              pe care le poți folosi in development.
            </p>
          </div>
        </Card>
      </div>
      <ButtonBar nextPage={() => { setPage(PAGES.DEAD_CODE) }} prevPage={() => { setPage(PAGES.WHY) }} />
    </div>
  )
}

export const DeadCode = ({ setPage }: PageProps) => {
  return (
    <div className="page-container">
      <div className='content-container'>
        <Card className='bg-gray-800 flex flex-col justify-center items-center'>
          <h1 className='text-8xl text-white font-bold '>
            Dead code elimination?
          </h1>
          <div className='text-white text-2xl mt-5 '>
            <p>
              La build impacheteaza doar clasele care au fost folosit într-un fișier css global.
            </p>
            <p>
              Devii de la tailwind spun ca și pentru proiecte mari css-ul nu depășește 10kb.
            </p>
            <p>
              (Netfllix top 100 are un css de 6.5kb si foloseste tailwind).
            </p>
          </div>
        </Card>
      </div>
      <ButtonBar nextPage={() => { setPage(PAGES.WHERE) }} prevPage={() => { setPage(PAGES.HOW) }} />
    </div>
  )
}

export const Where = ({ setPage }: PageProps) => {
  return (
    <div className="page-container">
      <div className='content-container'>
        <Card className='bg-gray-800 flex flex-col justify-center items-center'>
          <h1 className='text-8xl text-white font-bold '>
            Unde se poate folosi
          </h1>
          <div className='text-white text-2xl mt-5 '>
            <p>
              Merge cu orice component based web dev framework,
            </p>
            <p>
              which include but are not restricted to:
            </p>
            <ul className='list-disc ml-44'>
              <li>React</li>
              <li>Svelte</li>
              <li>Angular</li>
              <li>Vue</li>
            </ul>
            <p>
              And many others…
            </p>
          </div>
        </Card>
      </div>
      <ButtonBar nextPage={() => { setPage(PAGES.FLEX) }} prevPage={() => { setPage(PAGES.DEAD_CODE) }} />
    </div>
  )
}


export const Flex1 = ({ setPage }: PageProps) => {
  return (
    <div className="page-container">
      <div className='content-container'>
        <Card className='bg-gray-800 flex flex-col justify-center items-center '>
          <h1 className='text-8xl text-white font-bold '>
            Cum centram un div?
          </h1>
          <div className='flex1-bg stripes  flex items-center justify-center'>
            <div className='bg-cyan-700 w-10 h-10 flex items-center justify-center relative rounded-md font-bold text-white'>
              01
            </div>
          </div>
        </Card>
      </div>
      <ButtonBar nextPage={() => { setPage(PAGES.FLEX2) }} prevPage={() => { setPage(PAGES.WHERE) }} />
    </div>
  )
}


export const Flex2 = ({ setPage }: PageProps) => {

  return (
    <div className="page-container">
      <div className='content-container'>
        <Card className='bg-gray-800 flex flex-col justify-center items-center w-1/2'>
          <h1 className='text-8xl text-white font-bold '>
            Flex
          </h1>
          <div className='w-full stripes rounded-md flex gap-5 items-end justify-end mt-10 '>
            <div className='flex-item w-10 bg-cyan-500'>
              01
            </div>

            <div className='flex-item w-24 bg-cyan-600'>
              02
            </div>

            <div className='flex-item w-10 bg-cyan-700'>
              03
            </div>
          </div>
        </Card>
      </div>
      <ButtonBar nextPage={() => { setPage(PAGES.GRID) }} prevPage={() => { setPage(PAGES.FLEX) }} />
    </div>
  )
}

export const Gird = ({ setPage }: PageProps) => {

  return (
    <div className="page-container">
      <div className='content-container'>
        <Card className='bg-gray-800 items-center grid-card'>
          <h1 className='text-8xl text-white font-bold '>
            Grid
          </h1>
          <div className='grid-space stripes grid grid-cols-3 grid-rows-3 gap-3 p-3 text-2xl'>
            <div className='grid-item w-full h-full bg-cyan-500'>
              01
            </div>
            <div className='grid-item w-full bg-cyan-600 col-span-2'>
              02
            </div>
            <div className='grid-item w-full bg-cyan-700 row-start-2 row-span-2 col-start-1 col-span-3'>
              03
            </div>
            <div className='grid-item w-full bg-cyan-800 col-start-3 col-span-1 row-start-2 row-span-2'>
              04
            </div>
          </div>
        </Card>
      </div>
      <ButtonBar nextPage={() => { setPage(PAGES.RESPONSIVE) }} prevPage={() => { setPage(PAGES.FLEX2) }} />
    </div>
  )
}


export const Responsive = ({ setPage }: PageProps) => {

  return (
    <div className="page-container">
      <div className='content-container'>
        <Card className='bg-gray-800 items-center grid-card'>
          <h1 className='text-8xl text-white font-bold '>
            Responsive
          </h1>


        </Card>
      </div >
      <ButtonBar nextPage={() => { setPage(PAGES.RESPONSIVE) }} prevPage={() => { setPage(PAGES.FLEX2) }} />
    </div >
  )
}






