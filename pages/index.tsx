import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../Components/Hero'
import HomeSection from '../Components/HomeSection'

const Home: NextPage = () => {

  return (
  <>
  <Head>
    <title>Shintoku Kaiun Co., Ltd.</title>
    <link rel="icon" href="/faviocon.ico" />
  </Head>
  <div className='homeMainbody'>
    <Hero />
    <HomeSection />
  </div>
  </>

  )
}

export default Home;
