

import MainLayout from '../layouts/MainLayuout';

import Sections from '../components/sections/sections'
import React, { useEffect } from 'react';

import { useRouter } from 'next/router';


const Faq = () => {
	
    const router = useRouter();
	console.log(router)
  const { id } = router.query;



	return (

		<MainLayout>

			<div className='h-40 bg-gray-200'>
			{id}
			</div>

		</MainLayout>

	);
};

export default Faq;