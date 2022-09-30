import { useEffect } from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import adobeLoader from "../../adobeLoader";
import Footer from '../Components/Footer';




function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.browser) adobeLoader(document);
  }, [])
  return (
  <>
  <Component {...pageProps} />
  <Footer />
  </>
  )
}

export default MyApp;
