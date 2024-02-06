
import MainLayout from '../layouts/MainLayuout';
import Section from '../data/data-sections/data-section-startup'
import Sections from '../components/sections/sections'
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {  setLastPageSlug  } from '@/store/redusers/navigationReducer';


const Startup_page = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(setLastPageSlug("startup"));

    }, []);

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