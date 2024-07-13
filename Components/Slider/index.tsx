'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image';
import { slider } from '@/app/Mockdata';
const Slider: any = () => {
  const leftref = useRef<HTMLButtonElement>(null)
  const rightref = useRef<HTMLButtonElement>(null)
  const [i, seti] = useState(0)
  const nextSlide = () => {
    if (i === slider.length - 1) {
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
  if(i === slider.length - 1 && rightref.current){rightref.current.style.opacity = '0.3';}
  else if(i !== slider.length - 1 && rightref.current){rightref.current.style.opacity = '1';}
  if(i === 0 && leftref.current){leftref.current.style.opacity = '0.3';}
  else if(i !== 0 && leftref.current){leftref.current.style.opacity = '1';}

  return (
    <div className="father bg-white">

      <div className="containerr">
        <div className='slider'>
          <div className="buttons">
            <button className='leftar inline-block cursor-pointer transform -scale-x-100 opacity-30' ref={leftref} onClick={prevSlide}><Image src='/sliderarrows/right.png' alt='' width={80} height={80} /></button>
            <button className='rightar inline-block cursor-pointer' ref={rightref} onClick={nextSlide}><Image src='/sliderarrows/right.png' alt='' width={80} height={80} /></button>
          </div>

          <div className='sliderCards' style={{ transform: `translateX(-${i * 45}%)` }}>
            {slider.map((card) => (
              <div className="card flex flex-col">
                <div className='imageDiv'>
                  <Image src={card.image} alt='desc' width={800} height={800} />
                </div>
                <p className='p1'>{card.name}</p>
                <p className='p2'>{card.des}</p>
                <button className='btn3'>Find Out More <span className='span'>&gt;</span></button>
              </div>

            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Slider