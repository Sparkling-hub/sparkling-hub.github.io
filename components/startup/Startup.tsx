

import React from 'react';
import IStartup from '../../interface/IStartupItem'

const Startup: React.FC<IStartup> = ({ content, header, reverse, img }) => {

	return (

		<div className={`flex justify-between items-center ${!reverse ? 'flex-row-reverse' : ''}  m-10 border-medium2 rounded-4xl`}>

			<div className='basis-5/6 flex-col justify-center  p-4'>

				<div className='flex my-2 mx-3 items-end'>

					<div><img className='w-7 h-7 inline-block mx-2' src='/img/right-arrow-circle.svg' alt="" /></div>
					<div className='text-emerald-900 font-medium text-2xl'>{header}</div>

				</div>

				<div className='mx-4 my-2 text-xl'>{content}</div>

			</div>

			<div className='flex items-center justify-center square-green bg-color-primary-medium h-40 w-48 rounded-3xl'>
				<img className='inline-block mx-4 w-32 h-32' src={img} alt="" />
			</div>

		</div>

	);
};

export default Startup;

