import Head from 'next/head'
import React from 'react'

const Loading = () => {
  return (
    <>
    <Head>
      <title>進徳海運株式会社</title>
      <meta property="og:title" content="進徳海運株式会社" key="title" />
      <meta name='viewport' content='width=device-width, initial-scale=1.0, viewport-fit=cover' />
    <meta  name='robots' content='all'/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content="東広島に拠点を置く進徳海運株式会社のホームページです。主に船舶貸渡業を行なっています。会社情報、採用情報、サービスを掲載しています。" />
    <meta name="keywords" content="進徳海運,Shintoku、船舶,船主,シップオーナー,船舶貸渡業,ship, owner, 広島, japan, finance, chemical"></meta>
    </Head>
    <div className="LoadingContent">
    <video className='sendouMovie' src="/sendou.mp4" poster='/sendou.jpg'  playsInline autoPlay muted />
    </div>
    </>
  )
}

export default Loading