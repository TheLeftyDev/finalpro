import React from 'react'
import SliderCollection from '../SliderCollection'
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const MeetOurCollection = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className='meetOurCollection'>
            <div className="top">
                <p className='p1'>{t('sustainableOutdoor')}</p>
                <p className='p2'>{t('anteTempus')} </p>
                <Link className='link font-bold' href='/allpages/projects'>{t('learnMore')}</Link>
            </div>

            <SliderCollection />
        </div>
    )
}

export default MeetOurCollection