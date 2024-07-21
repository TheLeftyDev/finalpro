'use client'
import React from 'react'
import ContactUs from '../../../Components/ContactUs'
import Navbar from '../../../Components/Navbar'
import Footer from '../../../Components/Footer'
const ContactPage = () => {
  return (
    <div>
      <Navbar/>
      <ContactUs/>
      <Footer page = '1'/>

        
    </div>
  )
}

export default ContactPage