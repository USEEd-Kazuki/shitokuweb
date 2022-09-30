import React from 'react';
import Header from './Header';
import Image from 'next/image';

const Hero = () => {
  return (
    <section>
        <div className='heroContainer'>
            {/* Header */}
            <div>
                <Header />
            </div>

            {/* title */}
            <div className='heroTitle'>
              <div
              className='shintokuLogo'>
              <Image src={'/shintokuLogo.svg'} alt={'logo'} width={200} height={200}></Image>
              </div>
              <Image src={'/anker.svg'} alt={'anker'} width={80} height={140}></Image>
              <h2 className='scroll'>Please scroll</h2>
            </div>
            {/*Video */}
            <div className='movieContent'>
                <video className='HeroMovie' src="/Herowave.mp4"  playsInline autoPlay loop muted />
            </div>
        </div>

    </section>
  )
}

export default Hero;