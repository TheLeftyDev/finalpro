import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons';


const Footer = ({ page }: any) => {
    const style: any = page == 1 ? { position: 'relative', marginTop: '-3vw', zIndex: '1' } : {};
    return (
        <div className="father bg-black" style={style}>
            <div className="containerr">
                <div className="Footer">

                    <div className='FooterTop flex justify-center'>
                        <Image className='outdorrlogo' src='/Logos/outdorr.png' alt="" width={500} height={500} />
                    </div>
                    <div className="FooterDescription text-white text-center">
                        <h1>Dayanıqlı Açıq Hava Yaşam Strukturları I Xüsusi Pergolalar, Günəş Otaqları, Luvrlar və ADU Modulları</h1>
                    </div>
                    <div className='divider'></div>
                    <div className="clickables">
                        <Link className='link' href='/allpages/projects'>Proyektlər &nbsp;&nbsp; &nbsp;&gt;</Link>
                        <Link className='link' href='/allpages/details'>Detallar &nbsp;&nbsp; &nbsp;&gt;</Link>
                        <Link className='link' href='/allpages/lists'>List &nbsp;&nbsp; &nbsp;&gt;</Link>
                        <Link className='link' href='/allpages/productdetails'>Seçimlər &nbsp;&nbsp; &nbsp;&gt;</Link>
                        <Link className='link' href='/allpages/requests'>Sifarişlər &nbsp;&nbsp; &nbsp;&gt;</Link>
                        <Link className='link' href='/allpages/contact'>Əlaqə &nbsp;&nbsp; &nbsp;&gt;</Link>
                        <Link className='link' href='/allpages/tailored'>Fərdiləşmiş &nbsp;&nbsp; &nbsp;&gt;</Link>
                    </div>
                    <div className='divider'></div>
                    <div className="clickables">
                        <Link href='/projects'>Haqqımızda &nbsp;&nbsp; &nbsp;&gt;</Link>
                        <Link className='link' href='/allpages/projects'>Proyektlər &nbsp;&nbsp; &nbsp;&gt;</Link>
                        <Link className='link' href='/allpages/requests'>Sifarişlər &nbsp;&nbsp; &nbsp;&gt;</Link>
                        <Link className='link' href='/allpages/tailored'>Fərdiləşmiş &nbsp;&nbsp; &nbsp;&gt;</Link>
                    </div>

                    <div className="ContFolSub">
                        <div className="Contact flex flex-col">
                            <div className='top'>
                                <h1 className='contact'>Contact</h1>
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
                                <h1>Follow Us</h1>
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
                                    <h1>Subscribe</h1>
                                </div>
                                <div className="bottom2">
                                    <h1 className='msg'><FontAwesomeIcon icon={faEnvelope} /></h1>
                                    <input className='input' type="text" placeholder='Enter your email address' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='divider'></div>
                    <div>
                        <h1 className='text2'>All Rights Reserved By The Outdorra Inc  /  US.California  /  2023</h1>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer