import React from 'react';
import dataStartupSteps from '@/data/data-sections/data-section-startup/data-startup-step-by-step'
import StartupStepItem from '../startup-step-item';
import Button from '../button';


const StartupStepByStep: React.FC = () => {

	return (
		<div className='flex flex-wrap justify-center items-center'>
			<ol>
				{dataStartupSteps.map((step, index) => (
					<StartupStepItem key={index} {...step} />
				))}
			</ol>
			<div className='m-20'>
				<Button href="/contact" text="Embark in your MVP adventure!" />
			</div>
		</div>



	);
};

export default StartupStepByStep;

