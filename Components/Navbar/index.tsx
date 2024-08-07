'use client'
import React, { useEffect, useRef } from 'react';
// import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import '../../app/i18n';
import { useTranslation } from 'react-i18next';
const Navbar = () => {
    // const router = useRouter();
    const { t, i18n } = useTranslation();
    useEffect(() => {
        let ENAZ = localStorage.getItem('longuage')
        if (ENAZ == 'en') {
            i18n.changeLanguage('en')
        }
        else if (ENAZ == 'az') {
            i18n.changeLanguage('az')
        }
    }, [])

    const clickhandle = (language: any) => {
        i18n.changeLanguage(language)
        if (language == 'en') {
            localStorage.setItem('longuage', 'en')
        }
        else if (language == 'az') {
            localStorage.setItem('longuage', 'az')

        }
    }
    const draw = useRef<HTMLDivElement>(null)

    const handleFab = () => {
        // setOpen(open * (-1))
        if (draw.current) {
            draw.current.classList.toggle('closed')

        }

    }

    return (
        <div className="ultraabomination">
            <div className="abomination">
                <div className="emptiness"></div>
                <div className="fatherNv bg-white">
                    <div className="containerr">
                        <div className='Navbar Navbar2 flex items-center justify-between'>
                            <Link href={'/'} className="NavbarLeft">
                                <Image className='outdorrlogo invert' src='/Logos/outdorr.png' alt="Description of image" width={300} height={300} />
                            </Link>
                            <div className={`NavbarRight flex text-black`}>
                                {/* <ul>
                                    <li className={router.pathname === '/projects' ? 'active' : ''}>
                                        <Link href="/projects">{t('projects')}</Link>
                                    </li>
                                </ul> */}

                                <Link className='link' href='/projects'>{t('projects')}</Link>
                                <Link className='link' href='/details'>{t('details')}</Link>
                                <Link className='link' href='/lists'>{t('lists')}</Link>
                                <Link className='link' href='/productdetails'>{t('choices')}</Link>
                                <Link className='link' href='/requests'>{t('requests')}</Link>
                                <Link className='link' href='/contact'>{t('contacts')}</Link>
                                <Link className='link' href='/tailored'>{t('custom')}</Link>
                                <button className='link' onClick={() => clickhandle('en')}>en</button>
                                <button className='link' onClick={() => clickhandle('az')}>az</button>
                                <FontAwesomeIcon icon={faBars} className="fa" onClick={handleFab} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="drawer closed" ref={draw}>
                <ul className='flex flex-col'>
                    <FontAwesomeIcon icon={faXmark} className="x" onClick={handleFab} />
                    <Link className='link2' href='/projects'>{t('projects')}</Link>
                    <Link className='link2' href='/details'>{t('details')}</Link>
                    <Link className='link2' href='/lists'>{t('lists')}</Link>
                    <Link className='link2' href='/productdetails'>{t('choices')}</Link>
                    <Link className='link2' href='/requests'>{t('requests')}</Link>
                    <Link className='link2' href='/contact'>{t('contacts')}</Link>
                    <Link className='link2' href='/tailored'>{t('custom')}</Link>
                </ul>
            </div>
            <div>
            </div>
        </div>

    )
}

export default Navbar;
