

import React from 'react';
import IService from '../../interface/service'


const Service: React.FC<IService> = ({ content, header, image, button }) => {

	return (
		<div className='flex-col w-[350px] mx-[40px]  pb-40 h-full'>
			<div className='service_icon'>{image} </div>
			{header}
			{content}
			{button}
		</div>

	);
};

export default Service;

