

import MainLayout from '../layouts/MainLayuout';
import Section from '../data/data-sections/data-section-consulting'
import Sections from '../components/sections/sections'
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLastPageSlug  } from '@/store/redusers/navigationReducer';


const ConsultingPage = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {

        dispatch(setLastPageSlug("consulting"));

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

export default ConsultingPage;