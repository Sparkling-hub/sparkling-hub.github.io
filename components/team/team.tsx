

import React from 'react';
import ITeam from '@/interface/ITeam';

const Benefit: React.FC<ITeam> = ({ content, header, index, marginRight, marginLeft }) => {


	return (

		<div className={`flex justify-between items-center ${marginRight} ${marginLeft} m-0`}>
			<div className={`lg:w-[80%] w-full flex flex-col  justify-center py-2 lg:p-4 rounded-2xl relative m-0 lg:my-3`}>
	
				

				<div className={`items-center flex flex-row h-full w-full`}>
					
		
				<div className='flex flex-col'>
					<h3 className='flex break-keep text-2xl my-2 lg:m-2 px-4 lg:px-68 w-auto  break-all flex flex-reserve text-teal-700 font-light lg:justify-start justify-center lg:text-start text-center'>{header}</h3>
				
					<div className={`my-2 min-h-[60px] w-full lg:w-7/8 leading-8 rounded-3xl py-5  px-4 lg:px-6 relative ${(index % 2) ? "bg-violet-50" : "bg-teal-50"}`}>
					<div className='text-5xl lg:block hidden left-[-70px] top-[35%] absolute'>{index}</div>
						{content}
						</div>
				</div>

				</div>
			</div>


		</div>




	);
};

export default Benefit;

