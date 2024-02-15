

import React from 'react';
import ISoftwareData from '@/interface/ISoftwareData';

const Benefit: React.FC<ISoftwareData> = ({ header, content, number }) => {

	return (

		<div className={`flex flex-col bg-white rounded-3xl  m-5 w-[230px] items-start h-60 relative text-center drop-shadow-lg` }>
			<div className='rounded-t-3xl bg-teal-600 flex items-center p-[1px] text-xl font-bold relative h-[50%] w-full '>
				<div className='z-0 absolute rounded-full text-white flex items-center
    justify-center bg-teal-600 top-[-20%] h-12 w-12 left-[91px]'>
					{number}
				</div>
				<h3 className='m-auto text-white z-10 flex items-center p-5 text-xl leading-7'>{header}</h3>
			</div>
			<div className='flex justify-center rounded-3xl bg-teal-800
			 flex top-[100px] left-[79px] items-center text-xl font-bold absolute w-[72px] h-[40px]'>
			<p className='text-white font-light'>over</p>
			</div>
			<div className=' flex items-center text-xl font-light relative h-[50%] w-full p-5'>
			<h2 className='px-5 font-light text-2xl flex items-center m-auto leading-7'>{content}</h2>
			</div>
			

		</div>




	);
};

export default Benefit;

