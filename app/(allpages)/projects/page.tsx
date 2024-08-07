'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '../../../Components/Navbar'
import Footer from '../../../Components/Footer'
import CouldntFind from '../../../Components/CouldntFind'
import Bg2Projects from '@/app/../Components/Bg2Projects'
import BgOurProjects from '@/app/../Components/BgOurProjects'
import { useTranslation } from 'react-i18next'

const Projects = () => {
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
      <Bg2Projects/>
      <BgOurProjects/>
      <CouldntFind page={'2'}/>
      <Footer page={'1'}/>
    </div>
  )
}

export default Projects