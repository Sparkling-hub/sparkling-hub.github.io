

import React from 'react';
import dataServices from '../../data/data-services'
import IService from '../../interface/service'
import Service from '../service'


const Services: React.FC<IService> = () => {

	return (

		<div className='flex pb-40 justify-start 2xl:flex-row flex-col 2xl: items-start items-center m-auto'>

			{dataServices.map((service) => (
				<Service key={service.index} {...service} />
			))}

		</div>

	);
	
};

export default Services;