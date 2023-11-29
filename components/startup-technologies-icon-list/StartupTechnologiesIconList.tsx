import React from 'react';
import dataStartups from '@/data/data-sections/data-section-startup/data-startup-icons'
import StartupIcon from '@/components/startup-icon';


const StartupTechnologiesIconList: React.FC = () => {

	return (
		<div className='flex flex-wrap bg-emerald-900'>
			{dataStartups.map((startup, index) => (
				<StartupIcon key={index} {...startup}/>
			))}
		</div>

	);
};

export default StartupTechnologiesIconList;

