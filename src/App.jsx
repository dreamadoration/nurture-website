import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './pages/layout/Header'
import HeroSection from './pages/home/HeroSection'
import Packages from './pages/home/Packages'
import TrainingSection from './pages/home/TrainingSection'
import Work from './pages/home/Work'
import Services from './pages/home/Services'
import Team from './pages/home/Team'
import Footer from './pages/layout/Footer'
import CTA from './pages/home/CTA'
import Registration from './pages/home/Registration'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeroSection />
      <Packages />
    
      <TrainingSection />
         <CTA />
      <Work />
      <Services />
      <Team />
      <Registration />
     
    <Footer />
    </>
  )
}

export default App
