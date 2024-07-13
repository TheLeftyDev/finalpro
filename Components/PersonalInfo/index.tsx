import React from 'react'
import { Countries } from '@/app/Mockdata';
import { callingCodes } from '@/app/Mockdata';

const PersonalInfo = () => {
    return (
        <div className='personalInfo'>
            <p className='p3 font-semibold'>Personal Info</p>

            <form className='form1'>
                <label className='lbl1' htmlFor="ad">Ad və Soyad</label>
                <input id='ad' className='input1' placeholder='Tam Adınız' type="text" />
            </form>



            <div className="number grid grid-cols-2">
                <form className='form1' action="#">
                    <label className='lbl1'>Ölkə Kodu</label>
                    <input list="browsers" className='input1' placeholder='+994' />
                    <datalist id="browsers">
                        {callingCodes.map((code, i) => (
                            <option key={i} value={code}></option>
                        ))}
                    </datalist>
                </form>
                <form className='form1'>
                    <label className='lbl1' htmlFor="ad">Nömrə</label>
                    <input id='ad' className='input1' placeholder='773667766' type="text" />
                </form>
            </div>


            <form className='form1'>
                <label className='lbl1' htmlFor="ad">Email</label>
                <input id='ad' className='input1' placeholder='Email adresiniz' type="text" />
            </form>

            <div className="fourInputs grid grid-cols-2">
                <form className='form1'>
                    <label className='lbl1' htmlFor="ad">Ölkə</label>
                    <input list="browsers" className='input1' placeholder='Seçin' />
                    <datalist id="browsers">
                        {Countries.map((country, i) => (
                            <option key={i} value={country}></option>
                        ))}
                    </datalist>
                </form>
                <form className='form1'>
                    <label className='lbl1' htmlFor="ad">Region</label>
                    <input id='ad' className='input1' placeholder='Region daxil edin' type="text" />
                </form>
                <form className='form1'>
                    <label className='lbl1' htmlFor="ad">Şəhər</label>
                    <input id='ad' className='input1' placeholder='Şəhər daxil edin' type="text" />
                </form>
                <form className='form1'>
                    <label className='lbl1' htmlFor="ad">Zip kod</label>
                    <input id='ad' className='input1' placeholder='Zip kodunuzu daxil edin' type="text" />
                </form>
            </div>

            <div className='ProjectInfo'>

                <p className='p4 font-semibold'>Project Info</p>

                <form className='form1'>
                    <label className='lbl1' htmlFor="ad">Əsas sistemlər</label>
                    <input list='options' className='input1' placeholder='Seçin' />
                    <datalist id="options">
                        <option value="Pergola"></option>
                        <option value="Sunroom"></option>
                        <option value="Luvr"></option>
                    </datalist>
                </form>
                <form className='form1'>
                    <label className='lbl1' htmlFor="ad">Örtük sistemləri</label>
                    <input list='options2' className='input1' placeholder='Seçin' />
                    <datalist id="options2">
                        <option value="Yarım"></option>
                        <option value="Tam"></option>
                        <option value="Alayarımçıq"></option>
                    </datalist>
                </form>
                <form className='form1'>
                    <label className='lbl1' htmlFor="ad">Kölgələmə sistemləri</label>
                    <input list='options3' className='input1' placeholder='Seçin' />
                    <datalist id="options3">
                        <option value="Tam"></option>
                        <option value="Yarımçıq"></option>
                        <option value="Üstüaçıq"></option>
                    </datalist>
                </form>
                <button className='btn5'>Request Project <span className='span'>&gt;</span></button>


            </div>
        </div>

    )
}

export default PersonalInfo