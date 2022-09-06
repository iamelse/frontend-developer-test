import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function Footer() {
  return (
    <div className='max-w-screen-xl px-4 md:px-0 mx-auto'>
        <section id='team' className='relative sm:px-6 lg:px-8'>
            <footer className="py-4 bg-white sm:py-6">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center">
                            <img src="https://tailwindui.com/img/logos/mark.svg?color=black&shade=600" className="mr-4 h-10" alt="Logo"/>
                            <span className="self-center text-xl font-semibold whitespace-nowrap">Your Company</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h3>
                            <ul>
                                <li className='mb-4'>
                                    <a href="https://tailwindcss.com/" rel="nofollow" className="text-gray-600 hover:underline">Tailwind CSS</a>
                                </li>
                                
                                <li>
                                    <a href="https://reactjs.org/" rel="nofollow" className="text-gray-600 hover:underline">React Js</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h3>
                            <ul>
                                <li className="mb-4">
                                    <a href="https://github.com/iamelse" className="text-gray-600 hover:underline">Github</a>
                                </li>

                                <li>
                                    <a href="https://www.linkedin.com/in/iamelse/" className="text-gray-600 hover:underline">Linked In</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h3>
                            <ul>
                                <li className="mb-4">
                                    <a href="/" className="text-gray-600 hover:underline">Privacy Policy</a>
                                </li>

                                <li>
                                    <a href="/" className="text-gray-600 hover:underline">Terms & Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8"/>
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="flex text-sm text-gray-500 justify-center">© 2022 Your Company™. All Rights Reserved.</span>
                    <div className="flex mt-4 text-sm text-gray-500 space-x-6 justify-center sm:mt-0">
                        Made with <FontAwesomeIcon className='mx-1 h-5 w-5 text-red-500' icon={faHeart} aria-hidden='true' /> by Lana Septiana
                    </div>
                </div>
            </footer>
        </section>
    </div>
  )
}

export default Footer