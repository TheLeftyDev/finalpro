'use client'
import React from 'react';
import Image from 'next/image';
import '../../app/i18n';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className='ContactUs'>
            <div className="left">
                <h1 className='h1'>{t('contact')}</h1>
                <p className='p'>{t('description')}</p>
                <h1 className='address'>{t('address')}</h1>
                <div className="leftbottom">
                    <p className='p2'>{t('email')}</p>
                    <p className='p3'>{t('phone')}</p>
                </div>
            </div>

            <div className="right">
                <Image className='map' src='/map.png' alt="" width={800} height={800}/>
            </div>
        </div>
    );
};

export default ContactUs;
