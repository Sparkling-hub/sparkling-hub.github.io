

import React from 'react';
import IAbout from '@/interface/IAbout';


const Benefit: React.FC<IAbout> = ({ content, header, number }) => {

	return (

		<div className={`flex justify-between items-center relative`}>
			<div className='bg-teal-500 border-teal-600 border-[1px] font-medium text-2xl p-0.2 absolute rounded-full z-10 flex'>
				<div className='rounded-full justify-center border-black border-[1px] flex items-center bg-teal-700 w-20 bg-teal-800 h-20 text-center font-bold text-white -4  text-5xl'>{number}</div>

			</div>
			<div className='w-[60%] flex-col justify-center  px-12 py-2 bg-green-color rounded-2xl px-10 relative  mx-10 my-12'>


				<h3 className='ml-3 flex p-1 items-center text-black break-all'></h3>
				<div className='my-3 mx-2 min-h-[60px] leading-8 flex flex-col'>
					<div className='text-2xl text-teal-800 font-bold uppercase'>{header}</div>
					{content}</div>
			</div>


		</div>




	);
};

export default Benefit;

