

import React from 'react';
import IStartupAssisting from '../../interface/IStartupAssisting'


const Assisting: React.FC<IStartupAssisting> = ({ header, content, image, border, reverse, rotate }) => {

	



	return (
		<div className={`flex ${border} justify-between items-center ${!reverse ? 'flex-row-reverse' : ''}  m-10 rounded-4xl mx-32`}>

			<div className='basis-5/6 flex-col justify-center  p-4'>
				<div className='flex my-2'>
					
					<div className='text-emerald-900 font-bold'>{header}</div>
				</div>
				<div className='mx-4 my-2'>{content}</div>
				
			</div>
			<div className={`${rotate}`}>{image}</div>
		</div>
	);
};

export default Assisting;

