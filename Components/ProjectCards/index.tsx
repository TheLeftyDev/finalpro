import React from 'react'
import ProjectCard from '../ProjectCard'
import { PrC } from '@/app/Mockdata'
const ProjectCards = ({type}:any) => {
    return (
        <div className='ProjectCards grid grid-cols-3'>
            {PrC.map((obj) => {
                return <ProjectCard obj={obj} type={type} />
            })}
        </div>
    )
}

export default ProjectCards