import React from 'react'
import Navbar from '../../../Components/Navbar'
import Tailored from '../../../Components/Tailored'
import Footer from '../../../Components/Footer'
import ReqInfo from '@/app/../Components/ReqInfo'

const TailoredPage = () => {
  return (
    <div>
      <Navbar/>
      <Tailored/>
      <ReqInfo page='2'/>
      <Footer/>

    </div>
  )
}

export default TailoredPage