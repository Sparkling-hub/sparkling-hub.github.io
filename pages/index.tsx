import MainLayout from '../layouts/MainLayuout';
import * as Section from '../data/data-sections'
import Sections from '../components/sections/sections'




import React from 'react';


const Index = () => { 
  

  console.log()
    return (
       
        <MainLayout>

        <div className=''>

        <Sections {...Section.sections.SectionOne}/> 
   
        <Sections {...Section.sections.SectionFour}/> 
        </div>
        </MainLayout>
       
    );
};

export default Index;