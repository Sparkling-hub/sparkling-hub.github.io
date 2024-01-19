

import MainLayout from '../layouts/MainLayuout';
import * as Section from '../data/data-sections/data-section-contact'
import Sections from '../components/sections/sections'
import React, { useEffect } from 'react';

const Contact = () => {

    return (

        <MainLayout>
            <div >
                <Sections {...Section.sections.SectionOne} />
                <Sections {...Section.sections.SectionTwo} />
            </div>
        </MainLayout>

    );
};

export default Contact;