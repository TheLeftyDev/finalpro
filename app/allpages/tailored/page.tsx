'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '../../../Components/Navbar'
import Tailored from '../../../Components/Tailored'
import Footer from '../../../Components/Footer'
import ReqInfo from '@/app/../Components/ReqInfo'
import { useTranslation } from 'react-i18next'

const TailoredPage = () => {
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
      <Tailored/>
      <ReqInfo page='2'/>
      <Footer/>

    </div>
  )
}

export default TailoredPage