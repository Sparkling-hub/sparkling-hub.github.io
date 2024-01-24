import React, { useEffect } from 'react';
import IService from '../../interface/service';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service: React.FC<IService> = ({ content, header, image, button, index }) => {
	const uniqueId = `aos-${index}`;
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Set to false to allow the animation to be triggered multiple times on scroll
      mirror: true,
    
    });

    AOS.refresh();
  }, []);

  return (
    <div  className='flex-col pb-[40px] w-full lg:w-1/3 lg:p-[20px] h-full text-center lg:h-[700px]'
    data-aos-delay={200 * index}
    data-aos-once={false} // Set to false for allowing multiple animations on scroll
    data-aos-mirror={true}
    data-aos-offset={-1000}
    data-aos-anchor-placement="top-top"
    data-aos={`fade`}
    id={uniqueId}>
      <div className='service_icon flex justify-center h-96 lg:h-[200px] w-full'>{image}</div>
      <div className='mb-4 lg:mb-8  flex items-first justify-center text-4xl text-medium lg:h-[80px]'>{header}</div>
      <div className='2xl:h-[300px] xl:h-[350px] text-xl lg:h-[370px]'>{content}</div>
      <div className='flex justify-center mt-2'>{button}</div>
    </div>
  );
};

export default Service;
