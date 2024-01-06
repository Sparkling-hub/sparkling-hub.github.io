

import React from 'react';
import ITeam from '@/interface/ITeam';

const Benefit: React.FC<ITeam> = ({ content, header, index, marginRight, marginLeft }) => {


	return (

		<div className={`flex justify-between items-center ${marginRight} ${marginLeft}`}>
			<div className={`w-[80%] flex flex-col  justify-center p-4 rounded-2xl relative my-3`}>
	
				

				<div className={`items-center flex flex-row h-full w-full`}>
					
		
				<div className='flex flex-col '>
					<h3 className='flex text-2xl m-2 px-8 w-auto  break-all flex flex-reserve text-teal-700'>{header}</h3>
				
					<div className={`m-2 min-h-[60px] w-7/8 leading-8 rounded-3xl py-5 px-8 relative ${(index % 2) ? "bg-violet-50" : "bg-teal-50"}`}>
					<div className='text-5xl  left-[-50px] top-[35%] absolute'>{index}</div>
						{content}
						</div>
				</div>

				</div>
			</div>


		</div>




	);
};

export default Benefit;

