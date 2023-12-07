import React from 'react';
import dataStartups from '@/data/data-sections/data-section-startup/data-startup-icons'
import StartupIcon from '@/components/startup-icon';
import Button from '../button';


const StartupTechnologiesIconList: React.FC = () => {

	return (
		<div className='flex flex-wrap justify-center items-center'>
			{dataStartups.map((startup, index) => (
				<StartupIcon key={index} {...startup}/>
			))}
			<div className='m-20'>
				<Button href="/get-in-touch" text="Find out more" />
			</div>
			 
		</div>


	);
};

export default StartupTechnologiesIconList;

