import Head from 'next/head'
import React from 'react'
import RecruitHero from '../Components/RecruitHero'
import RecruitSection from '../Components/RecruitSection'

const recruit = () => {
  return (
    <>
    <Head>
    <title>進徳海運株式会社</title>
            <meta property="og:title" content="進徳海運株式会社" key="title" />
    </Head>
    <RecruitHero />
    <RecruitSection />
    </>
  )
}

export default recruit;