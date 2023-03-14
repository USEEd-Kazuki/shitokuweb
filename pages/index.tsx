import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../Components/Hero'
import HomeSection from '../Components/HomeSection'

const Home: NextPage = () => {

  return (
  <>
  <Head>
    <title>進徳海運株式会社</title>
    <meta property="title" content="進徳海運株式会社" key="title" />
    <meta name="description" content="東広島に拠点を置く進徳海運株式会社のホームページです。主に船舶貸渡業を行なっています。会社情報、採用情報、サービスを掲載しています。" />
    <meta name="keywords" content="進徳海運,Shintoku、船舶,船主,シップオーナー,船舶貸渡業,ship, owner, 広島, japan, finance, chemical"></meta>
    <link rel="icon" href="/faviocon.ico" />
    <meta name="content-language" content="ja" />
    <meta name="local" content="ja-JP"/>
    <meta name='url' content="https://www.shintokukk.co.jp/"/>
    <meta name='site_name' content='進徳海運株式会社'/>
    <meta name="google-site-verification" content="PgfRjyZftxIn0m4VL5mAmQJngXhFNyExy3mzlhU9nww" />
    <meta name='viewport' content='width=device-width, initial-scale=1.0, viewport-fit=cover' />
    <meta name='robots' content='all'/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  </Head>
  <div className='homeMainbody'>
    <Hero />
    <HomeSection />
  </div>
  </>

  )
}

export default Home;
