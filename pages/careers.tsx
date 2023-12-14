import MainLayout from '../layouts/MainLayuout';
import * as Section from '../data/data-sections/data-section-careers'
import Sections from '../components/sections/sections'




import React from 'react';


const Careers = () => { 
  


    return (
       
        <MainLayout>

        <div className=''>

        <Sections {...Section.sections.SectionOne}/> 
        <Sections {...Section.sections.SectionTwo}/> 
      
        </div>
        </MainLayout>
       
    );
};

export default Careers;