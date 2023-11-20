import '../styles/globals.css';
import type { AppProps } from 'next/app';
import MainLayout from '../layouts/MainLayuout'; // Подставьте свой путь к компоненту макета

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;