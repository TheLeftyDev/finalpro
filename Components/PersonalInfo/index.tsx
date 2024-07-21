import React from 'react'
import { Countries } from '@/app/Mockdata';
import { callingCodes } from '@/app/Mockdata';
import { useTranslation } from 'react-i18next';

const PersonalInfo = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className='personalInfo'>
            <p className='p3 font-semibold'>{t('pi')}</p>

            <form className='form1'>
                <label className='lbl1' htmlFor="ad">{t('nas')}</label>
                <input id='ad' className='input1' placeholder={t('ta')} type="text" />
            </form>
            <div className="number grid grid-cols-2">
                <form className='form1' action="#">
                    <label className='lbl1'>{t('ok')}</label>
                    <input list="browsers" className='input1' placeholder='+994' />
                    <datalist id="browsers">
                        {callingCodes.map((code, i) => (
                            <option key={i} value={code}></option>
                        ))}
                    </datalist>
                </form>
                <form className='form1'>
                    <label className='lbl1' htmlFor="ad">{t('no')}</label>
                    <input id='ad' className='input1' placeholder='773667766' type="text" />
                </form>
            </div>


            <form className='form1'>
                <label className='lbl1' htmlFor="ad">Email</label>
                <input id='ad' className='input1' placeholder={t('ea')} type="text" />
            </form>

            <div className="fourInputs grid grid-cols-2">
                <form className='form1'>
                    <label className='lbl1' htmlFor="ad">{t('olke')}</label>
                    <input list="browsers2" className='input1' placeholder={t('secin')} />
                    <datalist id="browsers2">
                        {Countries.map((country, i) => (
                            <option key={i} value={country}></option>
                        ))}
                    </datalist>
                </form>
                <form className='form1'>
                    <label className='lbl1' htmlFor="ad">{t('reg')}</label>
                    <input id='ad' className='input1' placeholder={t('region')} type="text" />
                </form>
                <form className='form1'>
                    <label className='lbl1' htmlFor="ad">{t('seh')}</label>
                    <input id='ad' className='input1' placeholder={t('seher')} type="text" />
                </form>
                <form className='form1'>
                    <label className='lbl1' htmlFor="ad">{t('zi')}</label>
                    <input id='ad' className='input1' placeholder={t('zip')} type="text" />
                </form>
            </div>

            <div className='ProjectInfo'>

                <p className='p4 font-semibold'>{t('pi')}</p>

                <form className='form1'>
                    <label className='lbl1' htmlFor="ad">{t('esas')}</label>
                    <input list='options' className='input1' placeholder={t('secin')} />
                    <datalist id="options">
                        <option value="Pergola"></option>
                        <option value="Sunroom"></option>
                        <option value="Luvr"></option>
                    </datalist>
                </form>
                <form className='form1'>
                    <label className='lbl1' htmlFor="ad">{t('os')}</label>
                    <input list='options2' className='input1' placeholder={t('secin')} />
                    <datalist id="options2">
                        <option value="Yarım"></option>
                        <option value="Tam"></option>
                        <option value="Alayarımçıq"></option>
                    </datalist>
                </form>
                <form className='form1'>
                    <label className='lbl1' htmlFor="ad">{t('ks')}</label>
                    <input list='options3' className='input1' placeholder={t('secin')} />
                    <datalist id="options3">
                        <option value="Tam"></option>
                        <option value="Yarımçıq"></option>
                        <option value="Üstüaçıq"></option>
                    </datalist>
                </form>
                <button className='btn5'>{t('rap')}<span className='span'>&gt;</span></button>


            </div>
        </div>

    )
}

export default PersonalInfo