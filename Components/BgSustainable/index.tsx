import React from 'react'
import Image from 'next/image';

const BgSustainable = () => {
    return (
        <div className='bgSustainable'>
            <Image className='img' src='/Backgrounds/liveSustainable.png' alt='desc' width={1600} height={800} />
            <div className='bgps'>
                <p className='p1 font-semibold text-white'>Live Sustainable</p>
                <p className='p2 text-white'>Feel The Nature With</p>
                <Image className='img2' src='/Logos/oa.png' alt='desc' width={400} height={400} />
            </div>
        </div>
    )
}

export default BgSustainable