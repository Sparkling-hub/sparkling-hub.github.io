import React from 'react';
import dataStartups from '@/data/data-sections/data-section-startup/data-startup-icons';
import StartupIcon from '@/components/startup-icon';
import Link from 'next/link';


const StartupTechnologiesIconList: React.FC = () => {
  const duplicatedIcons = [...dataStartups, ...dataStartups];

  return (
    <div className='flex flex-col justify-center items-center  overflow-hidden block 2xl:relative 2xl:w-[1500px] right-[110px]'>
      <div className='container marquee-track'>
        <div className='grid grid-flow-col grid-cols-1 grid-rows-1 gap-4 w-fit iconContainer marquee-track'>

          {duplicatedIcons.map((startup) => (
            <div className='startup-icon'  key={startup.index}>
              <StartupIcon {...startup} />
            </div>
          ))}
        </div>
      </div>
      <div className='container-reverse marquee-track-reverse'>
        <div className='grid grid-flow-col grid-cols-1 grid-rows-1 gap-4 w-fit iconContainer marquee-track'>

          {duplicatedIcons.map((startup) => (
            <div className='startup-icon' key={startup.index}> 
              <StartupIcon {...startup} />
            </div>
          ))}
        </div>
      </div>
      <div className='m-20 p-4 underline underline-offset-8 text-teal-500/100 text-xl font-bold hidden lg:flex text-center'>
        <Link className='' href='/contact'>
          The technology you need isn&apos;t here? Contact us to see if we can help!
        </Link>
      </div>
    </div>
  );
};

export default StartupTechnologiesIconList;
