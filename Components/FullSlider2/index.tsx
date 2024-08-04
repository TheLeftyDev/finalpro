import React, { useRef, useState } from 'react'
import Image from 'next/image';
import {fullSlider2 } from '@/app/Mockdata';
const FullSlider2 = () => {
    const leftref = useRef<HTMLButtonElement>(null)
    const rightref = useRef<HTMLButtonElement>(null)
    const [i, seti] = useState(0)
    const nextSlide = () => {
      if (i === fullSlider2.length - 1) {
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
    if(i === fullSlider2.length - 1 && rightref.current){rightref.current.style.opacity = '0.3';}
    else if(i !== fullSlider2.length - 1 && rightref.current){rightref.current.style.opacity = '1';}
    if(i === 0 && leftref.current){leftref.current.style.opacity = '0.3';}
    else if(i !== 0 && leftref.current){leftref.current.style.opacity = '1';}
  
    return (
      <div className="imgg bg-white">
  
          <div className='fullSlider2'>
            <div className="buttons">
              <button className='leftar inline-block cursor-pointer transform -scale-x-100 opacity-30' ref={leftref} onClick={prevSlide}><Image className='icon' src='/sliderarrows/right.png' alt='' width={80} height={80} /></button>
              <button className='rightar inline-block cursor-pointer' ref={rightref} onClick={nextSlide}><Image className='icon' src='/sliderarrows/right.png' alt='' width={80} height={80} /></button>
            </div>
  
            <div className='sliderCards' style={{ transform: `translateX(-${i * 100}%)` }}>
              {fullSlider2.map((card) => (
                <div className="card flex flex-col">
                  <div className='imageDiv'>
                    <Image className='img' src={card.image} alt='desc' width={1800} height={1200} />
                  </div>
                </div>
  
              ))}
            </div>
  
          </div>
        </div>
    )
  }

export default FullSlider2



