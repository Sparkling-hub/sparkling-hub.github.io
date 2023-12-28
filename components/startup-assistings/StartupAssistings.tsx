

import React from 'react';
import dataAssisting from '@/data/data-sections/data-section-startup/data-startup-assistings'
import Assisting from '../assisting';


const StartupAssistings: React.FC = () => {

	return (

		<div className='flex-col '>

			{dataAssisting.map((assisting) => (
				<Assisting key={Number(assisting.index)} {...assisting} reverse={Number(assisting.index) % 2 !== 0} />
			))}
			
		</div>

	);
};

export default StartupAssistings;

