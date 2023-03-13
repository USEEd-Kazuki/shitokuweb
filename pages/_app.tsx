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
    <link rel="canonical" href="https://www.shintokukk.co.jp/" />
    <title>進徳海運株式会社</title>
    <meta property="og:title" content="進徳海運株式会社" key="title" />
    <link rel="icon" href="/faviocon.ico" />
    <meta name="og:content-language" content="ja" />
    <meta name="og:local" content="ja-JP"/>
    <meta name='og:url' content="https://www.shintokukk.co.jp/"/>
    <meta name='og:site_name' content='進徳海運株式会社'/>
    <meta name="google-site-verification" content="PgfRjyZftxIn0m4VL5mAmQJngXhFNyExy3mzlhU9nww" />
    <meta name='viewport' content='width=device-width, initial-scale=1.0, viewport-fit=cover' />
    <meta  name='robots' content='all'/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="og:description" content="東広島に拠点を置く進徳海運株式会社のホームページです。主に船舶貸渡業を行なっています。会社情報、採用情報、サービスを掲載しています。" />
    <meta name="keywords" content="進徳海運,Shintoku、船舶,船主,シップオーナー,船舶貸渡業,ship, owner, 広島, japan, finance, chemical"></meta>
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
