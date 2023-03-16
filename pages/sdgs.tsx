import Head from 'next/head'
import React from 'react'
import SDGsHero from '../Components/SDGsHero'
import SdgsSection from '../Components/SdgsSection'

const sdgs = () => {
  return (
    <>
    <Head>
    <link rel="canonical" href="https://www.shintokukk.co.jp/" />
    <link rel="preconnect" href="https://www.shintokukk.co.jp/"/>
    <meta property="title" content="進徳海運株式会社" key="title" />
    <meta name="description" content="東広島に拠点を置く進徳海運株式会社のホームページです。主に船舶貸渡業を行なっています。会社情報、採用情報、サービスを掲載しています。" />
    <meta name="keywords" content="進徳海運,Shintoku、船舶,船主,シップオーナー,船舶貸渡業,ship, owner, 広島, japan, finance, chemical"></meta>
    <title>進徳海運株式会社</title>
    <link rel="icon" href="/faviocon.ico" />
    <meta name="content-language" content="ja" />
    <meta name="local" content="ja-JP"/>
    <meta name='url' content="https://www.shintokukk.co.jp/"/>
    <meta name='site_name' content='進徳海運株式会社'/>
    <meta name="google-site-verification" content="PgfRjyZftxIn0m4VL5mAmQJngXhFNyExy3mzlhU9nww" />
    <meta name='viewport' content='width=device-width, initial-scale=1.0, viewport-fit=cover' />
    <meta name='robots' content='all'/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta property="og:title" content="進徳海運"/>
    <meta property="og:description" content="東広島に拠点を置く進徳海運株式会社のホームページです。主に船舶貸渡業を行なっています。会社情報、採用情報、サービスを掲載しています。"/>
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.shintokukk.co.jp/" />
    <meta property="og:site_name" content="進徳海運株式会社" />
    <meta property="og:locale" content="ja_JP"  />
    </Head>
    <SDGsHero />
    <SdgsSection />
    </>
  )
}

export default sdgs