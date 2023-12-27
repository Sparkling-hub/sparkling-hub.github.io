

import React from 'react';
import dataStartups from '@/data/data-sections/data-section-startup/data-startup-items'
import Startup from '../startup';


const StartupItemList: React.FC = () => {

	return (

		<div className='flex-col '>

			{dataStartups.map((startup) => (
				<Startup key={Number(startup.index)} {...startup} reverse={Number(startup.index) % 2 === 0} />
			))}
			
		</div>

	);
};

export default StartupItemList;

