

import React from 'react';
import dataTeam from '../../data/data-team';
import Team from '../team';


const Benefits: React.FC = () => {
	
	return (

		<div className='flex-col'>

			{dataTeam.map((team) => (
				<Team key={Number(team.index)} {...team} />
			))}

		</div>
		
	);

};

export default Benefits;

