'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image';
import {sizeSlider } from '@/app/Mockdata';
const SizeSlider = () => {
    const leftref = useRef<HTMLButtonElement>(null)
    const rightref = useRef<HTMLButtonElement>(null)
    const [i, seti] = useState(0)
    const [arr,setArr] = useState([53.34,24,30.02,53.32])
    let arr2 = [0]
    let x = 0;
    let cem = 0;
    while(x<arr.length){
      cem +=arr[x]
      cem += 0.5
      arr2.push(cem)
      x++
    }
    console.log(arr2);
    
    const nextSlide = () => {
      if (i === sizeSlider.length - 1) {
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
    if(i === sizeSlider.length - 1 && rightref.current){rightref.current.style.opacity = '0.3';}
    else if(i !== sizeSlider.length - 1 && rightref.current){rightref.current.style.opacity = '1';}
    if(i === 0 && leftref.current){leftref.current.style.opacity = '0.3';}
    else if(i !== 0 && leftref.current){leftref.current.style.opacity = '1';}
  
    return (

          <div className='sizeSlider'>
            <div className="buttons">
              <button className='leftar inline-block cursor-pointer transform -scale-x-100 opacity-30' ref={leftref} onClick={prevSlide}><Image className='icon' src='/sliderarrows/right.png' alt='' width={80} height={80} /></button>
              <button className='rightar inline-block cursor-pointer' ref={rightref} onClick={nextSlide}><Image className='icon' src='/sliderarrows/right.png' alt='' width={80} height={80} /></button>
            </div>
  
            <div className='sliderCards' style={{ transform: `translateX(-${arr2[i]}vw)` }}>
              {sizeSlider.map((card) => (
                <div className="card flex flex-col">
                  <div className='imageDiv'>
                  <Image src={card.image} className='img' alt='desc' width={1000} height={1000} /> 
                  </div>
                </div>
  
              ))}
            </div>
  
          </div>
  
    )
  }

export default SizeSlider