import React from 'react'
import { SI } from '@/app/Mockdata'

const SpecsInternal = () => {
    return (
        <div className='SpecsInternal'>
            <div className="cards flex flex-col">
                {SI.map((card, index) => {

                    if (index % 2 == 0) {
                        return (
                            <div className="card flex">
                                <div className="p101div">
                                    <p className='p101'>{card.name}</p>
                                </div>
                                <div className="p102div">
                                    <p className='p102'>{card.des}</p>
                                </div>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div className="card flex">
                                <div className="p101div2">
                                    <p className='p1012'>{card.name}</p>
                                </div>
                                <div className="p102div2">
                                    <p className='p1022'>{card.des}</p>
                                </div>
                            </div>)
                    }

                })}

            </div>
        </div>
    )
}

export default SpecsInternal