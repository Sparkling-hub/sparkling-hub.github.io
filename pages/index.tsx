import MainLayout from '../layouts/MainLayuout';


import * as Section from '../data/data-sections'
import Sections from '../components/sections/sections'


import React from 'react';

const Index = () => {  console.log(Section)  
  console.log()
    return (
       
        <MainLayout>

       
           

        <div className='container'>
        <Sections {...Section.SectionOne} />
        </div>
        </MainLayout>
       
    );
};

export default Index;