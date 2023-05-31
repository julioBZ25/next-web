/* eslint-disable react/no-unescaped-entities */
import ProjectCard from './ProjectCard';
import eatableImg from '../public/assets/projects/eatable.png';
import tweetableImg from '../public/assets/projects/tweetable.png';
import doableImg from '../public/assets/projects/doable.png';
import expensableImg from '../public/assets/projects/expensable.png';
import { DiReact, DiJavascript1 } from 'react-icons/di';
import { SiRubyonrails } from "react-icons/si";
import Link from 'next/link';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Projects = () => {
  return (
    <section id='projects' className='max-w-[1240px] mx-auto px-4 relative pt-20 sm:pt-32 mt-4'>
      <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
      <h2 className='py-4'>What I've Built</h2>
      <div className='grid lg:grid-cols-3 gap-16 md:grid-cols-2 my-8'>
        <ProjectCard description={'A dashboard web app for different dishes.'} backgroundImg={eatableImg} projectUrl={'https://github.com/julioBZ25/react-eatable'} color={'#86E1F9'}>
          <DiReact size={28}/>
        </ProjectCard>
        <ProjectCard description={'A twitter-like basic web app.'} backgroundImg={tweetableImg} projectUrl={'https://github.com/julioBZ25/ror-tweetable'} color={'#ef4444'}>
          <SiRubyonrails size={25}/>
        </ProjectCard>
        <ProjectCard description={'An enhance to do list web app.'} backgroundImg={doableImg} projectUrl={'https://github.com/julioBZ25/js-doable'} color={'yellow'}>
          <DiJavascript1 size={28}/>
        </ProjectCard>
        <ProjectCard description={'Web-based expense and income management application.'} backgroundImg={expensableImg} color={'#86E1F9'} projectUrl={'https://github.com/julioBZ25/react-expensable'} >
          <DiReact size={28}/>
        </ProjectCard>
      </div>

    </section>
  )
}

export default Projects