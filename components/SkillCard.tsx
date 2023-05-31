import Image, { StaticImageData } from 'next/image';

interface Props {
  logo: string,
  source: StaticImageData,
  title: string
}

const SkillCard = ({logo, source, title}: Props) => {
  return (
    <div className='p-6 shadow-xl rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
      <div className='m-auto'>
        <Image src={source} alt={logo} width={64} height={64} />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h3>{title}</h3>
      </div>
    </div>
  </div>
  )
}

export default SkillCard