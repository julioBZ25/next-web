/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section id='about' className='w-full lg:px-4 px-4 flex items-center pt-20 sm:pt-32 mt-4'>
      <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widset text-[#5651e5]'>About</p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>A selfclaim Full Stack developer.</p>
          <p className='py-2 text-gray-600 text-left md:text-lg'>
            Hello! my name is Julio and I'm a Full-Stack web developer 💻 and electronic engineer bachelor ⚡. 
            After a year of experience as an electronic engineer, I decided to take a leap into the technology industry as I found myself drawn to
            the world of web development. For this reason, I joined Codeable, a full stack web development bootcamp to start my path in this
            field. Currently, I am looking for a full stack or front-end development position to continue improving and strengthening my skills.
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center mt-8'>
          <Image src="/../public/assets/profile.png" alt="Julio" width={360} height={360} className='rounded-xl'/>
        </div>
      </div>
    </section>
  )
}

export default About