import MainLayout from '../layouts/MainLayuout';
import * as Section from '../data/data-sections/data-section-team'
import Sections from '../components/sections/sections'




import React from 'react';


const AboutUs = () => { 
  


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