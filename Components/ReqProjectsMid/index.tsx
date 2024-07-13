import React from 'react'
import Image from 'next/image';
import PersonalInfo from '../PersonalInfo'
const ReqProjectMid = () => {
    return (
        <div className="father">
            <div className="containerr">
                <div className='reqProjectMid'>
                    <div className="mid flex">
                        <div className="midleft">
                            <Image className='reqimage' src='/Backgrounds/RequestAProject.png' alt="" width={800} height={600} />
                        </div>
                        <div className="midright">
                            <PersonalInfo />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReqProjectMid