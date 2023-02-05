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
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content="船舶貸渡業、東広島に拠点を置く進徳海運株式会社（SHINTOKU KAIUN CO., LTD.）のホームページ。会社情報、採用情報、サービスを掲載" />
    <meta name="robots" content="noindex,nofollow" />
    <meta name="keywords" content="Shintoku,進徳海運,船舶,船主,シップオーナー,船舶貸渡業,ship, owner, 広島, japan, finance, chemical"></meta>
  </Head>
  <div className='homeMainbody'>
    <Hero />
    <HomeSection />
  </div>
  </>

  )
}

export default Home;
