

import React from 'react';
import ISoftwareData from '@/interface/ISoftwareData';

const Benefit: React.FC<ISoftwareData> = ({ header, content, number }) => {

	return (

		<div className={`flex flex-col bg-white rounded-3xl  m-5 w-[200px] items-start h-60 relative text-center` }>
			<div className='rounded-t-3xl bg-teal-600 flex w-fit items-center p-[1px] text-xl font-bold relative h-[50%] w-full'>
				<div className='z-0 absolute rounded-full text-white flex items-center
    justify-center bg-teal-600 top-[-20%] h-11 w-11 left-[40%]'>
					{number}
				</div>
				<h3 className='ml-4 mr-7 text-white z-10  w-full flex items-center '>{header}</h3>
			</div>
			<div className='flex justify-center  rounded-3xl bg-teal-800 flex w-fit top-[100px] h-8 left-[64px] items-center text-xl font-bold absolute w-[72px] h-[40px]'>
			<p className='text-white font-light'>over</p>
			</div>
			<div className=' flex w-fit items-center p-[1px] text-xl font-light relative h-[50%] w-full'>
			<h2 className='-auto flex items-center m-auto'>{content}</h2>
			</div>
			

		</div>




	);
};

export default Benefit;

