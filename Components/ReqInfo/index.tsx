import React from 'react'
import { useTranslation } from 'react-i18next';

const ReqInfo = ({ page }: any) => {
    const { t, i18n } = useTranslation();
    let style: any = {};
    if (page == '2') {
        style = { backgroundColor: '#F0F2F3', marginLeft: '5vw', marginRight: '5vw', borderRadius: '3vw' }
    }
    return (
        <div className="ReqInfo flex" style={style}>
            <p className='p3 font-semibold'>{t('rioaq')}</p>
            <div>
                <p className='p4'>{t('reqlorem')}</p>
                <button className='btn'>{t('cu')}<span className='span'>&gt;</span></button>
            </div>
        </div>

    )
}

export default ReqInfo