import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const MainPageTailored = () => {
    return (
        <div className="fathergrey">
            <div className="containerr">
                <div className='mainPageTailored flex'>
                    <div className="left">
                        <Image className='img' src='/MainPageTailored/01.png' alt='desc' width={800} height={800} />
                    </div>
                    <div className="right">
                        <p className='p1'>Tailored</p>
                        <p className='p2'>Project Design</p>
                        <p className='p3'>We design your outdoor and backyard space to maximize the usage, ultimately all year around. Let’s make your dreams come true now.</p>
                        <Link className='link' href='/allpages/tailored'>Explore →</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPageTailored