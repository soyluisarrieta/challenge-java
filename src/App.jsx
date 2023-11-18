import React from 'react'

function App () {
  return (
    <main className='w-full h-screen p-22 flex justify-center items-center bg-[#583391] bg-cover' style={{ backgroundImage: 'url(/bg.png)' }}>
      <div className='w-[1040px] h-[720px] grid grid-cols-12 grid-rows-12 gap-9 [&>div]:rounded-3xl'>

        {/* Slot 1 - Potential */}
        <div className='bg-red-100 col-span-4 row-span-5 flex flex-col justify-between px-6 py-7 bg-cover' style={{ backgroundImage: 'url(/mots.png)' }}>
          <header className='flex justify-between'>
            <span className='border border-black rounded-full px-4 py-1 uppercase'>Potential</span>
            <span className='text-3xl font-medium'>01</span>
          </header>
          <div className='h-28 flex items-end mt-2'>
            <div className='bg-gray-800/20 rounded-full w-24 aspect-square' />
          </div>
          <hr className='border-black my-10' />
          <div className='grow'>
            <h2 className='text-3xl font-serif font-medium mb-3'>It's Alive</h2>
            <p className='text-sm leading-7'>
              The implated bone graft is alive, so it has the potential to continue growing and remodeling.
            </p>
          </div>
          <footer>
            <a href='#' className='flex justify-between items-center'>
              <span className='font-bold text-sm'>Discover More</span>
              <svg width='60px' viewBox='0 0 48.8 19.8'>
                <polygon points='38.9,0 38.2,0.7 46.9,9.4 0,9.4 0,10.4 46.9,10.4 38.2,19.1 38.9,19.8 48.8,9.9 ' />
              </svg>

            </a>
          </footer>
        </div>

        {/* Slot 2 - Logo */}
        <div className='col-span-8 row-span-1 flex'>
          <div className='w-full rounded-3xl border-2 border-[#6739a8] bg-[#512584] flex justify-center items-center'>
            <img className='h-32 object-cover' src='/logo.png' alt='Logo Jaya' />
          </div>

          <div className='w-[150px] flex flex-col gap-6 justify-between ml-9'>
            <div className='w-full h-full rounded-full bg-cover' style={{ backgroundImage: 'url(/gradient-line-top.png)' }} />
            <div className='w-full h-full bg-red-500 rounded-full bg-cover' style={{ backgroundImage: 'url(/gradient-line-mid.png)' }} />
            <div className='w-full h-full bg-[#8b6ae1] rounded-full' />
          </div>
        </div>

        {/* Slot 4 - Grandmother */}
        <div className='bg-indigo-500 col-span-4 row-span-4 bg-cover' style={{ backgroundImage: 'url(/grandmother.png)' }} />

        {/* Slot 5 - Transforming */}
        <div className='text-white bg-gradient-to-tr from-[#c462dc] to-[#4a39aa] col-span-4 row-span-6 px-4 pt-7 pb-5 flex flex-col justify-between'>
          <div className='w-16 h-16 bg-white/50 rounded-full' />
          <div className='grow flex flex-col py-12'>
            <h2 className='text-white font-semibold text-3xl tracking-wide uppercase'>Transforming Skeletal Repair</h2>
            <hr className='w-5/6 h-1.5 border-none bg-gradient-to-l from-pink-300/0 via-orange-500 to-pink-300 my-1' />
            <div className='w-full grow flex justify-end opacity-80'>
              <div className='w-[200px] flex items-center justify-end'>
                <div className='w-7 h-7 shrink-0 bg-white/50 rounded-full' />
                <p className='text-[10px] border-l border-white/50 ml-3 pl-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur .</p>
              </div>
            </div>
          </div>
          <footer className='flex justify-between items-center'>
            <span className=' tracking-widest font-medium'>JAYA</span>
            <a href='#' className='inline-block border border-white rounded-lg py-0.5 px-2.5 tracking-wider text-xs opacity-70'>www.jaya.com</a>
          </footer>
        </div>

        {/* Slot 6 - Typography */}
        <div className='col-span-8 row-span-2 bg-[#512584] border-2 border-[#6739a8] text-white/90 flex items-center gap-9 px-8 pt-5 pb-3'>
          <div className='flex flex-col'>
            <span className='font-medium text-4xl'>Aa</span>
            <span className='tracking-wide text-lg'>Familjen Grotesk</span>
          </div>
          <div className='flex flex-col font-serif'>
            <span className='font-medium text-4xl'>Aa</span>
            <span className='tracking-wide text-lg'>Lora Med</span>
          </div>
          <div className='flex flex-col'>
            <span className='font-medium text-4xl'>Aa</span>
            <span className='tracking-wide text-lg'>Inter Reg</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
