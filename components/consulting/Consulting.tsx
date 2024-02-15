

import React from 'react';
import IConsulting from '../../interface/IConsulting'

const Consulting: React.FC<IConsulting> = ({ content, header, reverse, img }) => {

	return (

		<div className={`flex justify-between items-center ${!reverse ? 'flex-row-reverse ml-60' : 'mr-60'}  m-20  bg-color-primary-light-light rounded-4xl`}>

			<div className={`basis-5/6 flex-col justify-center  p-4 ${!reverse ? 'pl-10' : 'pr-15'}`}>

				<div className='flex my-2 ml-4'>
					
					<div className='color-primary-medium font-bold text-3xl'>{header}</div>

				</div>

				<div className='mx-4 my-2 text-xl'>{content}</div>

			</div>

			<div className='flex items-center justify-center square-green bg-white h-40 w-40 scale-150 rounded-full border-medium2'>
				<img className='inline-block mx-4 w-28 p-1' src={img} alt="" />
			</div>

		</div>

	);
};

export default Consulting;

