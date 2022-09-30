import React from 'react'
import Header from './Header'

const ServiceHero = () => {
  return (
    <>
    <section>
    <div className='heroContainer'>
        {/* Header */}
        <div>
            <Header />
        </div>
        {/* title */}
        <div className='aboutHeroTitle'>
          <div className="aboutSubHeroMainTitle">
            <h1>海運は、</h1>
            <h1>私たちの暮らしや</h1>
            <h1>産業を支える</h1>
            <h1>「縁の下の力持ち」です。</h1>
          </div>
        </div>
        {/*Video */}
        <div className='movieContent'>
            <video className='HeroMovie' src="/Herowave.mp4"  playsInline autoPlay loop muted />
        </div>
    </div>
</section>
    </>
  )
}

export default ServiceHero