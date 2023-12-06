import React from 'react';
import IStartupItem from '../../interface/IStartupItem'
import dataStartups from '@/data/data-startup-items'
import Startup from '../startup';


const StartupItemList: React.FC = () => {


	// console.log(header)

	// debugger
	return (
		<div className='flex-col '>
			{dataStartups.map((startup, index) => (
				<Startup key={index} {...startup} reverse={index % 2 === 0} />
			))}
		</div>

	);
};

export default StartupItemList;

