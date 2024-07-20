import React from 'react'
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const BgSustainable = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className='bgSustainable'>
            <Image className='img' src='/Backgrounds/liveSustainable.png' alt='' width={1600} height={800} />
            <div className='bgps'>
                <p className='p1 font-semibold text-white'>{t('liveSustainable')}</p>
                <p className='p2 text-white'>{t('feelTheNatureWith')}</p>
                <Image className='img2' src='/Logos/oa.png' alt='' width={400} height={400} />
            </div>
        </div>
    )
}

export default BgSustainable