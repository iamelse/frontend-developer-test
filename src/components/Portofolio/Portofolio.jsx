import React from 'react'

function Portofolio() {
  return (
    <div className='max-w-screen-xl px-4 pb-20 md:px-0 mx-auto'>
      <section id='portofolio' className='relative sm:px-6 lg:px-8'>
        <div className='text-black text-3xl font-bold my-6'>Portofolio</div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-3'>
            <div className='flex flex-col'>
              <img className='aspect-[1/1]' src='https://source.unsplash.com/900x900/?architecture' alt='' />
            </div>
            <div className='flex flex-col'>
              <img className='aspect-[1/1]' src='https://source.unsplash.com/900x900/?architecture' alt='' />
            </div>
            <div className='flex flex-col'>
              <img className='aspect-[1/1]' src='https://source.unsplash.com/900x900/?architecture' alt='' />
            </div>
            <div className='flex flex-col'>
              <img className='aspect-[1/1]' src='https://source.unsplash.com/900x900/?architecture' alt='' />
            </div>
          </div>
      </section>
    </div>
  )
}

export default Portofolio