import MainLayout from '../layouts/MainLayuout';
import * as Section from '../data/data-sections/data-sections-home'
import Sections from '../components/sections/sections'
import  SeparatePage from './contact'



import React from 'react';


const Index = () => { 
  

  console.log(Section.sections)
    return (
       
        <MainLayout>
          <div className=''>
            <Sections {...Section.sections.SectionOne}/> 
            <Sections {...Section.sections.SectionTwo}/> 
            <Sections {...Section.sections.SectionFour}/> 
          </div>
        </MainLayout>
       
    );
};

export default Index;