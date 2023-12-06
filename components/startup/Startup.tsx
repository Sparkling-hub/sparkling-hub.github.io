

import React from 'react';
import IStartup from '../../interface/IStartupItem'


const Startup: React.FC<IStartup> = ({ content, header, link, reverse }) => {


	console.log(header)

	// debugger
	return (

		<div className={`flex justify-between items-center ${!reverse ? 'flex-row-reverse' : ''}  m-10 border-solid border-2 border-emerald-900 rounded-4xl`}>

			<div className='basis-5/6 flex-col justify-center  p-4'>
				<div className='flex my-2'>
					<div><img className='w-4 h-4 inline-block mx-4' src='/img/right-arrow-circle.svg' alt=""/></div>
					<div className='text-emerald-900 font-medium'>{header}</div>
				</div>
				<div className='mx-4 my-2'>{content}</div>
				
			</div>
			<div className='basis-1/6 square-green bg-emerald-900 h-40 rounded-3xl'></div>
		</div>

	);
};

export default Startup;

