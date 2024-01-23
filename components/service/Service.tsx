import React, { useEffect } from 'react';
import IService from '../../interface/service';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service: React.FC<IService> = ({ content, header, image, button, index }) => {
	const uniqueId = `aos-${index}`;
  useEffect(() => {
    // Set a unique identifier for each component

    AOS.init({
      duration: 1000,
      once: false,

    });

    // Refresh AOS to apply changes
    AOS.refresh();

    // Destroy AOS instance for the specific component when the component is unmounted
    return () => {
      AOS.refreshHard(); // Hard refresh to reset all animations
    };
  }, [index]);

  return (
    <div className='flex-col pb-[40px] w-full lg:w-1/3 lg:p-[20px] h-full text-center lg:h-[700px]' data-aos-delay={400*(index)} data-aos={`zoom-in`}id ={uniqueId}>
      <div className='service_icon flex justify-center h-96 lg:h-[200px] w-full'>{image}</div>
      <div className='mb-4 lg:mb-8  flex items-first justify-center text-4xl text-medium lg:h-[80px]'>{header}</div>
      <div className='2xl:h-[300px] xl:h-[350px] text-xl lg:h-[370px]'>{content}</div>
      <div className='flex justify-center mt-2'>{button}</div>
    </div>
  );
};

export default Service;
