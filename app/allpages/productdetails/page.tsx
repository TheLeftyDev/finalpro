import BGSlider from '@/app/../Components/BGSlider'
import CouldntFind from '@/app/../Components/CouldntFind'
import Features from '@/app/../Components/Features'
import Footer from '@/app/../Components/Footer'
import Navbar from '@/app/../Components/Navbar'
import ProductApplication from '@/app/../Components/ProductApplication'
import SizeSlider from '@/app/../Components/SizeSlider'
import SlopedPergola from '@/app/../Components/SlopedPergola'
import Specs from '@/app/../Components/Specs'
import React from 'react'

const ProductDetails = () => {
  return (
    <div>
      <Navbar />
      <SizeSlider/>
      <SlopedPergola/>
      <Features/>
      <Specs/>
      <ProductApplication />
      <BGSlider />
      <CouldntFind page='3'/>
      <Footer />
    </div>
  ) 
}

export default ProductDetails