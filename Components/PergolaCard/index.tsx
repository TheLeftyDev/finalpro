import React from 'react'
import Image from 'next/image';

const PergolaCard = ({ obj }: any) => {
  return (
    <div className='PergolaCard'>
      <Image className='map' src={obj.imgSrc} alt="" width={800} height={600} />
      <div className="lowerCard">
        <p className='p5 font-semibold'>{obj.name}</p>
        <p className='p6'>{obj.desc}</p>
        <button className='btn2'>Find Out More <span className='span'>&gt;</span></button>
      </div>

    </div>
  )
}

export default PergolaCard