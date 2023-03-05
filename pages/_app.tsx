import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { motion, AnimatePresence } from 'framer-motion';
import React, {useState, useEffect} from 'react';
import Loading from '../Components/Loading';
import Head from 'next/head';


function MyApp({ Component, pageProps, router }: AppProps) {

  const [loading, setLoading] = useState(false);
  useEffect (() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
  <>
  <Head>
    <title>進徳海運株式会社</title>
    <meta property="og:title" content="進徳海運株式会社" key="title" />
  </Head>
  {
    loading ?
    <Loading 
    />
    :
  <div>
  <Header />
  <AnimatePresence mode="wait" initial={true} onExitComplete={() => window.scrollTo(0, 0)}>
    <motion.div
    key={router.route}
    initial="initialState"
    animate="animateState"
    exit="exiteState"
    transition={{
      duration: 0.75,
      ease: 'easeInOut'
    }}
    variants={{
      initialState:{
        opacity: 0,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      },
      animateState:{
        opacity: 1,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      },
      exiteState:{
        clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
      },
    }}
     >
  <Component key={router.asPath} {...pageProps} />
  <Footer />
    </motion.div>
  </AnimatePresence>
  </div>
  }
  </>
  )
}

export default MyApp;
