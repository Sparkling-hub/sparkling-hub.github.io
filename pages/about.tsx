import MainLayout from '../layouts/MainLayuout';
import * as Section from '../data/data-sections/data-section-about'
import Sections from '../components/sections/sections'




import React from 'react';


const AboutUs = () => { 
  


    return (
       
        <MainLayout>

        <div className=''>

        <Sections {...Section.sections.SectionOne}/> 
     
        </div>
        </MainLayout>
       
    );
};

export default AboutUs;