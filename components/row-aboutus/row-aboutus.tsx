

import React from 'react';
import dataAbout from '../../data/data-aboutUs';
import About from '../about';


const Benefits: React.FC = () => {
	
	return (

		<div className='flex-col m-5 relative '>
	<img src='/img/about/principles.svg' className='hidden lg:block relative left-[-200px] z-10' alt='principles'></img>
			{dataAbout.map((about) => (
				<About key={Number(about.number)} {...about} />
			
			))}

		</div>
		
	);

};

export default Benefits;

