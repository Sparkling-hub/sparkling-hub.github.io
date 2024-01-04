

import React from 'react';
import IStartupTechnologiesItem from '../../interface/IStartupTechnologiesItem'


const StartupIcon: React.FC<IStartupTechnologiesItem> = ({ imageSrc, text }) => {

	return (

		<div className={`flex justify-center items-center   w-1/5`}>

			<div className=' flex startup-icon justify-center items-center bg-white w-48 h-48 rounded-2xl m-4 '>

				<img className='w-24 h-24 inline-block mx-4' src={imageSrc} alt="" />
				<div className='text-center  p-4 color-primary-dark font-medium'> {text}</div>
				
			</div>

		</div>
	);
};

export default StartupIcon;

