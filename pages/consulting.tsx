

import MainLayout from '../layouts/MainLayuout';
import Section from '../data/data-sections/data-section-consulting'
import Sections from '../components/sections/sections'
import React from 'react';


const ConsultingPage = () => {

    return (

        <MainLayout>

            {Section.map((section) => (
                <Sections key={section.index} {...section} />
            ))
            }
            
        </MainLayout>

    );
};

export default ConsultingPage;