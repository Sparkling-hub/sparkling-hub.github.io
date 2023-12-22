

import React from 'react';
import IStartupAssisting from '../../interface/IStartupAssisting'


const Assisting: React.FC<IStartupAssisting> = ({ header, content, image, background, reverse, rotate }) => {


	return (
		<div className={`flex ${background} justify-between items-center ${reverse ? 'flex-row-reverse' : ''}  m-10 rounded-4xl mx-32`}>

			<div className='basis-5/6 flex-col justify-center mx-4 p-4'>
				<div className='flex my-2'>
					
					<div className='mx-4 text-emerald-900 font-bold'>{header}</div>
				</div>
				<div className='mx-4 my-2'>{content}</div>
				
			</div>
			<div className={`${rotate}`}>
			<img className='w-60 h-60 inline-block mx-4' src={image} alt=""/>
				</div>
		</div>
	);
};

export default Assisting;

