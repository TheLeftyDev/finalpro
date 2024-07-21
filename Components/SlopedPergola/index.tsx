import React, { useRef } from 'react'
import Image from 'next/image';
import ReqInfo from '../ReqInfo'
import { useTranslation } from 'react-i18next';

const SlopedPergola = () => {
    const { t, i18n } = useTranslation();
    const projects = useRef<HTMLDivElement>(null)
    const handleScroll = () => {
        projects.current?.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div className='SlopedPergola'>
            <div className="top flex justify-between">
                <div className='topleft'>
                    <p className='p1'>{t('slopedpergola')}</p>
                    <div className='b1div' onClick={handleScroll}>
                        <Image className='scrollDown' src='/scrollDown.png' alt="" width={100} height={100} />
                        <button className='b1'>{t('sd')}</button>
                    </div>
                </div>
                <p className='p2'>{t('asaatoalaas')}</p>
            </div>
            <p className='perp3'>{t('snaodf')}</p>
            <div  ref={projects}>
                <ReqInfo />
            </div>
        </div>
    )
}

export default SlopedPergola