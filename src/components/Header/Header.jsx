function Header() {
  return (
    <div className='max-w-screen-xl px-4 md:px-0 mx-auto'>
      <section id='home' className='relative sm:px-6 lg:px-8'>
        <div data-aos="zoom-in" className='container'>
          <div className='flex flex-wrap py-20'>
            <div className='w-full lg:w-2/3 self-start'>
              <h1 className='text-black text-7xl font-bold'>
                Improving people's future through <br /> building
              </h1>
              <div className='button my-3 md:my-5'>
                <button className='bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2.5 px-6 mt-8 rounded-full shadow'>
                  Contact Us
                </button>

                <button className='bg-black hover:bg-gray-800 text-white font-semibold py-2.5 px-6 ml-3 rounded-full shadow'>
                  Getting Start
                </button>
              </div>
            </div>

            <div className='w-full lg:w-1/4 self-end'>
              <p className='md:mb-20 mt-6 md:mt-0 text-gray-600 text-md'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Header;