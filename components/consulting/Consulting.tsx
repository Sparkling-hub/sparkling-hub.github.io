

import React from 'react';
import IConsulting from '../../interface/IConsulting'

const Consulting: React.FC<IConsulting> = ({ content, header, reverse, img }) => {

	return (

		<div className={`flex justify-between items-center ${!reverse ? 'flex-row-reverse' : ''}  m-10 border-medium2 rounded-4xl`}>

			<div className='basis-5/6 flex-col justify-center  p-4'>

				<div className='flex my-2 ml-4'>
					
					<div className='text-emerald-900 font-medium'>{header}</div>

				</div>

				<div className='mx-4 my-2'>{content}</div>

			</div>

			<div className='flex items-center justify-center square-green bg-color-primary-medium h-40 w-48 rounded-3xl'>
				<img className='inline-block mx-4 w-32 h-32' src={img} alt="" />
			</div>

		</div>

	);
};

export default Consulting;

