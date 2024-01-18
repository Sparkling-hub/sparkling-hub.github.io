

import React, { useEffect, useState } from 'react';
import dataStartupSteps from '@/data/data-sections/data-section-startup/data-startup-step-by-step';
import StartupStepItem from '../startup-step-item';
import Button from '../button';

const StartupStepByStep: React.FC = () => {

	const [highlightedIndices, setHighlightedIndices] = useState<number[]>([]);

	useEffect(() => {

		const handleScroll = () => {

			const elements = document.querySelectorAll('.s-b-s-title');

			elements.forEach((element, index) => {

				const rect = element.getBoundingClientRect();
				const isVisible = rect.top < window.innerHeight / 2 && rect.bottom >= 0;

				if (isVisible && !highlightedIndices.includes(index + 1)) {
					setHighlightedIndices((prevIndices) => [...prevIndices, index + 1]);
				}

			});
		};

		window.addEventListener('scroll', handleScroll);

		return () => {

			window.removeEventListener('scroll', handleScroll);

		};

	}, [highlightedIndices]);

	return (

		<div className='flex flex-wrap justify-center items-center'>

			<ol>

				{dataStartupSteps.map((step) => (
					<StartupStepItem key={Number(step.index)} {...step} highlighted={highlightedIndices.includes(Number(step.index))} />
				))}

			</ol>

			<div className='m-20'>
				<Button href="/contact" text="Embark in your MVP adventure!" />
			</div>

		</div>
	);
};

export default StartupStepByStep;
