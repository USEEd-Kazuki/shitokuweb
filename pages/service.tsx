import Head from 'next/head';
import React from 'react'
import ServiceHero from '../Components/ServiceHero';
import ServiceSection from '../Components/ServiceSection';

const service = () => {
  return (
    <>
    <Head>
    <title>進徳海運株式会社</title>
            <meta property="og:title" content="進徳海運株式会社" key="title" />
    </Head>
    <ServiceHero />
    <ServiceSection />
    </>
  )
}

export default service;
