import React from 'react';
import dataStartups from '@/data/data-sections/data-section-startup/data-startup-items'
import Startup from '../startup';


const StartupItemList: React.FC = () => {

	return (
		<div className='flex-col '>
			{dataStartups.map((startup, i) => (
				<Startup key={i} {...startup} reverse={i % 2 === 0} />
			))}
		</div>
	);
};

export default StartupItemList;

