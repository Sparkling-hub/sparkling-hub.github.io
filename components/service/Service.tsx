

import React from 'react';
import IService from '../../interface/service'


const Service: React.FC<IService> = ({ content, header, image, button }) => {

	return (
		<div className='flex-col pb-[40px] w-[500px] 2xl:w-1/3 2xl:p-[40px] h-full text-center 2xl:h-[900px]'>
			<div className='service_icon flex justify-center 2xl:h-[200px]'>{image} </div>
			<div className='mb-4 2xl:mb-8  flex items-first justify-center text-4xl  text-medium 2xl:h-[80px]'>{header}</div>
			<div className=' 2xl:h-[380px] text-xl '>{content}</div>
			<div className='flex justify-center'>{button}</div>
		</div>

	);
};

export default Service;

