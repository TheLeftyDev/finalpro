import React from 'react'
import Image from 'next/image';
import { PA } from '@/app/Mockdata'
import ApplicationCard from '../ApplicationCard';
import { useTranslation } from 'react-i18next';

const ProductApplication = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="father bg-white">

      <div className="containerr">
        <div className='ProductApplication'>
          <p className='ptitle text-center'>{t('pa')}</p>
          <p className='psubtitle text-center'>{t('vvimq')}</p>
          <div className="onetothree grid grid-cols-3">
            <div className="one flex">
              <ApplicationCard PA={PA} />
            </div>
            <div className="two">
              <Image className='PA' src='/ProductApplication/1.png' alt="" width={300} height={600}/>
            </div>
            <div className="three flex flex-col justify-between">
              <Image className='PA' src='/ProductApplication/2.png' alt="" width={300} height={600}/>
              <Image className='PA' src='/ProductApplication/3.png' alt="" width={300} height={600}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductApplication