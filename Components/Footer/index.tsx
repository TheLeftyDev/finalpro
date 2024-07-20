import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';


const Footer = ({ page }: any) => {
    const { t, i18n } = useTranslation();
    const style: any = page == 1 ? { position: 'relative', marginTop: '-3vw', zIndex: '1' } : {};
    return (
        <div className="father bg-black" style={style}>
            <div className="containerr">
                <div className="Footer">

                    <div className='FooterTop flex justify-center'>
                        <Image className='outdorrlogo' src='/Logos/outdorr.png' alt="" width={500} height={500} />
                    </div>
                    <div className="FooterDescription text-white text-center">
                        <h1>{t('solsicp')}</h1>
                    </div>
                    <div className='divider'></div>
                    <div className="clickables">
                        <Link className='link' href='/allpages/projects'>{t('projects')} &nbsp;&nbsp; &nbsp;&gt;</Link>
                        <Link className='link' href='/allpages/details'>{t('details')} &nbsp;&nbsp; &nbsp;&gt;</Link>
                        <Link className='link' href='/allpages/lists'>{t('lists')} &nbsp;&nbsp; &nbsp;&gt;</Link>
                        <Link className='link' href='/allpages/productdetails'>{t('choices')} &nbsp;&nbsp; &nbsp;&gt;</Link>
                        <Link className='link' href='/allpages/requests'>{t('requests')} &nbsp;&nbsp; &nbsp;&gt;</Link>
                        <Link className='link' href='/allpages/contact'>{t('contacts')} &nbsp;&nbsp; &nbsp;&gt;</Link>
                        <Link className='link' href='/allpages/tailored'>{t('custom')} &nbsp;&nbsp; &nbsp;&gt;</Link>
                    </div>
                    <div className='divider'></div>
                    <div className="clickables">
                        <Link className='link' href='/allpages/details'>{t('details')} &nbsp;&nbsp; &nbsp;&gt;</Link>
                        <Link className='link' href='/allpages/projects'>{t('projects')} &nbsp;&nbsp; &nbsp;&gt;</Link>
                        <Link className='link' href='/allpages/requests'>{t('requests')} &nbsp;&nbsp; &nbsp;&gt;</Link>
                        <Link className='link' href='/allpages/tailored'>{t('custom')} &nbsp;&nbsp; &nbsp;&gt;</Link>
                    </div>

                    <div className="ContFolSub">
                        <div className="Contact flex flex-col">
                            <div className='top'>
                                <h1 className='contact'>{t('contacts')}</h1>
                            </div>
                            <div className="bottom">
                                <div className="adress">
                                    <h1>900 Pepper Tree Ln, Suit 500</h1>
                                    <h1>Santa Clara, CA 95051</h1>
                                </div>
                                <div className="mailnumber">
                                    <h1>info@outdorra.com</h1>
                                    <h1>+1 (669) 301 0915</h1>
                                </div>
                            </div>

                        </div>
                        <div className="Follow">
                            <div className='text'>
                                <h1>{t('fu')}</h1>
                            </div>
                            <div className="bottom">
                                <h1 className='icon fb'><FontAwesomeIcon icon={faFacebook} /></h1>
                                <h1 className='icon ins'><FontAwesomeIcon icon={faInstagram} /></h1>
                                <h1 className='icon lnk'><FontAwesomeIcon icon={faLinkedin} /></h1>
                                <h1 className='icon pin'><FontAwesomeIcon icon={faPinterest} /></h1>
                            </div>
                        </div>
                        <div className="Sub flex flex-col">
                            <div className="top">
                                <div className='text'>
                                    <h1>{t('sub')}</h1>
                                </div>
                                <div className="bottom2">
                                    <h1 className='msg'><FontAwesomeIcon icon={faEnvelope} /></h1>
                                    <input className='input' type="text" placeholder={t('eyea')} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='divider'></div>
                    <div>
                        <h1 className='text2'>{t('arrbtoi')}</h1>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer