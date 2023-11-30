

import React from 'react';
import IStartupStepItem from '../../interface/IStartupStepItem'


const StartupStepItem: React.FC<IStartupStepItem> = ({ title, subtext, index }) => {

	return (
		<li className=' flex-col px-40 ' >
			<div className="s-b-s-title rounded-3xl p-1 flex">
				<div className='kolo'>{index}</div>
				<div className='text text-emerald-900 font-bold text-2xl'>{title}</div>
			</div>
			<div className="s-b-s-text">
				<div className='mx-5 pt-3 pb-20'>
					{subtext}
					</div>
			</div>
		</li>
	);
};

export default StartupStepItem;

