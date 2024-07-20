'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image';
import { sliderCollection } from '@/app/Mockdata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const SliderCollection = () => {
  const { t, i18n } = useTranslation();

  const leftref = useRef<HTMLButtonElement>(null)
  const rightref = useRef<HTMLButtonElement>(null)
  const [i, seti] = useState(0)
  const nextSlide = () => {
    if (i === sliderCollection.length - 1) {
      //do nothing

    }
    else { seti(i + 1) }
  }

  const prevSlide = () => {
    if (i === 0) {
      //do nothing
    }
    else { seti(i - 1) }
  }
  if (i === sliderCollection.length - 1 && rightref.current) { rightref.current.style.opacity = '0.3'; }
  else if (i !== sliderCollection.length - 1 && rightref.current) { rightref.current.style.opacity = '1'; }
  if (i === 0 && leftref.current) { leftref.current.style.opacity = '0.3'; }
  else if (i !== 0 && leftref.current) { leftref.current.style.opacity = '1'; }

  return (
    <div className="father bg-white">
      <div className="containerr">
        <div className='sliderCollection'>
          <div className="twoStuffs">
            <p className='p0'>{t('meetOurCollection')}</p>
            <div className="buttons">
              <button className='leftar inline-block cursor-pointer transform -scale-x-100 opacity-30' ref={leftref} onClick={prevSlide}><Image src='/sliderarrows/right.png' alt='' width={80} height={80} /></button>
              <button className='rightar inline-block cursor-pointer' ref={rightref} onClick={nextSlide}><Image src='/sliderarrows/right.png' alt='' width={80} height={80} /></button>
            </div>
          </div>


          <div className='sliderCards' style={{ transform: `translateX(-${i * 33}%)` }}>
            {sliderCollection.map((card) => (
              <div className="card flex flex-col">
                <div className='imageDiv'>
                  <Image className='img' src={card.image} alt='desc' width={800} height={800} />
                </div>
                <p className='p1'>{card.name}</p>
              </div>

            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default SliderCollection