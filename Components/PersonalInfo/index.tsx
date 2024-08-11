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
                <input id='ad' className='inputs' placeholder={t('ta')} type="text" />
            </form>
            <div className="number grid grid-cols-2">
                <form className='form1'>
                    <select id="choices" name="choices" className="selects" defaultValue="+994">
                        {callingCodes.map((code, i) => (
                            <option key={i} value={code}>{code}</option>
                        ))}
                    </select>
                </form>

                <form className='form1'>
                    <input id='ad' className='inputs' placeholder='773667766' type="text" />
                </form>
            </div>


            <form className='form1'>
                <input id='ad' className='inputs' placeholder={t('ea')} type="text" />
            </form>

            <div className="fourInputs grid grid-cols-2">
                <form className='form1'>
                    <select id="choices" name="choices" className="selects" defaultValue="Azerbaijan">
                        {Countries.map((country, i) => (
                            <option key={i} value={country}>{country}</option>
                        ))}
                    </select>
                </form>
                <form className='form1'>
                    <input id='ad' className='inputs' placeholder={t('region')} type="text" />
                </form>
                <form className='form1'>
                    <input id='ad' className='inputs' placeholder={t('seher')} type="text" />
                </form>
                <form className='form1'>
                    <input id='ad' className='inputs' placeholder={t('zip')} type="text" />
                </form>
            </div>
            {/* //////////////////////////////////////////////////     PROJECT SELECTS    /////////////////////////////////////////////////////////// */}
            <div className='ProjectInfo'>
                <p className='p4 font-semibold'>{t('pri')}</p>
                <form className='form1'>
                    <select id="choices" name="choices" className="selects" defaultValue="">
                        <option value="" disabled hidden>{t('ms')}</option>
                        <option value="option1">{t('ms1')}</option>
                        <option value="option2">{t('ms2')}</option>
                        <option value="option3">{t('ms3')}</option>
                    </select>
                </form>


                <form className='form1'>
                    <select id="choices" className="selects" name="choices" defaultValue="">
                        <option value="" disabled hidden>{t('os')}</option>
                        <option value="option1"></option>
                        <option value="option2"></option>
                        <option value="option3"></option>
                    </select>
                </form>

                <form className='form1'>
                    <select id="options3" className="selects" defaultValue="">
                        <option value="" disabled hidden>{t('ks')}</option>
                        <option value="option1"></option>
                        <option value="option2"></option>
                        <option value="option3">Üstüaçıq</option>
                    </select>
                </form>
                <button className='btn5'>{t('rap')}<span className='span'>&gt;</span></button>


            </div>
        </div>

    )
}

export default PersonalInfo