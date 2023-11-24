import MainLayout from '../layouts/MainLayuout';
import * as Section from '../data/data-sections/data-section-contact'
import Sections from '../components/sections/sections'




import React from 'react';


const Contact = () => { 
  

  console.log(Section.sections)
    return (
       
        <MainLayout>

        <div className=''>

        <Sections {...Section.sections.SectionOne}/> 
        <Sections {...Section.sections.SectionTwo}/> 
        </div>
        </MainLayout>
       
    );
};

export default Contact;