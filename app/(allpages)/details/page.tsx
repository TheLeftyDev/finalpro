'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '../../../Components/Navbar'
import Footer from '../../../Components/Footer'
import Needs from '@/app/../Components/Needs'
import FamilyHouse from '@/app/../Components/FamilyHouse'
import FullSlider from '@/app/../Components/FullSlider'
import Slider from '@/app/../Components/Slider'
import CouldntFind from '@/app/../Components/CouldntFind'
import { useTranslation } from 'react-i18next'

const Details = () => {
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