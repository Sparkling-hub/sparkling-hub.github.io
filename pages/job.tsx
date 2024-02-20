import MainLayout from '../layouts/MainLayuout';
import Jobs from '../data/data-jobs';
import InfoJob from '../data/data-sections/data-section-jobs/infoJob';
import React from 'react';
import { useRouter } from 'next/router';

const Faq = () => {
    const router = useRouter();
    const  job  =router.query.id;
	console.log( router.query);
	console.log(job);
    const selectedJob = Jobs.find(jobItem => jobItem.slug === job);

    return (
        <MainLayout>
            <Router>
            <Routes>
                <Route path="/job/:id" element={job ? <InfoJob job={job} /> : <div className='justify-center h-60 items-center text-5xl flex'>Job not found</div>} />
            </Routes>
        </Router>
        </MainLayout>
    );
};

export default Faq;
