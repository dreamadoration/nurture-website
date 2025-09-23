import React from 'react'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import Packages from './Packages'
import WhyChooseUs from './WhyChooseUs'
import TrainingSection from './TrainingSection'
import HowToScan from './Scan'
import CTA from './CTA'
import Work from './Work'
import Services from './Services'
import Team from './Team'
import Registration from './Registration'

export default function Home() {
  
  return (
    <>
    
    <HeroSection />
    <AboutSection />
    <Packages />
    <WhyChooseUs />
      <TrainingSection />
           <HowToScan />
         <CTA />
      <Work />
      <Services />
      <Team />
      <Registration />
    </>
  )
}
