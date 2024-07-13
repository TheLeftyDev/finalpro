'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    const [open, setOpen] = useState(1)
    // const [style, setStyle] = useState({})
    const draw = useRef(null)
    // useEffect(() => {
    //     if (open < 0) {
    //         setStyle({ position: 'fixed', width: '40vw', height: '100vh', backgroundColor: '#333333', zIndex: '80000', left: '60vw', userSelect: 'none', transition: '1s',color: 'white' })
    //     }
    //     else {
    //         setStyle({ position: 'fixed',width: '40vw',height: '100vh',backgroundColor: 'inherit', zIndex: '80000', left: '100vw', transition: '1s', color: 'inherit' })
    //     }
    // }, [open])

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
                                <Image className='outdorrlogo invert'
                                    src='/Logos/outdorr.png'
                                    alt="Description of image"
                                    width={300}
                                    height={300}
                                />
                            </Link>
                            <div className={`NavbarRight flex text-black`}>
                                <Link className='link' href='/allpages/projects'>Proyektlər</Link>
                                <Link className='link' href='/allpages/details'>Detallar</Link>
                                <Link className='link' href='/allpages/lists'>List</Link>
                                <Link className='link' href='/allpages/productdetails'>Seçimlər</Link>
                                <Link className='link' href='/allpages/requests'>Sifarişlər</Link>
                                <Link className='link' href='/allpages/contact'>Əlaqə</Link>
                                <Link className='link' href='/allpages/tailored'>Fərdiləşmiş</Link>
                                <FontAwesomeIcon icon={faBars} className="fa" onClick={handleFab} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="drawer closed" ref={draw}>
                <ul className='flex flex-col'>
                    <FontAwesomeIcon icon={faXmark} className="x" onClick={handleFab} />
                    <Link className='link2' href='/allpages/projects'>Proyektlər</Link>
                    <Link className='link2' href='/allpages/details'>Detallar</Link>
                    <Link className='link2' href='/allpages/lists'>List</Link>
                    <Link className='link2' href='/allpages/productdetails'>Seçimlər</Link>
                    <Link className='link2' href='/allpages/requests'>Sifarişlər</Link>
                    <Link className='link2' href='/allpages/contact'>Əlaqə</Link>
                    <Link className='link2' href='/allpages/tailored'>Fərdiləşmiş</Link>
                </ul>
            </div>
            <div>
            </div>
        </div>

    )
}

export default Navbar;
