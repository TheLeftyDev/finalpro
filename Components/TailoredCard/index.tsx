import React from 'react'
import Image from 'next/image';

const TailoredCard = ({ TC }: any) => {
    return (
        <div>
            {TC.map((card: any, index: any) => {

                if (index % 2 === 0) {
                    return (
                        <div className='TailoredCardR'>
                            <div className="txt">
                                <p className='p3'>Step {index + 1}</p>
                                <p className='p4'>{card.name}</p>
                                <p className='p5'>{card.desc}</p>
                            </div>
                            <Image className='tailoredimg'
                                src={card.imgSrc}
                                alt="Description of image"
                                width={800}
                                height={800}
                            />

                        </div>
                    )
                }
                else
                return (
                    <div className='TailoredCardL'>
                        <Image className='tailoredimg'
                            src={card.imgSrc}
                            alt="Description of image"
                            width={800}
                            height={800}
                        />
                        <div className="txt">
                            <p className='p3'>Step {index + 1}</p>
                            <p className='p4'>{card.name}</p>
                            <p className='p5'>{card.desc}</p>
                        </div>
                        

                    </div>
                )






            })}
        </div>
    )
}

export default TailoredCard