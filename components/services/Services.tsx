

import React from 'react';
import dataServices from '../../data/data-services'
import IService from '../../interface/service'
import Service from '../service'


const Services: React.FC = () => {

	return (

		<div className='flex pb-40 justify-start lg:flex-row flex-col lg:items-start items-center m-auto'>

			{dataServices.map((service) => (
				<Service key={service.index} {...service} />
			))}

		</div>

	);
	
};

export default Services;