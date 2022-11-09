import { Card } from '@/components/card/card'
import { useState } from 'react'
import { ButtonBar } from './buttonBar'
import "./home.scss"

export enum PAGES {
  START = "START",
  WHY = "WHY",
  HOW = "HOW",
  DEAD_CODE = 'DEAD_CODE',
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
          <div className='text-white text-2xl mt-5 '>
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
      <ButtonBar nextPage={() => { setPage(PAGES.DEAD_CODE) }} prevPage={() => { setPage(PAGES.HOW) }} />
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

          </div>
        </Card>
      </div>
      <ButtonBar nextPage={() => { setPage(PAGES.DEAD_CODE) }} prevPage={() => { setPage(PAGES.HOW) }} />
    </div>
  )
}



