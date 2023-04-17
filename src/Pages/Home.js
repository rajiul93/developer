import React from 'react'
import HeroSection from '../Component/Navbar/HeroSection/HeroSection'
import Navbar from '../Component/Navbar/Navbar'
import Service from '../Component/Service/Service'
import WhoAnI from '../Component/WhoAmI/WhoAnI'

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Service />
      <WhoAnI />
      <h1>home</h1>
 </div>
  )
}

export default Home