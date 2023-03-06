import Head from 'next/head';
import React from 'react'
import AboutHero from '../Components/AboutHero';
import AboutSection from '../Components/AboutSection';


const about = () => {
  return (
    <>
    <Head>
    <title>進徳海運株式会社</title>
            <meta property="og:title" content="進徳海運株式会社" key="title" />
    </Head>
    <div className="mainbody">
      <AboutHero />
      <AboutSection />
    </div>
    </>
  )
}

export default about;