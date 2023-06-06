// import React from 'react';
import bg1 from '../../assets/bg1-Parallax.jpg'

const Section = () => {
    return (
        <div id="slide2" className="carousel-item relative w-full justify-center">
            <img src={bg1} className="w-full" />
            <div className="absolute flex gap-4 top-0 items-center bottom-0">
                <div className='space-y-5 pl-20 text-center'>
                    <h2 className='md:text-6xl md:font-semibold text-white'>Our Instructors Section!</h2>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laboriosam!.</p>
                </div>
            </div>
        </div>
    );
};

export default Section;