

import MainLayout from '../layouts/MainLayuout';
import * as Section from '../data/data-sections/data-section-faq'
import Sections from '../components/sections/sections'
import React from 'react';


const Contact = () => {


	return (

		<MainLayout>

			<div >
				<Sections {...Section.sections.SectionOne} />
				<Sections {...Section.sections.SectionTwo} />
			</div>

		</MainLayout>

	);
};

export default Contact;