import React from 'react'
import SliderCollection from '../SliderCollection'
import Link from 'next/link';

const MeetOurCollection = () => {
    return (
        <div className='meetOurCollection'>
            <div className="top">
                <p className='p1'>Sustainable Outdoor Living Structures I Custom Pergolas, Sunrooms, Louvers & ADU Modules</p>
                <p className='p2'>Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim morbi pulvinar. Ac hendrerit nisl rhoncus nisl tempus. Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim morbi pulvinar. Ac hendrerit nisl rhoncus nisl tempus. </p>
                <Link className='link font-bold' href='/allpages/projects'>→ Learn More</Link>
            </div>

            <SliderCollection />
        </div>
    )
}

export default MeetOurCollection