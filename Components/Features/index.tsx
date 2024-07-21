import React from 'react'
import { FE } from '@/app/Mockdata'
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const Features = () => {
    const { t, i18n } = useTranslation();
    return (

        <div className="father bg-white">

            <div className="containerr">
                <div className='Features grid grid-cols-3'>
                    <div className="one flex flex-col">
                        <p className='p1'>{t('features')}</p>
                        <p className='p2'>{t('vvimq')}</p>
                    </div>
                    <div className="two col-span-2 grid grid-cols-2">
                        {FE.map((card) => {
                            return (
                                <div className='card flex'>
                                    <div className="left">
                                        <p className='p3 font-semibold'>{card.name}</p>
                                        <p className='p4'>{card.des}</p>
                                    </div>
                                    <div className="right">
                                        <Image className='FE' src={card.icon} alt="" width={300} height={300}/>
                                    </div>
                                </div>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features