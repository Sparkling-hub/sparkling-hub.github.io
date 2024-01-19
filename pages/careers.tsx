

import MainLayout from '../layouts/MainLayuout';
import * as Section from '../data/data-sections/data-section-careers'
import Sections from '../components/sections/sections'
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLastPageSlug  } from '@/store/redusers/navigationReducer';


const CareersPage = () => {     
    
    const dispatch = useDispatch();
    
    useEffect(() => {

        dispatch(setLastPageSlug("careers"));

    }, []);

    return (
       
        <MainLayout>

        <div >
            <Sections {...Section.sections.SectionOne}/> 
            <Sections {...Section.sections.SectionTwo}/>       
        </div>

        </MainLayout>
       
    );

};

export default CareersPage;