import React from 'react'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faLocationDot } from '@fortawesome/free-solid-svg-icons';
const FamilyHouse = () => {
    return (
        <div className="father">
            <div className="containerr">
                <div className='familyHouse'>
                    <div className="top flex justify-between">
                        <p className='p1'>Family House With Garden</p>
                        <div className="twoCircles flex flex-col">
                            <div className="city flex">
                                <p className='cty cursor-pointer'><FontAwesomeIcon icon={faLocationDot} /></p>
                                <p>{'Antibes - France'}</p>
                            </div>
                            <div className="address flex">
                                <p className='adrs cursor-pointer'><FontAwesomeIcon icon={faBuilding} /></p>
                                <p>{'Sloped Pergolas, Glass walls'}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <p className='p2'>Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FamilyHouse