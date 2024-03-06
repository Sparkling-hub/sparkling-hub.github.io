
import React, { ReactNode } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Head from 'next/head';

interface MainLayoutProps {
	children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {

	return (

		<div className='w-full min-w-[400px] font-Roboto'>
			 <Head>
        <link rel="icon" href="/S.svg" />


		<script src="https://www.google.com/recaptcha/enterprise.js?render=6LfToIspAAAAAA9TXJ_1x9gweZVsUmoElTZeNcWo"></script>




      </Head>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>

	);

};

export default MainLayout;