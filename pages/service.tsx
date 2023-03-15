import Head from 'next/head';
import React from 'react'
import ServiceHero from '../Components/ServiceHero';
import ServiceSection from '../Components/ServiceSection';

const service = () => {
  return (
    <>
    <Head>
    <meta property="title" content="進徳海運株式会社" key="title" />
    <meta name="description" content="東広島に拠点を置く進徳海運株式会社のホームページです。主に船舶貸渡業を行なっています。会社情報、採用情報、サービスを掲載しています。" />
    <meta name="keywords" content="進徳海運,Shintoku、船舶,船主,シップオーナー,船舶貸渡業,ship, owner, 広島, japan, finance, chemical"></meta>
    </Head>
    <ServiceHero />
    <ServiceSection />
    </>
  )
}

export default service;
