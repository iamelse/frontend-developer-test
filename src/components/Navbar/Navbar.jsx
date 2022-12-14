/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import AOS from "aos";
import "aos/dist/aos.css";

const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portofolio', href: '#portofolio' },
    { name: 'Client', href: '#client' },
    { name: 'Team', href: '#team'}
  ]

function Navbar() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='max-w-screen-xl px-4 md:px-0 mx-auto'>      
        <Popover>
            <div className='relative py-6 sm:px-6 lg:px-8'>
              <nav data-aos="fade-down" className='relative flex items-center justify-between sm:h-10' aria-label='Global'>
                <div className='flex flex-shrink-0 flex-grow items-center lg:flex-grow-0'>
                  <div className='flex w-full items-center justify-between md:w-auto'>
                    <a href='/'>
                      <img alt='Your Company' className='h-8 w-auto sm:h-10' src='https://tailwindui.com/img/logos/mark.svg?color=black&shade=600'/>
                    </a>
                    <div className='-mr-2 flex items-center md:hidden'>
                      <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                        <span className='sr-only'>Open main menu</span>
                        <FontAwesomeIcon className='h-6 w-6' icon={faBars} aria-hidden='true' />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className='hidden md:ml-10 md:block md:space-x-8 md:pr-4'>
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className='font-medium text-gray-500 hover:text-gray-900 uppercase'>
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter='duration-150 ease-out'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='duration-100 ease-in'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Popover.Panel
                focus
                className='absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden'
              >
                <div className='overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5'>
                  <div className='flex items-center justify-between px-5 pt-4'>
                    <div>
                      <img
                        className='h-8 w-auto'
                        src='https://tailwindui.com/img/logos/mark.svg?color=black&shade=600'
                        alt=''
                      />
                    </div>
                    <div className='-mr-2'>
                      <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                        <span className='sr-only'>Close main menu</span>
                        <FontAwesomeIcon className='h-6 w-6' icon={faTimes} aria-hidden='true' />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className='space-y-1 px-2 pt-2 pb-3'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
        </Popover>
    </div>
  )
}

export default Navbar;