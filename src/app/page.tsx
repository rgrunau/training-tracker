import Image from 'next/image'
import { Amatic_SC } from 'next/font/google'

const amatic = Amatic_SC({ weight: ['400', '700'], subsets: ['latin'] })
export default function Home() {
  return (
    <main className={`${amatic.className} flex min-h-screen flex-col items-center justify-between bg-orange-400/80`}>
      <div className="w-full flex flex-col items-start justify-start xl:justify-center bg-slate-50/75 min-h-[600px] p-4 ">
        <div className='w-full xl:w-10/12 mx-auto'>
          <div className='w-full xl:w-1/2 flex '>
            <div>  
              <h1 
              className={`text-7xl xl:text-[175px] className="font-extrabold text-transparent text-left xl:text-justify
                bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-red-500 p-0"
              `}
              >
                Training Vibes
              </h1>
            </div>
            <div className='w-full self-end justify-self-end text-right'>
              <p className='text-4xl xl:text-6xl'>Train on feel</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
