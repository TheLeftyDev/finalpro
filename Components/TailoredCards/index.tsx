import React from 'react'
import { TC } from '@/app/Mockdata'
import TailoredCard from '../TailoredCard'
const TailoredCards = () => {
  return (
    <div className='TailoredCards'>
        <TailoredCard TC = {TC}/>
    </div>
  )
}

export default TailoredCards