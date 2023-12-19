

import React from 'react';
import IBenefit from '@/interface/IBenefits';

const Benefit: React.FC<IBenefit> = ({ content, header, reverse, image }) => {
	
	return (

		<div className={`flex justify-between items-center ${!reverse ? 'flex-row-reverse' : ''}  m-10 `}>

			<div className='basis-1/2 flex-col justify-center  p-4'>
				<div className='flex my-8'>
					<div className='color-primary-light font-medium text-5xl'>{header}</div>
				</div>
				<div className='my-8 text-2xl'>{content}</div>

			</div>

			<div className='basis-1/2 flex items-center justify-center'>
				<img className='inline-block mx-4  w-96 h-96' src={image} alt="" />
			</div>
		</div>
		

		

	);
};

export default Benefit;

