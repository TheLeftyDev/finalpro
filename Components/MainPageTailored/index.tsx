import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const MainPageTailored = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="fathergrey">
            <div className="containerr">
                <div className='mainPageTailored flex'>
                    <div className="left">
                        <Image className='img' src='/MainPageTailored/01.png' alt='desc' width={800} height={800} />
                    </div>
                    <div className="right">
                        <p className='p1'>{t('tailored')}</p>
                        <p className='p2'>{t('pd')}</p>
                        <p className='p3'>{t('wdyoabstm')}</p>
                        <Link className='link' href='/allpages/tailored'>{t('explore')}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPageTailored