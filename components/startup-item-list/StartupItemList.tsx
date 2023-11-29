import React from 'react';
import IStartupItem from '../../interface/IStartupItem'
import dataStartups from '@/data/data-sections/data-section-startup/data-startup-items'
import Startup from '../startup';


const StartupItemList: React.FC = () => {

	return (
		<div className='flex-col '>
			{dataStartups.map((startup, index) => (
				<Startup key={index} {...startup} reverse={index % 2 === 0} />
			))}
		</div>

	);
};

export default StartupItemList;

