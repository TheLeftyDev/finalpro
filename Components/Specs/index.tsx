import React, { useRef } from 'react'
import SpecsInternal from '../SpecsInternal'
import { useTranslation } from 'react-i18next';

const Specs = () => {
    const { t, i18n } = useTranslation();
    const detailsRef = useRef<HTMLDivElement>(null)
    const arrowRef = useRef<HTMLSpanElement>(null)
    const openClose = () => {
        if (detailsRef.current) {
            detailsRef.current.classList.toggle('open')
        }
        if (arrowRef.current) {
            arrowRef.current.classList.toggle('turned')
        }
    }
    return (
        <div className="father bg-white">

            <div className="containerr">
                <div className='specs'>
                    <div className='specstop'>
                        <p className='p1' onClick={openClose}> <span className='span1'>{t('specs')}</span> <span className='span2 inline-block' ref={arrowRef}>︾</span></p>
                        <div className='details' ref={detailsRef}>
                            <SpecsInternal />
                        </div>
                    </div>
                    <button className='btn'>{t('learnMore')}</button>
                </div>
            </div>
        </div>
    )
}

export default Specs