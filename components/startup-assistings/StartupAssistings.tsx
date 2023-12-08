import React from 'react';
import IStartupItem from '../../interface/IStartupItem'
import dataAssisting from '@/data/data-sections/data-section-startup/data-startup-assistings'

import Assisting from '../assisting';


const StartupAssistings: React.FC = () => {

	return (
		<div className='flex-col '>
			{dataAssisting.map((assisting, index) => (
				<Assisting key={index} {...assisting} reverse={index % 2 !== 0} />
			))}
		</div>

	);
};

export default StartupAssistings;

