

import MainLayout from '../layouts/MainLayuout';
import * as Section from '../data/data-sections/data-sections-home';
import Sections from '../components/sections/sections';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLastPageSlug  } from '@/store/redusers/navigationReducer';


const Index = () => {
	
    const dispatch = useDispatch();
    
    useEffect(() => {

        dispatch(setLastPageSlug("home"));

    }, []);
	
	return (

		<MainLayout>

			<div >
				<Sections {...Section.sections.SectionOne} />
				<Sections {...Section.sections.SectionTwo} />
				<Sections {...Section.sections.SectionThree} />
				<Sections {...Section.sections.SectionFour}  />
				<div className='lg:block hidden'><Sections {...Section.sections.SectionFive} /></div>

			</div>

		</MainLayout>

	);
};

export default Index;
