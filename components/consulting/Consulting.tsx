

import React from 'react';
import IConsulting from '../../interface/IConsulting'

const Consulting: React.FC<IConsulting> = ({ content, header, reverse, img }) => {

	return (

		<div className={`flex flex-col-reverse ustify-between items-center ${!reverse ? 'lg:flex-row-reverse lg:ml-60' : 'lg:flex-row lg:mr-60'} m-5 lg:m-20  bg-color-primary-light-light rounded-4xl`}>

			<div className={`lg:basis-5/6 flex-col justify-center  p-4 ${!reverse ? 'pl-10' : 'pr-15'}`}>

				<div className='flex my-2 ml-4 lg:justify-start lg:text-start justify-center text-center'>
					
					<div className='color-primary-medium font-bold text-3xl lg:m-0 mb-1'>{header}</div>

				</div>

				<div className='mx-4 my-2 text-xl lg:text-start  text-center'>{content}</div>

			</div>

			<div className='flex items-center justify-center square-green bg-white h-40 w-40 scale-150 rounded-full border-medium2 lg:my-0 my-[50px]'>
				<img className='inline-block mx-4 w-24 h-24 ' src={img} alt="" />
			</div>

		</div>

	);
};

export default Consulting;

