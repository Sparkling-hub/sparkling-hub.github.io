

import React from 'react';
import ISoftwareData from '@/interface/ISoftwareData';

const Benefit: React.FC<ISoftwareData> = ({ header, content, number }) => {

	return (

		<div className={`flex flex-col bg-gray-100 rounded-3xl px-5 m-5 w-[480px] h-[185px] items-start`}>
			<div className='rounded-full bg-teal-500 flex w-fit items-center mb-3 mt-5 p-[1px] text-xl font-bold'>
				<div className='p-[10px] flex items-center justify-center rounded-full bg-white w-12 h-12 text-teal-500'>
					{number}
				</div>
				<h3 className='ml-4 mr-7 text-white'>{header}</h3>
			</div>
			<div>{content}</div>

		</div>




	);
};

export default Benefit;

