

import React from 'react';
import IAbout from '@/interface/IAbout';

const Benefit: React.FC<IAbout> = ({ content, header, number }) => {

	return (

		<div className={`flex justify-between items-center ${!(number % 2) ? 'flex-row-reverse' : ''}  m-20`}>
			<div className='basis-2/3 flex-col justify-center  p-4 bg-gray-100 rounded-2xl px-10 relative leading-9'>
				
					<div className='bg-teal-500 font-medium text-2xl p-4 w-[45%] rounded-full absolute top-[-30px]'>
						{header}
					</div>
			
				<div className='mb-3 mt-10 text-xl  h-[100px] leading-10'>{content}</div>
			</div>

	
		</div>




	);
};

export default Benefit;

