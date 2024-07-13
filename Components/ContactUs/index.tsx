import React from 'react'
import Image from 'next/image';

const ContactUs = () => {
    return (
        <div className='ContactUs flex justify-between px-20 py-20'>
            <div className="left">
                <h1 className='h1 text-7xl font-md mb-8'>Contact</h1>
                <p className='p w-96'>Orci tortor sem maecenas arcu pulvinar et gravida sagittis urna. Sed scelerisque ante ultricies varius accumsan risus. Sed eu.</p>
                <h1 className='text-6xl mt-24 mb-32'>3341 Farland Avenue, Smiley, Texas</h1>
                <div className="leftbottom flex gap-20">
                    <p className='p2 text-4xl'>info@outdorra.com</p>
                    <p className='p3 text-4xl'>830-587-9492</p>
                </div>

            </div>

            <div className="right">
                <Image className='map'
                    src='/map.png'
                    alt="Description of image"
                    width={800}
                    height={800}
                />
            </div>

        </div>
    )
}

export default ContactUs