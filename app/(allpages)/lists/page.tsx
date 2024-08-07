'use client'
import BGList from '@/app/../Components/BGList'
import CouldntFind from '@/app/../Components/CouldntFind'
import Footer from '@/app/../Components/Footer'
import Navbar from '@/app/../Components/Navbar'
import PergolaComp from '@/app/../Components/PergolaComp'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const Lists = () => {
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
            <BGList/>
            <PergolaComp />
            <CouldntFind page='3' />
            <Footer page = '1'/>
        </div>
    )
}

export default Lists