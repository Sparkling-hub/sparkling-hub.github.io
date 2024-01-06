

import React from 'react';
import ITeamRoles from '@/interface/ITeamRoles';
const Benefit: React.FC<ITeamRoles> = ({ content, header, image }) => {


	return (

		<div className='flex flex-row my-5 w-full'>
			<img className='w-1/5 h-1/5' src={image} alt='Roles'/>
			<div className='mx-6  w-4/5'>
				<h3 className='text-teal-800 text-xl font-semibold '>{header}</h3>
				<div className="border-b-2 border-teal-600 w-12 my-4">

    </div>
				<p>{content}</p>
			</div>

		</div>


	);
};

export default Benefit;

