'use client'
import React, { useEffect, useState } from 'react'
import Navbar from './../Components/Navbar'
import './lib/fontawesome';
import WhyOutdorra from './../Components/WhyOutdorra';
import Inspire from './../Components/Inspire';
import MainPageTailored from './../Components/MainPageTailored';
import Leaf from './../Components/Leaf';
import Footer from './../Components/Footer';
import BgSustainable from './../Components/BgSustainable';
import MeetOurCollection from './../Components/MeetOurCollection';
import CouldntFind from './../Components/CouldntFind';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
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
      <BgSustainable/>
      <MeetOurCollection/>
      <WhyOutdorra/>
      <Inspire/>
      <MainPageTailored/>
      <Leaf/>
      <CouldntFind page = {'1'}/>
      <Footer page = {'1'}/>
    </div>
  )
}

export default HomePage