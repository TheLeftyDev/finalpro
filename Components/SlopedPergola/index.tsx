'use client'
import React, { useRef } from 'react'
import Image from 'next/image';
import ReqInfo from '../ReqInfo'
const SlopedPergola = () => {
    const projects = useRef<HTMLDivElement>(null)
    const handleScroll = () => {
        projects.current?.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div className='SlopedPergola'>
            <div className="top flex justify-between">
                <div className='topleft'>
                    <p className='p1'>Sloped Pergola</p>
                    <div className='b1div' onClick={handleScroll}>
                        <Image className='scrollDown' src='/scrollDown.png' alt="" width={100} height={100} />
                        <button className='b1'>Scroll Down</button>
                    </div>
                </div>
                <p className='p2'>As small as a terrace or as large as a square, they give a breath of fresh air to any room, whether lean-to, with foldable roof, modular or with accessories.</p>
            </div>
            <p className='perp3'>Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.</p>
            <div  ref={projects}>
                <ReqInfo />
            </div>
        </div>
    )
}

export default SlopedPergola