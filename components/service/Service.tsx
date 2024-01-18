

import React from 'react';
import IService from '../../interface/service'


const Service: React.FC<IService> = ({ content, header, image, button }) => {

	return (
		<div className='flex-col lg:w-1/3 p-[40px]   h-full text-center'>
			<div className='service_icon flex justify-center'>{image} </div>
			<div className='mb-8 flex items-first justify-center h-24'>{header}</div>
			{content}
			<div className='flex justify-center'>{button}</div>
		</div>

	);
};

export default Service;

