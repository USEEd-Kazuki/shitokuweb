import React from 'react'
import AboutHero from '../Components/AboutHero';
import AboutMoiveSection from '../Components/AboutMoiveSection';
import AboutSection from '../Components/AboutSection';


const about = () => {
  return (
    <>
    <div className="mainbody">
      <AboutHero />
      <AboutMoiveSection />
      <AboutSection />
    </div>
    </>
  )
}

export default about;