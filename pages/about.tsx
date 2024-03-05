import MainLayout from '../layouts/MainLayuout';
import * as Section from '../data/data-sections/data-section-about'
import Sections from '../components/sections/sections'
import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { setLastPageSlug  } from '@/store/redusers/navigationReducer';


const AboutUs = () => { 
    
    const dispatch = useDispatch();
    
    useEffect(() => {

        dispatch(setLastPageSlug("About"));

    }, []);


    return (
       
        <MainLayout>

        <div className=''>

        <Sections {...Section.sections.SectionOne}/> 
     
        <Sections {...Section.sections.SectionTwo}/> 
        <Sections {...Section.sections.SectionThree}/> 
        </div>
        </MainLayout>
       
    );
};

export default AboutUs;