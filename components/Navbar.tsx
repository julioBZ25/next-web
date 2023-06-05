'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineCloseCircle} from 'react-icons/ai';
import NavLogo from '../public/assets/logo.png';
import Image from 'next/image';
import LangSwitcher from './LangSwitcher';
import { BiBrain, BiFile, BiUser, BiCommentAdd, BiWorld } from "react-icons/bi";

type Props = {
  messages: {
    About: string,
    Skills: string,
    Projects: string,
    Contact: string
  }
  locale: string
}

const Navbar = ({messages, locale}: Props) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prev) => !prev);
  }

  return (
    <nav className=' bg-[#2A23EB] fixed w-full h-[80px] z-20 top-0 left-0 flex items-center justify-center'>
      <div className="max-w-screen-xl w-full flex flex-wrap items-center justify-between p-4">
        <Link href={`/${locale}/#home`}>
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
          <ul className='hidden md:flex text-[#FFFFFF] gap-4 lg:gap-[59px]'>
            <Link href={`/${locale}/#about`} scroll={false}>
              <li className='text-md capitalize hover:text-[#5651e5]'>{messages.About}</li>
            </Link>
            <Link href={`/${locale}/#skills`} scroll={false}>
              <li className=' text-md capitalize hover:text-[#5651e5]'>{messages.Skills}</li>
            </Link>
            <Link href={`/${locale}/#projects`} scroll={false}>
              <li className=' text-md capitalize hover:text-[#5651e5] before:bg-white before:bottom-0 before:h-[3px] before:left-[-3%] before:scale-x-0 before:origin-left before:transition duration-[0.25s] ease-in transform'>
              {messages.Projects}
              </li>
            </Link>
          </ul>
        </div>
        <div className='hidden md:flex flex-row gap-3 items-center'>
          <Link href={`/${locale}/#contact`} className='hidden md:block'>
            <button className='rounded-lg py-1 px-4 bg-[#2A23EB] border border-white text-white font-medium text-xl leading-7 cursor-'>{messages.Contact}</button>
          </Link>
          <div className='h-8 w-px bg-white'></div>
          <div className='flex flex-row items-center gap-2'>
            <BiWorld size={25} color='white'/>
            <LangSwitcher locale={locale} styles="px-1 py-1 rounded-lg bg-[#2A23EB] border border-white text-white cursor-pointer focus:outline-none"/>
          </div>
        </div>
      </div>
      {nav && (
        <div className='md:hidden bg-[#ecf0f3] border border-gray-900 absolute right-[15px] top-[55%] mt-3 py-4 px-6 rounded-lg min-w-[215px] flex flex-col gap-2 justify-end items-start'>
          <ul className='text-sm text-gray-700 flex flex-col gap-4'> 
            <Link href={`/${locale}/#about`} scroll={false}>
              <li className='ml-4 text-sm capitalize hover:text-[#5651e5] flex flex-row gap-4' onClick={handleNav}>
                <BiUser size={20}/>
                {messages.About}
              </li>
            </Link>
            <Link href={`/${locale}/#skills`} scroll={false}>
              <li className='ml-4 text-sm capitalize hover:text-[#5651e5] flex flex-row gap-4' onClick={handleNav}>
                <BiBrain size={20}/>
                {messages.Skills}
              </li>
            </Link>
            <Link href={`/${locale}/#projects`} scroll={false}>
              <li className='ml-4 text-sm capitalize hover:text-[#5651e5] flex flex-row gap-4' onClick={handleNav}>
                <BiFile size={20}/>
                {messages.Projects}
              </li>
            </Link>
            <Link href={`/${locale}/#contact`} scroll={false}>
              <li className='ml-4 text-sm capitalize hover:text-[#5651e5] flex flex-row gap-4' onClick={handleNav}>
                <BiCommentAdd size={20}/>
                {messages.Contact}
              </li>
            </Link>
          </ul>
          <div className='w-full border-b-2 border-[#27232C] py-1'></div>
          <div className='flex flex-row gap-2 items-center justify-center mx-auto'>
            <BiWorld size={25} color='black'/>
            <LangSwitcher locale={locale} styles="text-xs rounded-lg px-1 py-[0.12rem] bg-[#ecf0f3] border border-gray-950 focus:outline-none cursor-pointer"/>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar