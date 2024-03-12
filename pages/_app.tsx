

import type { AppProps } from 'next/app';
import "../styles/global.css";
import '../styles/general.scss';
import { Provider } from 'react-redux';
import store from '@/store/store';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {

	return (

		<Provider store={store}>
					 <Head>
        <link rel="icon" href="/S.svg" />
		<meta property="og:image" content="/S.svg"/>

      </Head>
			<Component {...pageProps} />
		</Provider>
		
		  
	);

}

export default MyApp;