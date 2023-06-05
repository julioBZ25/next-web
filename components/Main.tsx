/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';

type Props = {
  messages: {
   Intro: string,
   Span: string,
   Body: string,
   Button: string
  },
  locale: string
}


const Main = ({messages, locale}: Props) => {
  return (
    <section id='home' className='w-full h-screen bg-[#2A23EB]'>
      <div className='max-w-[1240px] w-full mx-auto flex justify-center items-center h-full'>
        <div className='flex flex-col justify-center items-center gap-5 md:gap-10 max-w-[1034px]'>
          <p className='uppercase text-[0.5rem] leading-6 sm:leading-[27px] sm:text-lg font-light text-center text-white' style={{letterSpacing: '0.5em'}}>
            {messages.Intro}
          </p>
          <h1 className='font-bold text-[2.5rem] leading-[52px] md:text-[3.5rem] self-stretch text-center md:leading-[88px] text-white'>
            <span className='bg-[#27232C] rounded-md px-4 py-1'>{messages.Span}</span> {messages.Body}
          </h1>
          <Link href={`/${locale}/#projects`}>
            <button className='bg-[#D9FE54] max-w-[252px] h-[57px] px-8 py-4 text-black rounded-md hover:bg-[#BFF400]'>{messages.Button}</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Main
