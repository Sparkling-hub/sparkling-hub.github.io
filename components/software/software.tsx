

import React from 'react';
import ISoftware from '@/interface/ISoftwareData'
import SoftwareCard from '../software-card'
import data from '@/data/data-software'
const Benefit: React.FC = () => {

	return (

		<div className='flex flex-row flex-wrap items-center justify-center'>
		
	{data.map((card: ISoftware) => (
   
              <SoftwareCard {...card} key={card.number} />
         
          ))}
		</div>




	);
};

export default Benefit;

