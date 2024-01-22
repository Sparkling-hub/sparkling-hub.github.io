

import React from 'react';
import IStartupTechnologiesItem from '../../interface/IStartupTechnologiesItem'


const StartupIcon: React.FC<IStartupTechnologiesItem> = ({ imageSrc, text }) => {

	return (

		<div className={`flex justify-center items-center  min-w-[10px] w-1/3 lg:w-1/4`}>

			<div className='flex startup-icon justify-center items-center bg-white lg:w-48 lg:h-48 h-28 w-28 rounded-2xl m-4 '>

				<img className='w-14 h-14  lg:w-20 lg:h-20 inline-block mt-4 mx-4' src={imageSrc} alt="" />
				<div className='text-center  p-4 text-teal-600 font-medium'> {text}</div>
				
			</div>

		</div>
	);
};

export default StartupIcon;

