import React from 'react'
import Header from './Header'

const AboutHero = () => {
  return (
    <section>
        <div className='heroContainer'>
            {/* Header */}
            <div>
                <Header />
            </div>
            {/* title */}
            <div className='aboutHeroTitle'>
              <div className="aboutSubHeroMainTitle">
                <h1>日本と海外を結び、</h1>
                <h1>皆さんの暮らしを支えます。</h1>
              </div>
            </div>
            {/*Video */}
            <div className='movieContent'>
                <video className='HeroMovie' src="/Herowave.mp4"  playsInline autoPlay loop muted />
            </div>
        </div>

    </section>
  )
}

export default AboutHero