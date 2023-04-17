import React from 'react'
import HeroSection from '../Component/Navbar/HeroSection/HeroSection'
import Navbar from '../Component/Navbar/Navbar'
import Service from '../Component/Service/Service'

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Service />
      <h1>home</h1>
 </div>
  )
}

export default Home