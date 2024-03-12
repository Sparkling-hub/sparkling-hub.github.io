
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
	<meta property="og:title" content="Sparkling.Co. Start-up" />
			<meta property="og:description" content="Over the last decade, we have collaborated with more than 20 start-ups, spanning from pre-seed stages to Series A, helping entrepreneurs in transforming their ideas into reality and supporting others in scaling and iterating." />

			<meta property="og:url" content="/startup" />
            {Section.map((section) => (
                <Sections key={section.index} {...section} />
            ))
            }
            
        </MainLayout>

    );
};

export default Startup_page;