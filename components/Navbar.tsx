'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineCloseCircle} from 'react-icons/ai';
import NavLogo from '../public/assets/logo.png';
import Image from 'next/image';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prev) => !prev);
  }

  return (
    <nav className=' bg-[#2A23EB] fixed w-full z-20 top-0 left-0'>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href='/#home'>
          <Image
            src={NavLogo}
            alt='/'
            width={125}
            height={50}
            className='cursor-pointer'
          />
        </Link>
        <button onClick={handleNav} className='md:hidden text-white'>
          {nav ? (<AiOutlineCloseCircle size={25} />) : (<AiOutlineMenu size={25} />)}
        </button>
        <div className='hidden w-full md:block md:w-auto'>
          <ul className='hidden md:flex text-[#FFFFFF] gap-[59px]'>
            <Link href='/#about' scroll={false}>
              <li className='text-md capitalize hover:text-[#5651e5]'>About</li>
            </Link>
            <Link href='/#skills' scroll={false}>
              <li className=' text-md capitalize hover:text-[#5651e5]'>Skills</li>
            </Link>
            <Link href='/#projects' scroll={false}>
              <li className=' text-md capitalize hover:text-[#5651e5] before:bg-white before:bottom-0 before:h-[3px] before:left-[-3%] before:scale-x-0 before:origin-left before:transition duration-[0.25s] ease-in transform'>
                Projects
              </li>
            </Link>
          </ul>
        </div>
        <Link href='/#contact' className='hidden md:block'>
          <button className='rounded-lg py-4 px-8 bg-[#2A23EB] border border-white text-white font-medium text-xl leading-7 cursor-'>Work with me</button>
        </Link>
      </div>
      {
        nav && (
          <div className='bg-[#ecf0f3] border border-gray-900 absolute right-[15px] top-[55%] mt-3 py-2 px-6 rounded-lg min-w-[150px] flex flex-col gap-2 justify-end items-end;'>
            <ul className='py-2 text-sm text-gray-700 flex flex-col gap-2 text-right'> 
              <Link href='/#about' scroll={false}>
                <li className='ml-4 text-sm capitalize hover:text-[#5651e5]' onClick={handleNav}>About</li>
              </Link>
              <Link href='/#skills' scroll={false}>
                <li className='ml-4 text-sm capitalize hover:text-[#5651e5]' onClick={handleNav}>Skills</li>
              </Link>
              <Link href='/#projects' scroll={false}>
                <li className='ml-4 text-sm capitalize hover:text-[#5651e5]' onClick={handleNav}>
                  Projects
                </li>
              </Link>
            </ul>
            <Link href='/#contact' onClick={handleNav}>
              <button className='rounded-lg py-2 px-4 bg-[#ecf0f3] border border-gray-950 text-gray-800 font-medium text-sm cursor-pointer' >Work with me</button>
            </Link>
          </div>
        )}
      
    </nav>
  )
}

export default Navbar