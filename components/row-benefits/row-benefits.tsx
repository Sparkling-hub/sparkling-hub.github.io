

import React from 'react';
import dataBenefits from '../../data/data-benefits';
import Benefit from '../benefit';


const Benefits: React.FC = () => {
	
	return (

		<div className='flex-col '>

			{dataBenefits.map((benefit) => (
				<Benefit key={Number(benefit.index)} {...benefit} reverse={Number(benefit.index) % 2 === 0} />
			))}

		</div>
		
	);

};

export default Benefits;

