

import React from 'react';
import IStartupTechnologiesItem from '../../interface/IStartupTechnologiesItem'


const StartupIcon: React.FC<IStartupTechnologiesItem> = ({ imageSrc, text }) => {

	return (

		<div className={`flex justify-center items-center w-1/3 lg:w-full`}>

			<div className='flex startup-icon justify-center items-center bg-white lg:w-48 lg:h-48 w-28 h-28 rounded-2xl m-3 p-1'>

				<img className='w-12 h-12  lg:w-24 lg:h-24 inline-block my-3' src={imageSrc} alt="" />
				<div className='text-center lg:w-full w-20 w-full text-teal-600 font-medium'> {text}</div>
				
			</div>

		</div>
	);
};

export default StartupIcon;

