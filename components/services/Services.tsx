

import React from 'react';
import dataServices from '../../data/data-services'
import IService from '../../interface/service'
import Service from '../service'


const Services: React.FC<IService> = () => {

	return (

		<div className='flex lg:justify-end lg:flex-row flex-col justify-center pb-40'>

			{dataServices.map((service) => (
				<Service key={service.index} {...service} />
			))}

		</div>

	);
	
};

export default Services;