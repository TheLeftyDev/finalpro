import React from 'react'
import Image from 'next/image';
import { OD } from '@/app/Mockdata'
import { useTranslation } from 'react-i18next';

const WhyOutdorra = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="father bg-white">
            <div className="containerr">
                <div className='whyOutdorra flex'>
                    <div className="left">
                        <Image className='oplusa' src='/OplusA.png' alt='desc' width={800} height={800} />
                    </div>
                    <div className="right">
                        <p className='p1'>{t('WhyOUTDORRA')}</p>
                        <p className='p2'>{t('Enhance')}</p>
                        <p className='p3'>{t('UnmatchedQuality')}</p>
                        <div className="cards grid grid-cols-2">
                            {OD.map((card) => {
                                return (<div className='card'>
                                    <p className='p4 uppercase'>{t(card.name)}</p>
                                    <p className='p5'>{t(card.des)}</p>
                                </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyOutdorra