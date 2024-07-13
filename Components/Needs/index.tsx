import React from 'react'
import Image from 'next/image';

const Needs = () => {
    return (
        <div className="father">
            <div className="containerr">
                <div className='needs grid grid-cols-2'>
                    <div className="box one">
                        <p className='p title p1'>Project needs</p>
                        <p className='p p2'>Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget duis elit lectus turpis leo molestie. Cras quis libero porttitor faucibus. Scelerisque nec mattis.</p>
                    </div>
                    <div className="box two">
                        <p className='p title p3'>Project features</p>
                        <p className='p p4'>Id lorem sapien lectus hendrerit dignissim dui facilisis viverra eleifend. A non vehicula sit eget consequat. Nisi erat at mattis quisque.</p>
                        <p className='p p5'>Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget duis elit lectus turpis leo molestie. Cras quis libero porttitor faucibus. Scelerisque nec mattis.</p>
                    </div>
                    <div className="box three">
                        <p className='p titlebig p6'>Sloped Pergola used in this Project</p>
                        <p className='p p7'>Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget duis elit lectus turpis leo molestie. Cras quis libero porttitor faucibus. Scelerisque nec mattis.</p>
                        <button className='btn4'>Find Out More <span className='span'>&gt;</span></button>
                    </div>
                    <div className="p four">
                        <Image className='img' src='/needs.png' alt='desc' width={800} height={800} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Needs