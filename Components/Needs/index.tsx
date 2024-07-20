import React from 'react'
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const Needs = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="father">
            <div className="containerr">
                <div className='needs grid grid-cols-2'>
                    <div className="box one">
                        <p className='p title p1'>{t('pn')}</p>
                        <p className='p p2'>{t('loremtspuitp')}</p>
                    </div>
                    <div className="box two">
                        <p className='p title p3'>{t('pf')}</p>
                        <p className='p p4'>Id lorem sapien lectus hendrerit dignissim dui facilisis viverra eleifend. A non vehicula sit eget consequat. Nisi erat at mattis quisque.</p>
                        <p className='p p5'>{t('ws')}{t('loremtspuitp')}</p>
                    </div>
                    <div className="box three">
                        <div className="justforheight">
                            <p className='p titlebig p6'>{t('spuitp')}</p>
                            <p className='p p7'>{t('loremtspuitp')}</p>
                        </div>
                        <button className='btn4'>{t('fom')} <span className='span'>&gt;</span></button>
                    </div>
                    <div className="p four">
                        <Image className='img' src='/needs.png' alt='desc' width={800} height={800} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Needs