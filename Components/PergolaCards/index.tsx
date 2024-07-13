import React from 'react'
import PergolaCard from '../PergolaCard'
import { PC } from '@/app/Mockdata'
const PergolaCards = () => {
    return (

        <div className='PergolaCards grid grid-cols-2'>
            {PC.map((obj) => {
                return <PergolaCard obj={obj} />
            })}
        </div>
    )
}

export default PergolaCards