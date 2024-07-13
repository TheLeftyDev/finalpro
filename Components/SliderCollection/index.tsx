'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import { sliderCollection } from '@/app/Mockdata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
const SliderCollection = () => {
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

  return (
    <div className="father bg-white">
      <div className="containerr">
        <div className='sliderCollection'>
          <p className='p0 inline-block'>Meet Our Collection</p>
          <button className='leftar inline-block cursor-pointer' onClick={prevSlide}><FontAwesomeIcon icon={faCircleArrowLeft} /></button>
          <button className='rightar inline-block cursor-pointer' onClick={nextSlide}><FontAwesomeIcon icon={faCircleArrowRight} /></button>

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