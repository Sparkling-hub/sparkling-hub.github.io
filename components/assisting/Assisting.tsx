

import React from 'react';
import IStartupAssisting from '../../interface/IStartupAssisting'


const Assisting: React.FC<IStartupAssisting> = ({ header, content, image, background, reverse, rotate }) => {
  
	return (
		<div className={`flex ${background} justify-between items-center ${reverse ? 'flex-row-reverse ' : 'text-teal-600'}  m-10 rounded-4xl mx-32`}>
			<div className='basis-5/6 flex-col justify-center mx-8 p-4'>
				<div className='flex my-4'>
					<div className='text-emerald-900 font-bold text-3xl'>
						{header}
					</div>
				</div>
				<div className='my-2 text-lg'>
					{content}
				</div>
			</div>
			<div className={`${rotate}`}>
				<img className='w-60 h-60 inline-block mx-4' src={image} alt="" />
			</div>
		</div>
	);
};

export default Assisting;

