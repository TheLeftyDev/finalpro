import BGList from '@/app/../Components/BGList'
import CouldntFind from '@/app/../Components/CouldntFind'
import Footer from '@/app/../Components/Footer'
import Navbar from '@/app/../Components/Navbar'
import PergolaComp from '@/app/../Components/PergolaComp'
import React from 'react'

const Lists = () => {
    return (
        <div>
            <Navbar />
            <BGList/>
            <PergolaComp />
            <CouldntFind page='3' />
            <Footer page = '1'/>
        </div>
    )
}

export default Lists