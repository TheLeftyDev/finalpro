'use client'
import BgRequestProject from '@/app/../Components/BgRequestProject'
import Footer from '@/app/../Components/Footer'
import Navbar from '@/app/../Components/Navbar'
import ReqProject from '@/app/../Components/ReqProject'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const Requests = () => {
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
        <BgRequestProject/>
        <ReqProject/>
        <Footer page = '1'/>

    </div>
  )
}

export default Requests