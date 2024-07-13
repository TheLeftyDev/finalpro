'use client'
import React, { useState } from 'react'
import OurProjectsComp from '../OurProjectsComp'

const BgOurProjects = () => {
    // const Homeref = useRef(null)
    const [style1,setStyle1] = useState({backgroundColor:'black', color:'white', padding: '0.5vw 1vw', borderRadius: '2vw', transition:'0.5s'})
    const [style2,setStyle2] = useState({backgroundColor:'white', color:'black', padding: '0.5vw 1vw', borderRadius: '2vw', transition:'0.5s'})
    const [type, setType] = useState('home')
    const homeclick = () => {
        setType('home')
        setStyle1({backgroundColor:'black', color:'white', padding: '0.5vw 1vw ', borderRadius: '2vw',transition:'0.5s'})
        setStyle2({backgroundColor:'white', color:'black', padding: '0.5vw 1vw', borderRadius: '2vw', transition:'0.5s'})
        
    }
    const businessclick = () => {
        setType('business')
        setStyle2({backgroundColor:'black', color:'white', padding: '0.5vw 1vw ', borderRadius: '2vw',transition:'0.5s'})
        setStyle1({backgroundColor:'white', color:'black', padding: '0.5vw 1vw', borderRadius: '2vw', transition:'0.5s'})
    }
    return (
        <div className='bgOurProjects'>
            <div className="top">
                <div className="topleft">
                    <p className='p1'>Our Projects</p>
                    <button className='b1'>Scroll Down</button>
                </div>
                <div className="topright">
                    <p className='p2'>Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim morbi pulvinar. Ac hendrerit nisl rhoncus nisl tempus. Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim morbi pulvinar. Ac hendrerit nisl.</p>
                    <div className="buttons">
                        <div className="home" onClick={homeclick} style={style1}>Home</div>
                        <div className="business" onClick={businessclick} style={style2}>Business</div>
                    </div>
                </div>
            </div>
            <OurProjectsComp type={type} />
        </div>
    )
}

export default BgOurProjects