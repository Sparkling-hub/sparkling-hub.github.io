

import React from 'react';
import IStartup from '../../interface/IStartupItem'

const Startup: React.FC<IStartup> = ({ content, header, reverse, img }) => {

	return (

		<div className={`flex justify-between items-center flex-col-reverse flex p-4  ${!reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} my-10 lg:m-10 border-medium2 rounded-4xl`}>

			<div className='lg:basis-5/6 flex-col justify-center  '>

				<div className='flex my-3 mx-3 w-full justify-center lg:justify-start lg:text-start align-baseline'>

					<div className='align-baseline flex lg:w-auto lg:text-start text-center w-fit  flex '>
						<img className='align-baseline h-[30px] w-[30px] lg:block hidden' src='/img/right-arrow-circle.svg' alt="" /></div>
					<div className='text-emerald-900 font-medium text-2xl w-fit lg:w-auto text-center lg:text-start'>{header}</div>

				</div>

				<div className='mx-4 my-2 text-xl'>{content}</div>

			</div>

			<div className='flex items-center justify-center square-green  h-40 w-48 rounded-3xl'>
				<img className='inline-block mx-4 w-32 h-32' src={img} alt="" />
			</div>

		</div>

	);
};

export default Startup;

