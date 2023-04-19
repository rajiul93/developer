import React from 'react'
import Counting from '../Component/Counting/Counting'
import Footer from '../Component/Footer/Footer'
import HeroSection from '../Component/Navbar/HeroSection/HeroSection'
import Navbar from '../Component/Navbar/Navbar'
import Review from '../Component/Review/Review'
import Service from '../Component/Service/Service'
import WhoAnI from '../Component/WhoAmI/WhoAnI'
import WhyMe from '../Component/WhyMe/WhyMe'

function Home() {

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Service />
      <WhoAnI />
      <Counting />
      <WhyMe />
      <Review />
      <Footer />
    </div>
  )
}

export default Home