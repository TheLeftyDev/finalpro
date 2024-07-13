import React from 'react'
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

const HomePage = () => {
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