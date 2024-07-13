import React from 'react'
import Image from 'next/image';
import { LF } from '@/app/Mockdata';

const Leaf = () => {
    return (
        <div className="fathergrey">
            <div className="containerr">
                <div className='leaf'>
                    <div className="top flex items-center justify-between">
                        <div className="title">
                            <p className='p1'>We Support</p>
                            <p className='p2'>The Sustainability</p>
                        </div>
                        <Image className='img' src='/leaf.png' alt='desc' width={800} height={800} />
                    </div>
                    <div className="bottom grid grid-cols-4">
                        {
                            LF.map((card) => {
                                return (
                                    <div className='card'>
                                        <Image className='img2' src={card.image} alt='desc' width={800} height={800} />
                                        <p className='p3'>{card.des}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="line"></div>
                </div>
            </div>
        </div>
    )
}

export default Leaf