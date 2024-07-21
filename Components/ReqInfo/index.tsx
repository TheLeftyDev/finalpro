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
            <p className='p3 font-semibold'>Request information or a quote</p>
            <div>
                <p className='p4'>Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget duis elit lectus turpis leo molestie. Cras quis libero porttitor faucibus. Scelerisque nec mattis.</p>
                <button className='btn'>Contact Us <span className='span'>&gt;</span></button>
            </div>
        </div>

    )
}

export default ReqInfo