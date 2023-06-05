/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import profileImg from "../public/assets/profile.png"

type Props = {
  messages: {
    About: string,
    Title: string,
    Subtitle: string,
    Body: string
  }
}

const About = ({messages}: Props) => {
  return (
    <section id='about' className='w-full lg:h-screen px-4 py-28 mt-4 min-[850px]:py-32 flex items-center justify-center'>
      <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widset text-[#5651e5]'>{messages.About}</p>
          <h2 className='py-4'>{messages.Title}</h2>
          <p className='py-2 text-gray-600'>{messages.Subtitle}</p>
          <p className='py-2 text-gray-600 text-left md:text-lg'>
            {messages.Body}
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-8'>
          <Image src={profileImg} alt="Julio" width={330} height={330} className='rounded-xl'/>
        </div>
      </div>
    </section>
  )
}

export default About