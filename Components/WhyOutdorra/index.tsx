import React from 'react'
import Image from 'next/image';
import { OD } from '@/app/Mockdata'

const WhyOutdorra = () => {
    return (
        <div className="father bg-white">
            <div className="containerr">
                <div className='whyOutdorra flex'>
                    <div className="left">
                        <Image className='oplusa' src='/OplusA.png' alt='desc' width={800} height={800} />
                    </div>
                    <div className="right">
                        <p className='p1'>Why OUTDORRA</p>
                        <p className='p2'>Enhance your living environment.</p>
                        <p className='p3'>Unmatched quality, innovation, and affordability</p>
                        <div className="cards grid grid-cols-2">
                            {OD.map((card) => {
                                return (<div className='card'>
                                    <p className='p4 uppercase'>{card.name}</p>
                                    <p className='p5'>{card.des}</p>
                                </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyOutdorra