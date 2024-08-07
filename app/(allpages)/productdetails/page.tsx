'use client'
import BGSlider from '@/app/../Components/BGSlider'
import CouldntFind from '@/app/../Components/CouldntFind'
import Features from '@/app/../Components/Features'
import Footer from '@/app/../Components/Footer'
import Navbar from '@/app/../Components/Navbar'
import ProductApplication from '@/app/../Components/ProductApplication'
import SizeSlider from '@/app/../Components/SizeSlider'
import SlopedPergola from '@/app/../Components/SlopedPergola'
import Specs from '@/app/../Components/Specs'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const ProductDetails = () => {
  const { t, i18n } = useTranslation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const ENAZ = localStorage.getItem('language');
    if (ENAZ === 'en') {
      i18n.changeLanguage('en');
    } else if (ENAZ === 'az') {
      i18n.changeLanguage('az');
    }
    setInitialized(true);
  }, [i18n]);

  if (!initialized) {
    return null;
  }
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
      <Footer page = '1' />
    </div>
  ) 
}

export default ProductDetails