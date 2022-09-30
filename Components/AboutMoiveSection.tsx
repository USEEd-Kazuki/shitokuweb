import React from 'react'
import Image from 'next/image'

const AboutMoiveSection = () => {
  return (
    <>
    <div className="aboutMoiveContaner">
                {/* homeMovie　*/}
                <div className='aboutMovieContent'>
                <div className='wave1'>
                <Image src={'/Wave1.svg'} alt={'Wave1'} width={1000} height={400}></Image>
                </div>
                <video className='HeroMovie' src="/HeroMovie.mp4"  playsInline autoPlay loop muted />
            </div>
    </div>
    </>
  )
}

export default AboutMoiveSection;