'use client'
import React from 'react';
import Image from 'next/image';
import '../../app/i18n';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className='ContactUs flex justify-between px-20 py-20'>
            <div className="left">
                <h1 className='h1 text-7xl font-md mb-8'>{t('contact')}</h1>
                <p className='p w-96'>{t('description')}</p>
                <h1 className='text-6xl mt-24 mb-32'>{t('address')}</h1>
                <div className="leftbottom flex gap-20">
                    <p className='p2 text-4xl'>{t('email')}</p>
                    <p className='p3 text-4xl'>{t('phone')}</p>
                </div>
            </div>

            <div className="right">
                <Image className='map' src='/map.png' alt="" width={800} height={800}/>
            </div>
        </div>
    );
};

export default ContactUs;
