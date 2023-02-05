import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../Components/Hero'
import HomeSection from '../Components/HomeSection'

const Home: NextPage = () => {

  return (
  <>
  <Head>
    <title>進徳海運　株式会社</title>
    <link rel="icon" href="/faviocon.ico" />
    <meta name='viewport' content='width=device-width, initial-scale=1.0, viewport-fit=cover' />
  </Head>
  <div className='homeMainbody'>
    <Hero />
    <HomeSection />
  </div>
  </>

  )
}

export default Home;
