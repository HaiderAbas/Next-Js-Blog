import Image from 'next/image'
import React from 'react'
import logo from "../../../public/logo.png"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { AiOutlineTwitter, AiFillInstagram, } from "react-icons/ai"
import Link from 'next/link'
function Footer() {
  return (
    <footer className='mt-12 text-gray-600 fixed bottom-0 left-0 bg-white w-full'>
      <div className='container mx-auto flex flex-col sm:flex-row items-center py-8'>
        <Link href="/" className='flex item-center cursor-pointer justify-center md:justify-start'>
          <Image src={logo} alt="Image" width={40} height={35} />
          <span className='font-bold  text-md ml-2 text-gray-900 flex justify-center items-center '>Coder,s Blog</span>
        </Link>
        <p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 ' >
          © 2022 Coder,s Blog <a href="" className='text-gray-600 ml-2'>
            ©Coder'sGyan
          </a>
        </p>

        <div className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
          <div className='text-gray-500'>
            <FaFacebookF className='w-5 h-5 ' />
          </div>
          <div className='text-gray-500 ml-3' >
            <AiOutlineTwitter className='w-5 h-5 ' />
          </div>
          <div className='text-gray-500 ml-3'>
            <AiFillInstagram className='w-5 h-5 ' />
          </div>
          <div className='text-gray-500 ml-3'>
            <FaLinkedinIn className='w-5 h-5 ' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer