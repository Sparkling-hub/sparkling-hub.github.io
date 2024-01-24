import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import dataStartups from '@/data/data-sections/data-section-startup/data-startup-icons';
import StartupIcon from '@/components/startup-icon';
import Link from 'next/link';

const StartupTechnologiesIconList: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    const totalIcons = dataStartups.length;
    const animationConfig:any = {
      x: [`25%`, '-27%'],
      transition: { duration: 10, repeat: Infinity, repeatType: 'loop', ease: 'linear' },
    };

    controls.start(animationConfig);
  }, [controls]);

  // Duplicate icons for a seamless loop
  const duplicatedIcons = [...dataStartups, ...dataStartups];

  return (
    <div className='flex flex-col justify-center items-center overflow-hidden'>
      <motion.div className='grid grid-flow-col grid-cols-1 grid-rows-1 gap-4 w-fit' animate={controls}>
        {duplicatedIcons.map((startup, index) => (
          <motion.div key={index}>
            <StartupIcon {...startup} />
          </motion.div>
        ))}
      </motion.div>
      <div className='m-20 p-4 underline underline-offset-8 text-teal-500/100 text-xl font-bold hidden lg:flex text-center'>
        <Link className='' href='/contact'>
          The technology you need isn&apos;t here? Contact us to see if we can help!
        </Link>
      </div>
    </div>
  );
};

export default StartupTechnologiesIconList;
