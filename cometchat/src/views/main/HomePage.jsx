import React from 'react'
import Advantage from '../../components/main/Advantage'
import Program from '../../components/main/Program'
import FAQ from '../../components/main/FAQ'
import CTA from '../../components/main/CTA'
import HeroSection from '../../components/main/HeroSection'
import Customer from '../../components/main/Customer'

const HomePage = () => {
  return (
    <div className=''>
      <HeroSection/>
      <Customer/>
      <Advantage/>
      <Program/>
      <FAQ/>
      <CTA/>
    </div>
  )
}

export default HomePage