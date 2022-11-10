import { Card } from '@/components/card/card'
import { useState } from 'react'
import Button from './button/button'
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


          [PAGES.BUTTON]: <Buttons setPage={setPage}></Buttons>,
          [PAGES.RESPONSIVE]: <Responsive setPage={setPage}></Responsive>,
          [PAGES.ANIMATION]: <Animation setPage={setPage}></Animation>,
          [PAGES.END]: <End setPage={setPage}></End>,
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
      <ButtonBar nextPage={() => { setPage(PAGES.BUTTON) }} prevPage={() => { setPage(PAGES.FLEX2) }} />
    </div>
  )
}

export const Buttons = ({ setPage }: PageProps) => {
  return (
    <div className="page-container">
      <div className='content-container'>
        <Card className='bg-gray-800 items-center'>
          <h1 className='text-8xl text-white font-bold '>
            Buttons!
          </h1>
          <div className='bg-gray-200 rounded-md mt-[50px]'>
            <div className='grid grid-cols-5 stripes-pink gap-5 p-5'>
              <Button variant={'primary'} >Button Label</Button>
              <Button variant={'secondary'} >Button Label</Button>
              <Button variant={'ghost'} >Button Label</Button>
              <Button variant={'danger'} >Button Label</Button>
              <Button variant={'success'} >Button Label</Button>

              <Button variant={'primary'} disabled>Button Label</Button>
              <Button variant={'secondary'} disabled>Button Label</Button>
              <Button variant={'ghost'} disabled>Button Label</Button>
              <Button variant={'danger'} disabled>Button Label</Button>
              <Button variant={'success'} disabled>Button Label</Button>
            </div>
          </div>
        </Card>
      </div >
      <ButtonBar nextPage={() => { setPage(PAGES.RESPONSIVE) }} prevPage={() => { setPage(PAGES.GRID) }} />
    </div >
  )
}

export const Responsive = ({ setPage }: PageProps) => {
  function getGridItems() {
    const indexes = [...Array(16).keys()]
    return (
      <>
        {
          indexes.map(index =>
            <div className='grid-item bg-cyan-500 w-52 h-52'>
              {index}
            </div>
          )
        }
      </>
    )
  }

  return (
    <div className="page-container">
      <div className='content-container'>
        <Card className='bg-gray-800 items-center'>
          <h1 className='text-8xl text-white font-bold '>
            Responsive
          </h1>
          <div className='grid-lg responsive-gird-styles'>
            {getGridItems()}
          </div>
        </Card>
      </div >
      <ButtonBar nextPage={() => { setPage(PAGES.ANIMATION) }} prevPage={() => { setPage(PAGES.BUTTON) }} />
    </div >
  )
}


export const Animation = ({ setPage }: PageProps) => {


  return (
    <div className="page-container">
      <div className='content-container'>
        <Card className='bg-gray-800 items-center'>
          <h1 className='text-8xl text-white font-bold '>
            Animations!
          </h1>
          <div className='stripes-pink rounded-md flex flex-col gap-10 mt-10 p-5'>
            <svg className="animate-spin -ml-1 h-32 w-32 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>

            <span className="grid h-32 w-32">
              <span className="animate-ping inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 col-start-1 col-span-1 row-start-1 row-span-1"></span>
              <span className=" w-full h-full inline-flex rounded-full bg-sky-500 col-start-1 col-span-1 row-start-1 row-span-1"></span>
            </span>

            <span className="animate-pulse h-32 w-32 inline-flex rounded-full bg-sky-500"></span>

            <div className="flex justify-center">
              <div className="animate-bounce bg-white dark:bg-slate-800 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
                <span className="h-32 w-32 inline-flex rounded-full bg-sky-500"></span>
              </div>
            </div>

            <div className='w-full stripes'>
              {/* <span className=''>
                <span className="animate-pulse h-10 w-10 inline-flex rounded-full bg-sky-500"></span>
              </span> */}
            </div>
          </div>
        </Card>
      </div >
      <ButtonBar nextPage={() => { setPage(PAGES.END) }} prevPage={() => { setPage(PAGES.RESPONSIVE) }} />
    </div >
  )
}

export const End = ({ setPage }: PageProps) => {
  return (
    <div className="page-container">
      <div className='content-container'>
        <Card className='bg-gray-800 items-center'>
          <h1 className='text-8xl text-white font-bold '>
            That's all Folks!
          </h1>
          <img src='end.gif' className='w-96 h-96' alt='dadas' />
        </Card>
      </div >
      <ButtonBar nextPage={() => { setPage(PAGES.END) }} prevPage={() => { setPage(PAGES.ANIMATION) }} />
    </div >
  )
}











