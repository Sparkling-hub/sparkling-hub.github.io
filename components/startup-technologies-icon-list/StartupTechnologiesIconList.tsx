

import React from 'react';
import dataStartups from '@/data/data-sections/data-section-startup/data-startup-icons'
import StartupIcon from '@/components/startup-icon';
import Link from 'next/link';


const StartupTechnologiesIconList: React.FC = () => {

	return (

		<div className='flex flex-wrap justify-center items-center'>

			{dataStartups.map((startup) => (
				<StartupIcon key={startup.index} {...startup} />
			))}

			<div className='m-20 p-4 underline underline-offset-8 text-teal-500/100 text-xl font-bold text-center hidden lg:flex'>

				<Link 	className="" href="/contact">
				The technology you need isn&apos;t here? 
				Contact us to see if we can help!
				</Link>

			</div>

		</div>

	);
};

export default StartupTechnologiesIconList;

