import React from 'react';
import dataStartups from '@/data/data-sections/data-section-startup/data-startup-icons'
import StartupIcon from '@/components/startup-icon';
import Link from 'next/link';


const StartupTechnologiesIconList: React.FC = () => {

	return (
		<div className='flex flex-wrap justify-center items-center'>
			{dataStartups.map((startup) => (
				<StartupIcon key={startup.index} {...startup}/>
			))}
			<div className='m-20'>				
				<Link className="p-4 underline underline-offset-8 text-teal-500/100 text-xl font-bold " href="/contact">The technology you need isn&rsquo;t here? Contact us to see if we can help!</Link>
				
			</div>
			 
		</div>


	);
};

export default StartupTechnologiesIconList;

