import React from 'react'
import ReqProjectMid from '../ReqProjectsMid'
import { useTranslation } from 'react-i18next';


const ReqProject = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className='ReqProject'>
            <div className="top flex">
                <p className='p1'>{t('rap')}</p>
                <p className='p2'>{t('reqlorem')}</p>
            </div>
            <ReqProjectMid />
        </div>
    )
}

export default ReqProject