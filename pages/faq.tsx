

import MainLayout from '../layouts/MainLayuout';
import * as Section from '../data/data-sections/data-section-faq'
import Sections from '../components/sections/sections'
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLastPageSlug  } from '@/store/redusers/navigationReducer';


const Faq = () => {
	
    const dispatch = useDispatch();
    
    useEffect(() => {

        dispatch(setLastPageSlug("About"));

    }, []);

	return (

		<MainLayout>

			<div >
				<Sections {...Section.sections.SectionOne} />
				<Sections {...Section.sections.SectionTwo} />
			</div>

		</MainLayout>

	);
};

export default Faq;