

import React from 'react';
import IService from '../../interface/service'


const Service: React.FC<IService> = ({ content, header, image, button, index }) => {

	return (
		<div className={`flex-col pb-[50px] w-full lg:w-1/3 lg:px-[20px] h-full text-center 2xl:h-[700px] xl:h-[750px] lg:h-[800px] bg-white m-2 rounded-3xl ${(index)%2==0?'lg:mt-[100px]':""}`}>
			<div className='service_icon flex justify-center w-96 lg:h-[200px] w-full'>{image} </div>
			<div className='mb-4 lg:mb-8  flex items-first justify-center text-4xl text-medium lg:h-[80px]'>{header}</div>
			<div className='2xl:h-[300px] xl:h-[350px] text-xl px-[30px] lg:px-0   lg:h-[400px]'>{content}</div>
			<div className='flex justify-center my-2'>{button}</div>
		</div>

	);
};

export default Service;

