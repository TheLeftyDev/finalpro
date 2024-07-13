import React from 'react'
import Navbar from '../../../Components/Navbar'
import Footer from '../../../Components/Footer'
import Needs from '@/app/../Components/Needs'
import FamilyHouse from '@/app/../Components/FamilyHouse'
import FullSlider from '@/app/../Components/FullSlider'
import Slider from '@/app/../Components/Slider'
import CouldntFind from '@/app/../Components/CouldntFind'

const Details = () => {
  return (
    <div>
      <Navbar/>
      <FamilyHouse/>
      <FullSlider/>
      <Needs/>
      <Slider/>
      <CouldntFind page={'3'}/>
      <Footer/>
      
    </div>
  )
}

export default Details