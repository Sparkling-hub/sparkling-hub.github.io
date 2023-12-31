

import React from 'react';
import IAbout from '@/interface/IAbout';


const Benefit: React.FC<IAbout> = ({ content, header, number }) => {

	return (

		<div className={`flex justify-between items-center ${!(number % 2) ? 'flex-row-reverse' : ''} `}>
			<div className='w-[60%] flex-col justify-center  p-4 bg-gray-100 rounded-2xl px-10 relative  mx-10 my-12'>

					<div className='bg-teal-500 border-teal-600 border-[1px] font-medium text-2xl p-0.2 w-[370px] rounded-full absolute top-[-25px] flex'>
						<div className='rounded-full justify-center border-teal-600 border-[1px] flex items-center bg-white w-12 h-12 text-center text-teal-500'>{number}</div>
						<h3 className='ml-3 flex p-1 items-center text-white break-all'>{header}</h3>
					</div>

				<div className='my-6 mx-2 min-h-[60px] leading-8'>{content}</div>
			</div>


		</div>




	);
};

export default Benefit;

