import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Inspire = () => {
    return (
        <div className="father">
            <div className="containerr">
                <div className='inspire'>
                    <p className='p1'>Let Us Inspire You!</p>
                    <div className="inspireMain flex">
                        <div className="left">
                            <Image className='i1' src='/Inspire/01.png' alt='desc' width={800} height={800} />
                        </div>
                        <div className="middle flex flex-col">
                            <div>
                                <Image className='i2' src='/Inspire/02.png' alt='desc' width={800} height={800} />
                            </div>
                            <div className="middlebottom">
                                <p className='p2'>Do you have a new project ?</p>
                                <p className='p3'>Talk to our sales experts now</p>
                                <p className='p4'>Please join to the hot line or</p>
                                <p className='p5'>call to +1 (669) 301 0915</p>
                                <Link className='link2' href={'/allpages/contact'}><Image className='i4' src='/Inspire/04.png' alt='desc' width={800} height={800} /></Link>
                                
                            </div>
                        </div>
                        <div className="right flex flex-col justify-between">
                            <Image className='i3' src='/Inspire/03.png' alt='desc' width={800} height={800} />
                            <Link className='link' href='/allpages/projects'> → See All Our Projects</Link>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Inspire