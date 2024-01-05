

import React from 'react';
import IService from '../../interface/service'


const Service: React.FC<IService> = ({ content, header, image, button }) => {

	return (
		<div className='flex-col w-1/3 p-[40px]  pb-40 h-full text-center'>
			<div className='service_icon flex justify-center'>{image} </div>
			{header}
			{content}
			<div className='flex justify-center'>{button}</div>
		</div>

	);
};

export default Service;

