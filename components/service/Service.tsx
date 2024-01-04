

import React from 'react';
import IService from '../../interface/service'


const Service: React.FC<IService> = ({ content, header, image, button }) => {

	return (
		<div className='flex-col w-1/3 pb-40 h-full ml-[15px]'>
			<div className='service_icon'>{image} </div>
			{header}
			{content}
			{button}
		</div>

	);
};

export default Service;

