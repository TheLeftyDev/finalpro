'use client'
import BgRequestProject from '@/app/../Components/BgRequestProject'
import Footer from '@/app/../Components/Footer'
import Navbar from '@/app/../Components/Navbar'
import ReqProject from '@/app/../Components/ReqProject'
import React from 'react'

const Requests = () => {
  return (
    <div>
        <Navbar/>
        <BgRequestProject/>
        <ReqProject/>
        <Footer page = '1'/>

    </div>
  )
}

export default Requests