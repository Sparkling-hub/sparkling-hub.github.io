
import MainLayout from '../layouts/MainLayuout';
import Section from '../data/data-sections/data-section-startup'
import Sections from '../components/sections/sections'
import React from 'react';


const Startup_page = () => {

    return (

        <MainLayout>

            {Section.map((section) => (
                <Sections key={section.index} {...section} />
            ))
            }
            
        </MainLayout>

    );
};

export default Startup_page;