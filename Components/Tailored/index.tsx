import React from 'react'
import TailoredCards from '../TailoredCards'
import { useTranslation } from 'react-i18next';

const Tailored = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="father bg-white">
            <div className="containerr">
                <div className='Tailored'>
                    <div className="top">
                        <p className='p1'>{t('tpd')}</p>
                        <p className='p2'>{t('uuisdn')}</p>
                    </div>
                    <TailoredCards/>

                </div>
            </div>
        </div>
    )
}

export default Tailored