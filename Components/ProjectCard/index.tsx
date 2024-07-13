import React from 'react'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ obj , type }: any) => {
    if (obj.type === type) {
        return (
            <div className='ProjectCard'>
                <Image className='img' src={obj.imgSrc} alt="Description of image" width={300} height={300} />
                <div className="lowerCard">
                    <div className="nameCityAdress">

                        <p className='p5 font-semibold'>{obj.name}</p>
                        <div className="twoCircles flex flex-col">
                            <div className="city flex">
                                <p className='cty cursor-pointer'><FontAwesomeIcon icon={faLocationDot} /></p>
                                <p>{obj.city}</p>
                            </div>
                            <div className="address flex">
                                <p className='adrs cursor-pointer'><FontAwesomeIcon icon={faBuilding} /></p>
                                <p>{obj.address}</p>
                            </div>
                        </div>
                    </div>
                    <button className='btn2'>Find Out More <span className='span'>&gt;</span></button>
                </div>

            </div>
        )
    }
}

export default ProjectCard