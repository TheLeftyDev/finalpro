import React from 'react'
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const CouldntFind = ({ page }: any) => {
    const { t, i18n } = useTranslation();

    let style: any = {};
    if (page == '1') {
        style = { backgroundColor: '#F0F2F3', paddingLeft: '30vw', paddingRight: '30vw', paddingTop: '5vw', paddingBottom: '5vw', borderRadius: '3vw' }
    }
    else if (page == '2') {
        style = { backgroundColor: 'white', paddingLeft: '30vw', paddingRight: '30vw', paddingTop: '5vw', paddingBottom: '5vw', borderRadius: '3vw' }
    }
    else if (page == '3') {
        style = { backgroundColor: 'white', paddingLeft: '5vw', paddingRight: '5vw', paddingTop: '5vw', paddingBottom: '5vw', borderRadius: '3vw' }
    }

    return (
        <div className="father" style={style}>
            
            <div className='couldntFind'>
                <h1 className='h1'>{t('cfwyalf')}</h1>
                <p className='p1'>{t('waartoytgthooos')}</p>
                <p className='p2'>{t('as')}</p>
                <div className="request flex items-center justify-center">
                    <div className='emptybox'>{t('rap')}</div>
                    <div className="circle"></div>
                    <Image className='arrowSign relative pointer-events-none' src='/arrowSign.png' alt="" width={10} height={10}/>
                </div>
            </div>
        </div>
    )
}

export default CouldntFind