

import React from 'react';
import dataAbout from '../../data/data-aboutUs';
import About from '../about';


const Benefits: React.FC = () => {
	
	return (

		<div className='flex-col '>

			{dataAbout.map((about) => (
				<About key={Number(about.number)} {...about} />
			))}

		</div>
		
	);

};

export default Benefits;

