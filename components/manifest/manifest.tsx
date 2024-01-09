

import React from 'react';
import IManifest from '@/interface/IManifest'
import ManifestCard from '../software-manifest-card'
import data from '@/data/data-manifest'
const Benefit: React.FC = () => {

	return (

		<div className='flex flex-row flex-wrap items-center justify-center'>
		
	{data.map((card: IManifest) => (
   
              <ManifestCard {...card} key={card.number} />
         
          ))}
		</div>




	);
};

export default Benefit;

