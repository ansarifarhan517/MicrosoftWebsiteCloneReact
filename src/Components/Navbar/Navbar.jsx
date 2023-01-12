import React, { useState } from 'react'
import Hamburger from './Hamburger'
import msLogo from '../../assets/images/RE1Mu3b.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
const Navbar = () => {
 

  return (
    <nav className='flex justify-between items-center lg:items-end p-4  h-auto w-full'>
      <div className='flex space-x-2 lg:order-2'>
        <Hamburger />
        <div className="search cursor-pointer px-3 lg:hidden">
          <FontAwesomeIcon icon={solid('search')} size="sm" />
        </div>
      </div>
      <div className="flex lg:order-1 items-center lg:items-end">

        <div className="logo mx-4">
          <img src={msLogo} alt="" className='w-[137px] h-full' />
        </div>

        <div className="features lg:space-x-5 absolute inset-0 bg-[#f2f2f2] w-fit -translate-x-full lg:static lg:bg-white lg:w-auto lg:translate-x-0 lg:flex mt-12 lg:mt-0" id='msFeatures'>
          <div
            className="fitems hover:underline hover:underline-offset-8 cursor-pointer p-4 lg:p-0 lg:border-none lg:ml-5 border-[#e6e6e6] border-l border-r border-t text-sm">
            Microsoft 365</div>
          <div
            className="fitems hover:underline hover:underline-offset-8 cursor-pointer p-4 lg:p-0 lg:border-none border-[#e6e6e6] border-l border-r border-t text-sm">
            Teams</div>
          <div
            className="fitems hover:underline hover:underline-offset-8 cursor-pointer p-4 lg:p-0 lg:border-none border-[#e6e6e6] border-l border-r border-t text-sm">
            Windows</div>
          <div
            className="fitems hover:underline hover:underline-offset-8 cursor-pointer p-4 lg:p-0 lg:border-none border-[#e6e6e6] border-l border-r border-t text-sm">
            Surface</div>
          <div
            className="fitems hover:underline hover:underline-offset-8 cursor-pointer p-4 lg:p-0 lg:border-none border-[#e6e6e6] border-l border-r border-t text-sm">
            Xbox</div>
          <div
            className="fitems hover:underline hover:underline-offset-8 cursor-pointer p-4 lg:p-0 lg:border-none border-[#e6e6e6] border-l border-r border-t border-b text-sm">
            Support</div>
        </div>
      </div>
      <div className="flex space-x-2 lg:order-2">
        <div className="hidden dropdown lg:block  hover:underline hover:underline-offset-8 cursor-pointer">
          All Microsoft
        </div>
        <div className="search cursor-pointer px-3 hidden lg:block">
          <FontAwesomeIcon icon={solid('search')} size="lg" />
        </div>
        <div className='cart px-2'>
          <FontAwesomeIcon icon={solid('cart-shopping')} size="lg" />
        </div>
        <div className="Account px-2">
          <FontAwesomeIcon icon={solid('circle-user')} size="lg" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar