import Head from 'next/head'
import React from 'react'

const Loading = () => {
  return (
    <>
    <Head>
      <title>進徳海運株式会社</title>
      <meta property="og:title" content="進徳海運株式会社" key="title" />
    </Head>
    <div className="LoadingContent">
    <video className='sendouMovie' src="/sendou.mp4"  playsInline autoPlay muted />
    </div>
    </>
  )
}

export default Loading