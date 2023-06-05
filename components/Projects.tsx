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

type Props = {
  messages: {
    Title: string,
    Subtitle: string,
    Descriptions: {
      Eatable: string,
      Tweetable: string,
      Doable: string,
      Expensable: string,
    },
    Button: string
  }
}

const Projects = ({messages}: Props) => {
  return (
    <section id='projects' className='w-full lg:h-screen px-4 pt-28 mt-4 min-[850px]:pt-32'>
      <div className='max-w-[1240px] mx-auto relative '>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>{messages.Title}</p>
        <h2 className='py-4'>{messages.Subtitle}</h2>
        <div className='grid lg:grid-cols-3 gap-16 md:grid-cols-2 my-8'>
          <ProjectCard description={messages.Descriptions.Eatable} backgroundImg={eatableImg} projectUrl={'https://github.com/julioBZ25/react-eatable'} color={'#86E1F9'} button={messages.Button}>
            <DiReact size={28}/>
          </ProjectCard>
          <ProjectCard description={messages.Descriptions.Tweetable} backgroundImg={tweetableImg} projectUrl={'https://github.com/julioBZ25/ror-tweetable'} color={'#ef4444'} button={messages.Button}>
            <SiRubyonrails size={25}/>
          </ProjectCard>
          <ProjectCard description={messages.Descriptions.Doable} backgroundImg={doableImg} projectUrl={'https://github.com/julioBZ25/js-doable'} color={'yellow'} button={messages.Button}>
            <DiJavascript1 size={28}/>
          </ProjectCard>
          <ProjectCard description={messages.Descriptions.Expensable} backgroundImg={expensableImg} color={'#86E1F9'} projectUrl={'https://github.com/julioBZ25/react-expensable'} button={messages.Button} >
            <DiReact size={28}/>
          </ProjectCard>
        </div>
      </div>

    </section>
  )
}

export default Projects