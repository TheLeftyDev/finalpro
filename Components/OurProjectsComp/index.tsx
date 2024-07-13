import React from 'react'
import ProjectCards from '../ProjectCards'

const OurProjectsComp = ({type}:any) => {
    
    return (
        <div className="father bg-white">

            <div className="containerr">
                <div className='OurProjectComp'>
                    <ProjectCards type = {type} />
                </div>
            </div>
        </div>
    )
}

export default OurProjectsComp