

import MainLayout from '../../layouts/MainLayuout';
import Jobs from '../../data/data-jobs';
import InfoJob from '../../data/data-sections/data-section-jobs/infoJob'
import React from 'react';

import { useRouter } from 'next/router';


const Faq = () => {
	
    const router = useRouter();
	console.log(router)
  const { id } = router.query;
  const job = Jobs.find(job => job.slug === id )
 



	return (

		<MainLayout>

{job?<InfoJob job={job}/>:<div className='justify-center h-60 items-center text-5xl flex'>Job not found</div>}
		</MainLayout>

	);
};

export default Faq;