'use client'
import React, { useRef } from 'react'
import PergolaCards from '../PergolaCards'
import Image from 'next/image';
import ReqInfo from '../ReqInfo'
const PergolaComp = () => {
    const projects = useRef<HTMLDivElement>(null)
    const handleScroll = () => {
        projects.current?.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div className='PergolaComp'>
            <div className="top flex justify-between">
                <div className='topleft'>
                    <p className='p1'>Pergola</p>
                    <div className='b1div' onClick={handleScroll}>
                        <Image className='scrollDown' src='/scrollDown.png' alt="" width={100} height={100} />
                        <button className='b1'>Scroll Down</button>
                    </div>
                </div>
                <p className='p2'>Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim morbi pulvinar. Ac hendrerit nisl rhoncus nisl tempus. Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim morbi pulvinar. Ac hendrerit nisl.</p>
            </div>
            <div>
                <ReqInfo />
            </div>
            <div className='PCHolder' ref={projects}>
            <PergolaCards />
            </div>
        </div>
    )
}

export default PergolaComp