

import React from 'react';
import IService from '../../interface/service'


const Service: React.FC<IService> = ({ content, header, image, button }) => {

	return (
		<div className='flex-col pb-[40px] w-[500px] lg:w-1/3 lg:p-[20px] h-full text-center lg:h-[900px]'>
			<div className='service_icon flex justify-center lg:h-[200px]'>{image} </div>
			<div className='mb-4 lg:mb-8  flex items-first justify-center text-4xl  text-medium lg:h-[80px]'>{header}</div>
			<div className=' 2xl:h-[350px] xl:h-[400px]  text-xl lg:h-[500px]'>{content}</div>
			<div className='flex justify-center'>{button}</div>
		</div>

	);
};

export default Service;

