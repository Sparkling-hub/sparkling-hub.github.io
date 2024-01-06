

import React from 'react';
import dataConsultings from '@/data/data-sections/data-section-consulting/data-consulting-items'
import Consulting from '../consulting';


const ConsultingItemList: React.FC = () => {

	return (

		<div className='flex-col '>

			{dataConsultings.map((consulting) => (
				<Consulting key={Number(consulting.index)} {...consulting} reverse={Number(consulting.index) % 2 !== 0} />
			))}
			
		</div>

	);
};

export default ConsultingItemList;

