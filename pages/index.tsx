

import MainLayout from '../layouts/MainLayuout';
import * as Section from '../data/data-sections/data-sections-home';
import Sections from '../components/sections/sections';
import React from 'react';


const Index = () => {

	return (

		<MainLayout>

			<div >
				<Sections {...Section.sections.SectionOne} />
				<Sections {...Section.sections.SectionTwo} />
				<Sections {...Section.sections.SectionThree} />
				<Sections {...Section.sections.SectionFour} />
				<Sections {...Section.sections.SectionFive} />
			</div>

		</MainLayout>

	);
};

export default Index;
