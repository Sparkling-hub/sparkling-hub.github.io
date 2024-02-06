

import React from 'react';
import IBenefit from '@/interface/IBenefits';

const Benefit: React.FC<IBenefit> = ({ content, header, reverse, image }) => {

	return (

		<div className={`flex justify-between flex-col-reverse items-center text center lg:text-left ${!reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}  m-10 `}>
			<div className='basis-1/2 flex-col justify-center flex px-12 text-center items-center lg:text-left lg:items-start lg:p-4 '>
				<div className='flex  my-2 '>
					<div className='text-teal-700 font-medium text-4xl'>
						{header}
					</div>
				</div>
				<div className='my-4 text-xl mx-[15%] lg:mx-0'>{content}</div>
			</div>

			<div className='basis-1/2 flex items-center justify-center'>
				<img className='inline-block mx-4  w-96' src={image} alt="" />
			</div>
			
		</div>




	);
};

export default Benefit;

