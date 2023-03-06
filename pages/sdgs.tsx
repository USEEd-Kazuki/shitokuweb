import Head from 'next/head'
import React from 'react'
import SDGsHero from '../Components/SDGsHero'
import SdgsSection from '../Components/SdgsSection'

const sdgs = () => {
  return (
    <>
    <Head>
    <title>進徳海運株式会社</title>
            <meta property="og:title" content="進徳海運株式会社" key="title" />
    </Head>
    <SDGsHero />
    <SdgsSection />
    </>
  )
}

export default sdgs