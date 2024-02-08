

import React from 'react';
import IStartupAssisting from '../../interface/IStartupAssisting'


const Assisting: React.FC<IStartupAssisting> = ({ header, content, image, background, reverse, rotate }) => {
  
	return (
		<div className={`flex ${background} justify-between flex-col-reverse items-center ${reverse ? 'lg:flex-row-reverse ' : 'lg:flex-row text-teal-600'}    my-10 rounded-4xl lg:mx-32`}>
			<div className='lg:basis-5/6 flex-col justify-center p-4 '>
				<div className='flex my-4 lg:justify-start  justify-center lg:text-start text-center'>
					<div className='text-emerald-900 flex lg:justify-start  justify-center  font-bold text-3xl'>
						{header}
					</div>
				</div>
				<div className='my-2 text-lg  lg:text-start text-center'>
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

