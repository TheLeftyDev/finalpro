import React from 'react'
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faLocationDot } from '@fortawesome/free-solid-svg-icons';
const FamilyHouse = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="father">
            <div className="containerr">
                <div className='familyHouse'>
                    <div className="top flex justify-between">
                        <p className='p1'>{t('fhwg')}</p>
                        <div className="twoCircles flex flex-col">
                            <div className="city flex">
                                <p className='cty cursor-pointer'><FontAwesomeIcon icon={faLocationDot} /></p>
                                <p>{t('af')}</p>
                            </div>
                            <div className="address flex">
                                <p className='adrs cursor-pointer'><FontAwesomeIcon icon={faBuilding} /></p>
                                <p>{t('spgw')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <p className='p2'>{t('agspfasg')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FamilyHouse