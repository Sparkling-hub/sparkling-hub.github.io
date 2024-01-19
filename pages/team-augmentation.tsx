import MainLayout from '../layouts/MainLayuout';
import * as Section from '../data/data-sections/data-section-team'
import Sections from '../components/sections/sections'
import { useDispatch, useSelector } from 'react-redux';
import { setLastPageSlug  } from '@/store/redusers/navigationReducer';
import React, { useEffect } from 'react';

const TeamAugmentation = () => {   
    
    const dispatch = useDispatch();
   
    useEffect(() => {
        
        dispatch(setLastPageSlug("team_augmentation"));

    }, []);

    return (
       
        <MainLayout>

        <div className=''>

        <Sections {...Section.sections.SectionOne}/> 
        <Sections {...Section.sections.SectionTwo}/> 
        <Sections {...Section.sections.SectionThree}/> 
        <Sections {...Section.sections.SectionFour}/> 
        </div>
        </MainLayout>
       
    );
};

export default TeamAugmentation;