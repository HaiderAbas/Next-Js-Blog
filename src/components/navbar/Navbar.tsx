import Image from 'next/image'
import React from 'react'
import logo from "../../../public/logo.png"

function Navbar() {
  return (
    <nav>
      <div className='flex justify-between items-center py-6'>
        <div className='flex item-center cursor-pointer'>
          <Image src={logo} alt="Image" width={40} height={35} />
          <span className='font-bold ml-2 text-green-600 '>Coder,s Blog</span>
        </div>
        <div>
          <ul className='flex items-center'>
            <li className='mr-6 font-medium text-gray-600'>
              <a href="#">Products</a>
            </li>
            <li className='mr-6 font-medium text-gray-600'>
              <a href="#">pricing</a>
            </li>
            <li className='mr-6 font-medium text-gray-600'>
              <a href="#">Docs</a>
            </li>
            <li className='mr-6 font-medium text-gray-600'>
              <a href="#">Company</a>
            </li>
          </ul>
        </div>
        <ul className='flex items-center'>
          <li>
            <a href="#" className='hover:text-gray-400'>Log in</a>
          </li>
          <li>
            <a href="#" className='bg-green-600 py-2 px-4 rounded-sm text-white ml-3 hover:bg-green-700 transition-all'>Sign up</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar