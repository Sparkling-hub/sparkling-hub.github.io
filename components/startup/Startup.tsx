

import React from 'react';
import IStartup from '../../interface/IStartupItem'

const Startup: React.FC<IStartup> = ({ content, header, reverse, img }) => {

	return (

		<div className={`flex justify-between items-center flex-col-reverse flex p-4  text-center ${!reverse ? 'lg:flex-row-reverse lg:text-start' : 'lg:text-end lg:flex-row '} my-10 lg:m-10 border-medium2 rounded-4xl`}>

			<div className='lg:basis-5/6 flex-col justify-center  '>

				<div className={`flex my-3 mx-3 w-full justify-center lg:justify-start align-baseline ${reverse ? 'lg:flex-row-reverse lg:text-rihgt  px-6' : 'lg:flex-row'}`}>

					<div className='align-baseline flex lg:w-auto   w-fit  flex items-center'>
						<img className='align-baseline h-[23px] w-[23px]  lg:block hidden' src='/img/right-arrow-circle.svg' alt="" /></div>
					<div className= {`text-emerald-900 font-medium text-2xl w-fit lg:w-auto`}>{header}</div>

				</div>

				<div className='mx-4 my-2 text-xl'>{content}</div>

			</div>

			<div className='flex items-center justify-center square-green  h-40 w-48 rounded-3xl'>
				<img className='inline-block mx-4' src={img} alt="" />
			</div>

		</div>

	);
};

export default Startup;

