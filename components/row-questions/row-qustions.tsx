

import React from 'react';
import type IQustians from '../../interface/IQustion';
import DisabledSelect from '../ui/select-questions/select';
import questions from '../../data/data-questions';


const Questions: React.FC = () => {

	return (

		<div className="py-4 lg:p-4">

			{Object.values(questions.question).map((value: IQustians, index) => (

				<div className="relative  my-5 lg:m-5 lg:px-5 w-full" key={index}>

					<DisabledSelect data={value}/>

				</div>

			))}

		</div>
	)

};

export default Questions

