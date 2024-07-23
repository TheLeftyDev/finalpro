import React from 'react'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ obj , type }: any) => {
    const { t, i18n } = useTranslation();
    if (obj.type === type) {
        return (
            <div className='ProjectCard'>
                <Image className='img' src={t(obj.imgSrc)} alt="" width={300} height={300} />
                <div className="lowerCard">
                    <div className="nameCityAdress">

                        <p className='p5 font-semibold'>{t(obj.name)}</p>
                        <div className="twoCircles flex flex-col">
                            <div className="city flex">
                                <p className='cty cursor-pointer'><FontAwesomeIcon icon={faLocationDot} /></p>
                                <p>{t(obj.city)}</p>
                            </div>
                            <div className="address flex">
                                <p className='adrs cursor-pointer'><FontAwesomeIcon icon={faBuilding} /></p>
                                <p>{t(obj.address)}</p>
                            </div>
                        </div>
                    </div>
                    <button className='btn2'>{t('fom')} <span className='span'>&gt;</span></button>
                </div>

            </div>
        )
    }
}

export default ProjectCard