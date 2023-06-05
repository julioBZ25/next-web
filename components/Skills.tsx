import htmlLogo from '../public/assets/skills/html.png';
import cssLogo from '../public/assets/skills/css.png';
import javascriptLogo from '../public/assets/skills/javascript.png';
import reactLogo from '../public/assets/skills/react.png';
import tailLogo from '../public/assets/skills/tailwind.png';
import angularLogo from '../public/assets/skills/angular1.png';
import nextLogo from '../public/assets/skills/nextjs.png';
import githubLogo from '../public/assets/skills/github1.png';
import SkillCard from './SkillCard';

type Props = {
  messages: {
    Title: string,
    Subtitle: string
  }
}

const Skills = ({messages}: Props) => {
  return (
    <section id='skills' className='w-full lg:h-screen px-4 pt-28 mt-4 min-[850px]:pt-32'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>{messages.Title}</p>
        <h2 className='py-4'>{messages.Subtitle}</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16'>
          <SkillCard logo={'HTML logo'} source={htmlLogo} title={'HTML'}/>
          <SkillCard logo={'CSS logo'} source={cssLogo} title={'CSS'}/>
          <SkillCard logo={'JavaScript logo'} source={javascriptLogo} title={'Javascript'}/>
          <SkillCard logo={'Tailwind logo'} source={tailLogo} title={'Tailwind'}/>
          <SkillCard logo={'React.js logo'} source={reactLogo} title={'React'}/>
          <SkillCard logo={'Angular logo'} source={angularLogo} title={'Angular'}/>
          <SkillCard logo={'Next.js logo'} source={nextLogo} title={'Next.js'}/>
          <SkillCard logo={'Github logo'} source={githubLogo} title={'Github'}/>
        </div>
      </div>
    </section>
  )
}

export default Skills