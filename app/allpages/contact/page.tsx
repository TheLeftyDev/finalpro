'use client'
import React, { useEffect, useState } from 'react';
import ContactUs from '../../../Components/ContactUs';
import Navbar from '../../../Components/Navbar';
import Footer from '../../../Components/Footer';
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
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
      <ContactUs />
      <Footer page='1' />
    </div>
  );
}

export default ContactPage;
