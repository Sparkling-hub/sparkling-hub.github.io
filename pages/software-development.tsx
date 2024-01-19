
import MainLayout from '../layouts/MainLayuout';
import Section from '../data/data-sections/data-section-software'
import Sections from '../components/sections/sections'
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLastPageSlug  } from '@/store/redusers/navigationReducer';


const SoftwareDevelopment = () => {
    
    const dispatch = useDispatch();
    
    useEffect(() => {

        dispatch(setLastPageSlug("software_development"));

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

export default SoftwareDevelopment;