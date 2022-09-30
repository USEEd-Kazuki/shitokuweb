import React from 'react'
import Header from './Header'

const RecruitHero = () => {
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
            <h1>海運業界で、</h1>
            <h1>最も必要とされる</h1>
            <h1>企業グループへ。</h1>
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

export default RecruitHero