import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  backgroundImg?: StaticImageData;
  description: string;
  projectUrl: string;
  color: string;
  button: string;
  children: React.ReactNode;
};

const ProjectCard = ({
  backgroundImg,
  description,
  projectUrl,
  color,
  button,
  children,
}: Props) => {
  return (
    <div className="max-w-[371px] h-[281px] rounded-xl bg-white relative">
      {backgroundImg && (
        <Image
          src={backgroundImg}
          alt="eatable"
          width={371}
          height={140}
          className="rounded-t-lg"
        />
      )}
      <div
        className="rounded-md w-[29px] h-[28px] absolute top-3 right-3 flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        {children}
      </div>
      <div className="bg-white rounded-b-lg px-6 py-[10px] flex flex-col justify-around h-[133px]">
        <p className="text-[#607B96] text-sm md:text-m text-left">
          {description}
        </p>
        <Link href={projectUrl} target="_blank" rel="noreferrer">
          <button className="rounded-xl bg-[#5651E5] px-3 py-2 text-white cursor-pointer hover:bg-[#3D37DF] active:bg-[#5651E5] active:border-[#0E0C58] active:border">
            {button}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
